"use server";

import { Resend } from "resend";
import { CONTACT } from "@/lib/contact-config";

type Result =
  | { ok: true }
  | { ok: false; error: string };

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  budget: string;
  message: string;
  source?: string;
};

/**
 * Sends a contact submission via:
 *  1. Resend email to CONTACT.email (if RESEND_API_KEY is set)
 *  2. POST to CONTACT_WEBHOOK_URL — Slack, n8n, Zapier, Make, your CRM (if set)
 *  3. Server-console fallback (dev / preview)
 *
 * The user also gets a "Send via WhatsApp" alternative in the success state
 * (see ContactForm.tsx).
 */
export async function sendContact(payload: ContactPayload): Promise<Result> {
  // Server-side validation
  if (!payload.name?.trim())
    return { ok: false, error: "Please add your name." };
  if (!/^\S+@\S+\.\S+$/.test(payload.email))
    return { ok: false, error: "Please add a valid email." };
  if (!payload.message?.trim() || payload.message.length < 10)
    return { ok: false, error: "Please add a few project details." };

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

  // 1) Email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const fromAddress =
    process.env.RESEND_FROM || `Value Tech Solution <onboarding@resend.dev>`;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: fromAddress,
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

  // 2) Webhook (Slack / n8n / Zapier / Make / your CRM)
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const slackPayload = {
        text: `*${subject}*\n${text}`,
        ...payload,
        received_at: new Date().toISOString(),
      };
      const res = await fetch(webhook, {
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

  // 3) Always log on server (dev/preview safety net)
  console.log("[contact]", { subject, sent, failed });

  // If both delivery channels failed AND we tried at least one, surface error
  if (sent.length === 0 && (resendKey || webhook)) {
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
