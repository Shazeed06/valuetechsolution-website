"use client";

import { useState, useTransition } from "react";
import { Send, Check, AlertCircle, MessageCircle, ChevronDown, Briefcase, Globe } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

const services = [
  "Custom Website",
  "Next.js Rebuild",
  "UI/UX & Design",
  "SEO & Speed Audit",
  "Other / Advisory",
];

const timelines = ["ASAP (2–3 wks)", "Standard (3–5 wks)", "Flexible / Planning"];

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
  const [timeline, setTimeline] = useState(timelines[0]);
  const [showOptional, setShowOptional] = useState(false);
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
      `I'm ${form.name || "[my name]"}${form.company ? ` from ${form.company}` : ""}.`,
      `Service: ${service}`,
      `Timeline: ${timeline}`,
      form.message ? `Details: ${form.message}` : "I'd like to talk about a new project.",
    ].join("\n");
    return whatsappLink(lines);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      website: form.website || undefined,
      service,
      budget: timeline,
      message: form.message,
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
      <div className="rounded-3xl border border-[#1ab9a2]/40 bg-[#141414] p-8 sm:p-10 text-center text-white shadow-xl">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#1ab9a2] text-white">
          <Check size={26} className="stroke-[3]" />
        </div>
        <h3 className="mt-4 font-montserrat text-2xl sm:text-3xl font-black tracking-tight">
          Message received.
        </h3>
        <p className="mt-3 text-sm text-white/70 max-w-sm mx-auto">
          Thanks! Our lead architect will review your project brief and reply within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappForCurrent()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 shadow-md"
          >
            <MessageCircle size={16} /> WhatsApp us too
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[#d8d3ce] bg-white p-6 sm:p-9 shadow-sm"
    >
      {/* Honeypot */}
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
          Company URL
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

      {/* Service selector */}
      <div className="mb-5">
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#141414]">
          1. What are you looking to build? *
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                service === s
                  ? "bg-[#141414] text-white shadow-sm"
                  : "border border-[#d8d3ce] bg-[#f7f2ea] text-[#141414] hover:border-[#1ab9a2]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Core inputs */}
      <div className="grid gap-3.5 sm:grid-cols-2 mb-5">
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#141414]">
            Your Name *
          </label>
          <input
            name="name"
            required
            placeholder="Alex Miller"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#141414]">
            Work Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#141414]">
          Project Brief *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you're building, target launch dates, or any reference sites..."
          className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Timeline selection */}
      <div className="mb-5">
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#141414]">
          Target Timeline
        </label>
        <div className="flex flex-wrap gap-2">
          {timelines.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTimeline(t)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                timeline === t
                  ? "bg-[#1ab9a2] text-white shadow-sm"
                  : "border border-[#d8d3ce] bg-[#f7f2ea] text-[#666460] hover:border-[#1ab9a2]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Optional fields toggle */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666460] hover:text-[#141414] transition-colors"
        >
          <span>{showOptional ? "− Hide optional fields" : "+ Add company name & website (optional)"}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${showOptional ? "rotate-180" : ""}`}
          />
        </button>

        {showOptional && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 pt-1">
            <div className="relative">
              <Briefcase size={14} className="absolute left-3.5 top-3.5 text-[#7d7b77]" />
              <input
                placeholder="Company name"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="w-full rounded-xl border border-[#d8d3ce] bg-[#f7f2ea] pl-9 pr-3 py-2.5 text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none"
              />
            </div>
            <div className="relative">
              <Globe size={14} className="absolute left-3.5 top-3.5 text-[#7d7b77]" />
              <input
                placeholder="Current website"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
                className="w-full rounded-xl border border-[#d8d3ce] bg-[#f7f2ea] pl-9 pr-3 py-2.5 text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-xs sm:text-sm text-red-700">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#141414] hover:bg-black text-white px-7 py-3.5 text-sm font-semibold transition-all disabled:opacity-60 shadow-md active:scale-95"
        >
          {pending ? "Sending…" : "Send Project Brief"} <Send size={14} className="text-[#1ab9a2]" />
        </button>
        <a
          href={whatsappForCurrent()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-[#f7f2ea] px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          <MessageCircle size={16} className="text-emerald-600" /> WhatsApp
        </a>
      </div>
    </form>
  );
}
