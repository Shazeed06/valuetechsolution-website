"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  Send,
  Check,
  AlertCircle,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

const serviceOptions = [
  "Custom Web Development (Next.js)",
  "UI/UX Design & Design System",
  "Website Rebuild & Speed Optimization",
  "Technical SEO & Performance Audit",
  "Web Application & SaaS",
  "Other / Advisory",
];

export default function ContactPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function updateField(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function getWhatsAppUrl(extraText?: string) {
    const lines = [
      `Hi Value Tech Solution,`,
      `I'm ${form.name || "[my name]"}${form.company ? ` from ${form.company}` : ""}.`,
      form.service ? `Service: ${form.service}` : "",
      form.message ? `Details: ${form.message}` : extraText || "I'd like to discuss a project.",
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
      name: form.name,
      email: form.email,
      company: form.company ? `${form.company}${form.phone ? ` · Tel: ${form.phone}` : ""}` : (form.phone ? `Tel: ${form.phone}` : undefined),
      website: undefined,
      service: form.service || "General Inquiry",
      budget: "Custom Scope",
      message: form.message,
      hp: String(fd.get("vt_company_url") ?? ""),
      source:
        typeof window !== "undefined"
          ? document.referrer || "direct"
          : "direct",
    };

    startTransition(async () => {
      const res = await sendContact(payload);
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(res.error);
      }
    });
  }

  return (
    <div className="bg-[#141414] text-white min-h-screen selection:bg-[#fea800] selection:text-[#141414]">
      
      {/* ─────────────────────────────────────────────────────────────────────────────
         UPPER SECTION: DARK STUDIO CONTACT FORM & DIRECT INFO CARDS
      ───────────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        
        {/* Floating amber chat badge in top right */}
        <div className="absolute top-28 right-6 sm:top-36 sm:right-12 z-20">
          <a
            href={whatsappLink("Hi Value Tech Solution, let's talk!")}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#202020] hover:bg-[#282828] border border-white/10 flex items-center justify-center text-[#fea800] hover:scale-105 transition-all shadow-lg group"
            aria-label="Chat with us"
          >
            <MessageSquare size={20} className="group-hover:rotate-6 transition-transform" />
          </a>
        </div>

        <div className="max-w-[1136px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Centered Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.04em] uppercase text-white leading-none">
              TALK TO VALUE TECH
            </h1>

            {/* Signature Teal Wavy Doodle (Matches GUD Agency Squiggle) */}
            <div className="flex justify-center my-3 sm:my-4">
              <svg
                className="w-40 sm:w-56 h-7 text-[#1ab9a2]"
                viewBox="0 0 200 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14C18 6 30 20 44 12C58 4 70 18 84 10C98 2 110 16 124 8C138 0 150 14 164 6C176 -1 188 12 196 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium leading-relaxed">
              Don&apos;t just fill out a form —{" "}
              <span className="font-annie text-xl sm:text-2xl text-[#1ab9a2] italic font-normal">
                start something great.
              </span>{" "}
              Let&apos;s talk.
            </p>
          </div>

          {/* 2-Column Grid: Form (Left) & Info Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ── LEFT COLUMN: FORM ── */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-3xl border border-[#1ab9a2]/40 bg-[#1a1a1a] p-8 sm:p-12 text-center text-white shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#1ab9a2] text-white flex items-center justify-center mx-auto shadow-lg mb-6">
                    <Check size={32} className="stroke-[3]" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#1ab9a2] bg-[#1ab9a2]/15 px-4 py-1.5 rounded-full">
                    Message Dispatched
                  </span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight mt-4">
                    We&apos;re on it.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{form.name}</span>! Our founding team will review your project and reply to <span className="text-[#1ab9a2] font-semibold">{form.email}</span> within 24 hours.
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition shadow-md"
                    >
                      <MessageCircle size={17} /> Fast-track on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  
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

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Cooper"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Service Interested In (Dropdown) */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        value={form.service}
                        onChange={(e) => updateField("service", e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#1a1a1a] text-white/50">
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1a1a1a] text-white py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-[#1a1a1a] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-[#fb72cc] focus:bg-[#202020] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <div className="flex items-start gap-2.5 rounded-2xl border border-red-500/40 bg-red-950/40 p-4 text-xs sm:text-sm text-red-200">
                      <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button (Berry / Mauve Accent Matching Screenshot) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={pending}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#94427c] hover:bg-[#a64a8b] text-white px-8 py-3.5 text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-pink-900/20 active:scale-95 disabled:opacity-60 cursor-pointer"
                    >
                      {pending ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* ── RIGHT COLUMN: 3 INFO CARDS ── */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              
              {/* Card 1: Email Us */}
              <div className="relative rounded-3xl bg-[#1a1a1a] p-6 sm:p-7 border border-white/10 hover:border-[#1ab9a2]/40 transition-all overflow-hidden group">
                {/* Left Teal Accent Line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#1ab9a2]" />
                <div className="pl-3">
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#1ab9a2] mb-1">
                    Email Us
                  </h3>
                  <p className="text-xs text-white/60 mb-2">
                    For general inquiries:
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-montserrat font-bold text-sm sm:text-base text-white hover:text-[#1ab9a2] transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Card 2: Call Us */}
              <div className="relative rounded-3xl bg-[#1a1a1a] p-6 sm:p-7 border border-white/10 hover:border-[#1ab9a2]/40 transition-all overflow-hidden group">
                {/* Left Teal Accent Line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#1ab9a2]" />
                <div className="pl-3">
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#1ab9a2] mb-1">
                    Call Us
                  </h3>
                  <p className="text-xs text-white/60 mb-2">
                    Ready to talk? Give us a call:
                  </p>
                  <a
                    href={`tel:${CONTACT.whatsappE164}`}
                    className="font-montserrat font-bold text-sm sm:text-base text-white hover:text-[#1ab9a2] transition-colors block mb-1"
                  >
                    {CONTACT.phone}
                  </a>
                  <p className="text-xs text-white/50">
                    Monday - Friday, 9am - 6pm IST / GMT
                  </p>
                </div>
              </div>

              {/* Card 3: Follow Us */}
              <div className="relative rounded-3xl bg-[#1a1a1a] p-6 sm:p-7 border border-white/10 hover:border-[#1ab9a2]/40 transition-all overflow-hidden group">
                {/* Left Teal Accent Line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#1ab9a2]" />
                <div className="pl-3">
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#1ab9a2] mb-1">
                    Follow Us
                  </h3>
                  <p className="text-xs text-white/60 mb-4">
                    Stay connected on social media:
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#1ab9a2] flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#1ab9a2] flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#1ab9a2] flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <MessageCircle size={18} />
                    </a>
                    <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#1ab9a2] flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={CONTACT.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter / X"
                      className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#2e2e2e] text-[#1ab9a2] flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────────
         THE BIG YELLOW / AMBER ARCH CTA SECTION (EXACT GUD AGENCY REPLICA)
      ───────────────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#fea800] text-[#141414] rounded-t-[70px] sm:rounded-t-[110px] md:rounded-t-[150px] lg:rounded-t-[180px] pt-20 pb-24 sm:pt-28 sm:pb-32 px-5 sm:px-8 overflow-hidden z-20">
        
        <div className="max-w-[1136px] mx-auto text-center relative">
          
          {/* Main Massive Stacked Headline */}
          <div className="relative inline-block mx-auto">
            
            {/* Left Hand-Drawn Annotation: "value mojo ⚡" + Curvy Arrow */}
            <div className="hidden sm:block absolute -left-28 md:-left-36 top-10 md:top-14 select-none pointer-events-none">
              <span className="font-annie text-2xl md:text-3xl text-[#141414] font-normal block -rotate-12">
                value mojo.
              </span>
              <svg
                className="w-14 h-14 md:w-16 md:h-16 text-[#141414] ml-6 -mt-1"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M10 8C20 18 32 30 44 34M44 34L35 34M44 34L40 25"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Hand-Drawn Annotation: "Feelin' good" + Curvy Arrow */}
            <div className="hidden sm:block absolute -right-28 md:-right-36 bottom-6 md:bottom-10 select-none pointer-events-none">
              <svg
                className="w-14 h-14 md:w-16 md:h-16 text-[#141414] mb-1 -ml-4"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M44 10C34 20 22 32 10 36M10 36L19 36M10 36L14 27"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-annie text-2xl md:text-3xl text-[#141414] font-normal block rotate-6">
                Feelin&apos; good
              </span>
            </div>

            {/* NEED / SOMETHING / QUICK? */}
            <h2 className="font-montserrat font-black text-6xl sm:text-7xl md:text-8xl lg:text-[106px] tracking-[-0.04em] leading-[0.92] uppercase text-[#141414]">
              NEED
              <br />
              SOMETHING
              <br />
              QUICK?
            </h2>
          </div>

          {/* Subtitle */}
          <p className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg text-[#141414]/90 font-medium max-w-xl mx-auto">
            For faster responses, reach out through these channels:
          </p>

          {/* Two Outline Pill Buttons Matching Screenshot */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            
            {/* Button 1: WhatsApp */}
            <a
              href={whatsappLink("Hi Value Tech Solution, I need something quick!")}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#141414] bg-transparent hover:bg-[#141414] hover:text-white px-9 py-4 text-sm sm:text-base font-bold text-[#141414] transition-all duration-200 active:scale-95 shadow-sm"
            >
              <MessageCircle size={19} className="shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Button 2: Schedule Call */}
            <a
              href={`mailto:${CONTACT.email}?subject=Schedule%20a%20Discovery%20Call`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#141414] bg-transparent hover:bg-[#141414] hover:text-white px-9 py-4 text-sm sm:text-base font-bold text-[#141414] transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Calendar size={19} className="shrink-0" />
              <span>Schedule Call</span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
