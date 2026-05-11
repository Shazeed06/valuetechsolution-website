"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { CONTACT } from "@/lib/contact-config";
import { env } from "@/lib/env";

type Result = { ok: true } | { ok: false; error: string };

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  budget: string;
  message: string;
  source?: string;
  // Honeypot — must remain empty for the request to be considered human
  hp?: string;
};

// In-memory rate limiter. For multi-region production, swap with Upstash KV.
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_MAX = 10; // 10 submissions per IP per hour
const buckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || now > b.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  b.count += 1;
  return b.count > RATE_MAX;
}

export async function sendContact(payload: ContactPayload): Promise<Result> {
  // 1. Honeypot — bots tend to fill every field
  if (payload.hp && payload.hp.trim().length > 0) {
    // Silent reject — pretend success so bots don't retry
    console.warn("[contact] honeypot tripped");
    return { ok: true };
  }

  // 2. Rate-limit by client IP
  try {
    const h = await headers();
    const ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      h.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return {
        ok: false,
        error: "Too many submissions. Please try again later or email us directly.",
      };
    }
  } catch {
    // headers() may not be available in some test environments — proceed.
  }

  // 3. Server-side validation
  if (!payload.name?.trim())
    return { ok: false, error: "Please add your name." };
  if (!/^\S+@\S+\.\S+$/.test(payload.email))
    return { ok: false, error: "Please add a valid email." };
  if (!payload.message?.trim() || payload.message.length < 10)
    return { ok: false, error: "Please add a few project details." };
  if (payload.message.length > 5000)
    return { ok: false, error: "Message is too long." };

  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : null,
    payload.website ? `Website: ${payload.website}` : null,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget}`,
    `Source: ${payload.source ?? "direct"}`,
    "",
    "—",
    "",
    payload.message,
  ].filter(Boolean) as string[];

  const subject = `New lead · ${payload.service} · ${payload.name}`;
  const text = lines.join("\n");
  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;color:#0a0a0a;max-width:560px">
      <h2 style="margin:0 0 16px;font-size:18px;font-weight:700">${subject}</h2>
      <table style="border-collapse:collapse;font-size:14px;margin-bottom:16px">
        <tbody>
          <tr><td style="padding:4px 12px 4px 0;color:#525252">Name</td><td style="padding:4px 0">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#525252">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
          ${payload.company ? `<tr><td style="padding:4px 12px 4px 0;color:#525252">Company</td><td style="padding:4px 0">${escapeHtml(payload.company)}</td></tr>` : ""}
          ${payload.website ? `<tr><td style="padding:4px 12px 4px 0;color:#525252">Website</td><td style="padding:4px 0"><a href="${escapeHtml(payload.website)}">${escapeHtml(payload.website)}</a></td></tr>` : ""}
          <tr><td style="padding:4px 12px 4px 0;color:#525252">Service</td><td style="padding:4px 0">${escapeHtml(payload.service)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#525252">Budget</td><td style="padding:4px 0">${escapeHtml(payload.budget)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#525252">Source</td><td style="padding:4px 0">${escapeHtml(payload.source ?? "direct")}</td></tr>
        </tbody>
      </table>
      <div style="white-space:pre-wrap;border-top:1px solid #ebebeb;padding-top:16px;line-height:1.55">${escapeHtml(payload.message)}</div>
    </div>
  `;

  const sent: string[] = [];
  const failed: string[] = [];

  // 4. Email via Resend
  if (env.RESEND_API_KEY) {
    try {
      const resend = new Resend(env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: env.RESEND_FROM ?? "Value Tech Solution <onboarding@resend.dev>",
        to: [CONTACT.email],
        replyTo: payload.email,
        subject,
        text,
        html,
      });
      if (error) {
        console.error("[contact] resend error", error);
        failed.push("email");
      } else {
        sent.push("email");
      }
    } catch (err) {
      console.error("[contact] resend exception", err);
      failed.push("email");
    }
  }

  // 5. Webhook
  if (env.CONTACT_WEBHOOK_URL) {
    try {
      const slackPayload = {
        text: `*${subject}*\n${text}`,
        ...payload,
        received_at: new Date().toISOString(),
      };
      const res = await fetch(env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackPayload),
      });
      if (!res.ok) {
        console.error("[contact] webhook failed", res.status);
        failed.push("webhook");
      } else {
        sent.push("webhook");
      }
    } catch (err) {
      console.error("[contact] webhook error", err);
      failed.push("webhook");
    }
  }

  // Always log the full lead so it's never silently lost — visible in
  // Vercel logs even when no delivery channel is configured.
  console.log("[contact] LEAD", { subject, sent, failed, payload });

  // No delivery channel configured — fail loud instead of silent success.
  if (!env.RESEND_API_KEY && !env.CONTACT_WEBHOOK_URL) {
    console.error(
      "[contact] No RESEND_API_KEY or CONTACT_WEBHOOK_URL configured — lead was not delivered."
    );
    return {
      ok: false,
      error: `Our inbox isn't connected yet. Please email ${CONTACT.email} directly — we'll reply within a business day.`,
    };
  }

  if (sent.length === 0) {
    return {
      ok: false,
      error: `We couldn't reach our inbox. Please email ${CONTACT.email} directly.`,
    };
  }

  return { ok: true };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
