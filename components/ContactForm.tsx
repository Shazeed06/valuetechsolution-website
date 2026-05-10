"use client";

import { useState, useTransition } from "react";
import { Send, Check, AlertCircle, MessageCircle } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

const services = [
  "AI Automation",
  "Web Development",
  "SEO Optimization",
  "n8n / GHL / Zapier",
  "Python automation",
  "Design Systems",
  "Not sure yet",
];

const budgets = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k+"];

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });
  const [pending, startTransition] = useTransition();

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function whatsappForCurrent() {
    const lines = [
      `Hi ${CONTACT.brand},`,
      "",
      `I'm ${form.name || "[your name]"}${form.company ? ` from ${form.company}` : ""}.`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      form.message || "[a few project details]",
      "",
      form.email ? `Reply to: ${form.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return whatsappLink(lines);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      ...form,
      service,
      budget,
      hp: String(fd.get("vt_company_url") ?? ""),
      source:
        typeof window !== "undefined"
          ? document.referrer || "direct"
          : "direct",
    };
    startTransition(async () => {
      const res = await sendContact(payload);
      if (res.ok) setSubmitted(true);
      else setError(res.error);
    });
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-carbon-950 bg-carbon-950 p-10 text-center text-white shadow-depth">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-carbon-950">
          <Check size={24} />
        </div>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.025em]">
          Message received.
        </h3>
        <p className="mt-3 text-white/65">
          Thanks — we&apos;ll reply within one business day with next steps and
          a few discovery questions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappForCurrent()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            <MessageCircle size={14} /> WhatsApp us too
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm text-white/70 underline-offset-[6px] hover:text-white hover:underline"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-carbon-950/[0.08] bg-white p-7 shadow-ring sm:p-9"
    >
      {/* Honeypot — visually hidden, off-screen. Bots fill it; humans don't. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <label htmlFor="vt_company_url">
          Company URL (leave blank)
          <input
            id="vt_company_url"
            name="vt_company_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Jane Cooper"
          required
          value={form.name}
          onChange={(e) => update("name", e.currentTarget.value)}
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
          value={form.email}
          onChange={(e) => update("email", e.currentTarget.value)}
        />
        <Field
          label="Company"
          name="company"
          placeholder="Acme Inc."
          value={form.company}
          onChange={(e) => update("company", e.currentTarget.value)}
        />
        <Field
          label="Website"
          name="website"
          placeholder="https://acme.com"
          value={form.website}
          onChange={(e) => update("website", e.currentTarget.value)}
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-carbon-500">
          Service
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                service === s
                  ? "bg-carbon-950 text-white"
                  : "border border-carbon-950/15 bg-white text-carbon-700 hover:border-carbon-950"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-carbon-500">
          Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                budget === b
                  ? "bg-carbon-950 text-white"
                  : "border border-carbon-950/15 bg-white text-carbon-700 hover:border-carbon-950"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-carbon-500">
          Project details
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => update("message", e.currentTarget.value)}
          placeholder="What are you trying to build, and what does success look like in 90 days?"
          className="w-full rounded-xl border border-carbon-950/15 bg-white px-4 py-3 text-sm text-carbon-950 placeholder:text-carbon-300 focus:border-carbon-950 focus:outline-none"
        />
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send via email"} <Send size={14} />
        </button>
        <a
          href={whatsappForCurrent()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          <MessageCircle size={14} /> Send via WhatsApp
        </a>
      </div>

      <p className="mt-4 text-xs text-carbon-300">
        Lead lands in our inbox at{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">
          {CONTACT.email}
        </a>
        {" "}or directly to {CONTACT.phone} on WhatsApp. By submitting, you
        agree to our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-carbon-500">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-xl border border-carbon-950/15 bg-white px-4 py-3 text-sm text-carbon-950 placeholder:text-carbon-300 focus:border-carbon-950 focus:outline-none"
      />
    </div>
  );
}
