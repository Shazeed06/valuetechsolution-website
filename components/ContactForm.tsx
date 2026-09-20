"use client";

import { useState, useTransition } from "react";
import { Send, Check, AlertCircle, MessageCircle } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

const services = [
  "Custom Web Development",
  "Next.js Website Rebuild",
  "UI/UX & Product Design",
  "Technical SEO & Speed",
  "E-Commerce Storefront",
  "Web Application & SaaS",
  "Not sure yet",
];

const budgets = ["< $1k", "$1k – $3k", "$3k – $8k", "$8k+"];

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
      <div className="rounded-3xl border border-primary/40 bg-[#141414] p-10 text-center text-white shadow-xl">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-[#141414]">
          <Check size={26} className="stroke-[3]" />
        </div>
        <h3 className="mt-4 font-montserrat text-3xl font-bold tracking-tight">
          Message received.
        </h3>
        <p className="mt-3 text-white/70">
          Thanks — we&apos;ll reply within one business day with next steps and a fixed-price scope.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappForCurrent()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            <MessageCircle size={16} /> WhatsApp us too
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
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
      className="rounded-3xl border border-[#d8d3ce] bg-white p-7 shadow-sm sm:p-9"
    >
      {/* Honeypot — visually hidden, off-screen */}
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
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">
          Service
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                service === s
                  ? "bg-[#141414] text-white shadow-sm"
                  : "border border-[#d8d3ce] bg-[#f7f2ea] text-[#141414] hover:border-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">
          Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                budget === b
                  ? "bg-primary text-white shadow-sm"
                  : "border border-[#d8d3ce] bg-[#f7f2ea] text-[#141414] hover:border-primary"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">
          Project details
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => update("message", e.currentTarget.value)}
          placeholder="What are you trying to build, and what does success look like in 90 days?"
          className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3 text-sm text-[#141414] placeholder:text-[#7d7b77]/60 focus:border-primary focus:bg-white focus:outline-none transition-colors"
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
          className="inline-flex items-center gap-2 rounded-full bg-[#141414] hover:bg-black text-white px-7 py-3.5 text-sm font-semibold transition-all disabled:opacity-60 shadow-md active:scale-95"
        >
          {pending ? "Sending…" : "Send Message"} <Send size={14} className="text-primary" />
        </button>
        <a
          href={whatsappForCurrent()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-[#f7f2ea] px-6 py-3.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          <MessageCircle size={16} className="text-emerald-600" /> WhatsApp Us
        </a>
      </div>

      <p className="mt-4 text-xs text-[#7d7b77]">
        Lead lands directly in our founder inbox at{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline text-[#141414]">
          {CONTACT.email}
        </a>
        {" "}or WhatsApp at {CONTACT.whatsappNumbers[0].pretty}.
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
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3 text-sm text-[#141414] placeholder:text-[#7d7b77]/60 focus:border-primary focus:bg-white focus:outline-none transition-colors"
      />
    </div>
  );
}
