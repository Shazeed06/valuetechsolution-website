"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  Send,
  Check,
  AlertCircle,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Copy,
  CheckCircle2,
  ChevronDown,
  Globe,
  Briefcase,
} from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

/* ─────────────────────────────────────────────────────────────────────────────
   3D GLOSSY BUBBLE COMPONENT (Hyper-Realistic Spherical Gradients & Sheen)
───────────────────────────────────────────────────────────────────────────── */
type BubbleColor = "teal" | "pink" | "amber" | "purple" | "cyan";

interface BubbleProps {
  size?: number;
  color?: BubbleColor;
  className?: string;
  floatVariant?: 1 | 2 | 3;
  delay?: string;
}

function GlossyBubble({
  size = 120,
  color = "teal",
  className = "",
  floatVariant = 1,
  delay = "0s",
}: BubbleProps) {
  const gradients: Record<BubbleColor, string> = {
    teal: "radial-gradient(circle at 30% 26%, #79fff3 0%, #3af7d9 22%, #1ab9a2 50%, #0c7263 78%, #03362e 100%)",
    pink: "radial-gradient(circle at 30% 26%, #ffe0f6 0%, #ff9ce1 22%, #fb72cc 50%, #c42691 78%, #520739 100%)",
    amber: "radial-gradient(circle at 30% 26%, #fff7b8 0%, #ffd45e 22%, #fea800 50%, #c27600 78%, #523000 100%)",
    purple: "radial-gradient(circle at 30% 26%, #f8caff 0%, #db7fff 22%, #ba49f5 50%, #7614b0 78%, #360352 100%)",
    cyan: "radial-gradient(circle at 30% 26%, #b5f7ff 0%, #52e5ff 22%, #00b4d8 50%, #0077b6 78%, #021f45 100%)",
  };

  const glowShadows: Record<BubbleColor, string> = {
    teal: "0 22px 50px rgba(26,185,162,0.42), inset 0 8px 16px rgba(255,255,255,0.75), inset 0 -10px 22px rgba(0,0,0,0.35)",
    pink: "0 22px 50px rgba(251,114,204,0.42), inset 0 8px 16px rgba(255,255,255,0.75), inset 0 -10px 22px rgba(0,0,0,0.35)",
    amber: "0 22px 50px rgba(254,168,0,0.42), inset 0 8px 16px rgba(255,255,255,0.75), inset 0 -10px 22px rgba(0,0,0,0.35)",
    purple: "0 22px 50px rgba(186,73,245,0.42), inset 0 8px 16px rgba(255,255,255,0.75), inset 0 -10px 22px rgba(0,0,0,0.35)",
    cyan: "0 22px 50px rgba(0,180,216,0.42), inset 0 8px 16px rgba(255,255,255,0.75), inset 0 -10px 22px rgba(0,0,0,0.35)",
  };

  const animClass =
    floatVariant === 1
      ? "animate-bubble-1"
      : floatVariant === 2
      ? "animate-bubble-2"
      : "animate-bubble-3";

  return (
    <div
      className={`rounded-full relative pointer-events-none select-none z-20 transition-transform duration-500 hover:scale-110 ${animClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: gradients[color],
        boxShadow: glowShadows[color],
        animationDelay: delay,
      }}
      aria-hidden="true"
    >
      {/* Specular high-gloss highlight reflection */}
      <div className="absolute w-[36%] h-[24%] rounded-[50%] bg-gradient-to-b from-white/95 to-white/10 top-[12%] left-[16%] rotate-[-30deg] blur-[0.6px]" />
      {/* Secondary pin-point glint */}
      <div className="absolute w-[10%] h-[10%] rounded-full bg-white/90 top-[28%] left-[32%] blur-[0.4px]" />
      {/* Bottom ambient rim bounce light */}
      <div className="absolute w-[46%] h-[18%] rounded-[50%] bg-white/35 bottom-[9%] right-[14%] blur-[2.5px]" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MINIMAL SERVICES & TIMELINE OPTIONS
───────────────────────────────────────────────────────────────────────────── */
const services = [
  { id: "web-dev", label: "Custom Website", icon: "🌐" },
  { id: "redesign", label: "Next.js Rebuild", icon: "⚡" },
  { id: "ui-ux", label: "UI/UX & Design", icon: "🎨" },
  { id: "seo-speed", label: "SEO & Speed Audit", icon: "📈" },
  { id: "other", label: "Other / Advisory", icon: "💬" },
];

const timelines = [
  { id: "asap", label: "ASAP (2–3 wks)" },
  { id: "standard", label: "Standard (3–5 wks)" },
  { id: "flexible", label: "Planning / Flexible" },
];

export default function ContactPageContent() {
  const [selectedService, setSelectedService] = useState(services[0].label);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[0].label);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function updateField(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(CONTACT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  }

  function getWhatsAppUrl() {
    const lines = [
      `Hi Value Tech Solution,`,
      `I'm ${form.name || "[my name]"}${form.company ? ` from ${form.company}` : ""}.`,
      `Service: ${selectedService}`,
      `Timeline: ${selectedTimeline}`,
      form.message ? `Details: ${form.message}` : "I'd like to discuss a new website sprint.",
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
      service: selectedService,
      budget: selectedTimeline, // passing timeline as scope preference
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

  return (
    <div className="relative bg-[#efebe5] text-[#141414] overflow-hidden min-h-screen">
      
      {/* ── Background Ambient Accents ── */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#1ab9a2]/15 via-[#fb72cc]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[45%] left-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-[#fea800]/12 via-[#ba49f5]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
        {/* Floating 3D Bubbles in Hero */}
        <GlossyBubble
          size={130}
          color="teal"
          floatVariant={1}
          className="hidden md:block absolute top-28 right-[8%] opacity-90"
        />
        <GlossyBubble
          size={85}
          color="pink"
          floatVariant={2}
          delay="1.2s"
          className="hidden md:block absolute top-48 left-[5%] opacity-90"
        />
        <GlossyBubble
          size={55}
          color="amber"
          floatVariant={3}
          delay="2.5s"
          className="hidden lg:block absolute bottom-4 right-[25%] opacity-80"
        />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-[#d8d3ce] px-4 py-1.5 rounded-full shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#141414]">
              Discovery Sprints Open · 24h Response SLA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.04em] text-[#141414] leading-[1.02] max-w-4xl">
            Let’s build something{" "}
            <span className="font-sourceSerif italic font-normal text-[#1ab9a2] underline decoration-[#1ab9a2]/40 decoration-wavy decoration-2 underline-offset-8">
              remarkable.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-[#666460] font-medium leading-relaxed max-w-2xl">
            Direct access to senior engineers and designers. Zero sales reps, zero slide decks.
            Fill the quick brief below or connect with us on WhatsApp for an immediate response.
          </p>

          {/* Quick Metrics & Direct Contacts Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>Chat on WhatsApp</span>
              <span className="text-white/60 font-normal text-xs hidden sm:inline">· ~15m reply</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#fbf9f5] border border-[#d8d3ce] text-[#141414] px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition shadow-sm hover:border-[#1ab9a2]"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} className="text-[#1ab9a2]" />
                  <span className="text-[#1ab9a2]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Mail size={16} className="text-[#1ab9a2]" />
                  <span>{CONTACT.email}</span>
                  <Copy size={13} className="text-[#7d7b77] ml-1" />
                </>
              )}
            </button>

            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce]/80 px-3.5 py-3 rounded-full text-xs font-semibold text-[#666460]">
              <Clock size={14} className="text-[#1ab9a2]" />
              <span>Avg. reply time: &lt; 2 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKSPACE SECTION (GRID: FORM + FOUNDER CHANNELS) ── */}
      <section className="relative pb-24 lg:pb-32 z-10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ── LEFT COLUMN: FOUNDER HUB & PROCESS TRANSPARENCY (5 cols) ── */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              
              {/* Direct Channels Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#e5e0d8] shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1ab9a2]/15 flex items-center justify-center text-[#1ab9a2]">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-[#141414]">
                      Direct Founder Channels
                    </h3>
                    <p className="text-xs text-[#7d7b77]">No intermediaries. Direct review.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* WhatsApp Direct */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-[#f7f2ea] hover:bg-emerald-50/70 border border-[#e5e0d8] hover:border-emerald-300 transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat font-bold text-sm text-[#141414]">
                            WhatsApp Direct
                          </span>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                            Fastest
                          </span>
                        </div>
                        <p className="text-xs text-[#7d7b77] group-hover:text-emerald-800 transition-colors">
                          {CONTACT.phone}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-[#7d7b77] group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Email Direct */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f7f2ea] hover:bg-white border border-[#e5e0d8] transition-all">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#141414] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                        <Mail size={18} className="text-[#1ab9a2]" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-montserrat font-bold text-sm text-[#141414]">
                          Studio Inbox
                        </p>
                        <p className="text-xs text-[#7d7b77] truncate">
                          {CONTACT.email}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-bold text-[#1ab9a2] hover:text-[#0f8b78] px-2.5 py-1.5 rounded-lg bg-white border border-[#d8d3ce] hover:border-[#1ab9a2] transition shrink-0 ml-2"
                    >
                      {copiedEmail ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  {/* Global Coverage & Response */}
                  <div className="p-4 rounded-2xl bg-[#f7f2ea]/70 border border-[#e5e0d8] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#fb72cc]/15 text-[#fb72cc] flex items-center justify-center flex-shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-[#141414]">
                        Global Remote-First Studio
                      </p>
                      <p className="text-xs text-[#7d7b77]">
                        Delhi (IST) · London (GMT) · New York (EST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card (Clear 3-Step Process) */}
              <div className="bg-[#f7f2ea] rounded-3xl p-6 sm:p-7 border border-[#d8d3ce] relative overflow-hidden">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#1ab9a2] mb-3">
                  <Clock size={14} />
                  <span>What happens next</span>
                </div>
                <h4 className="font-montserrat font-black text-xl text-[#141414] tracking-tight mb-5">
                  From brief to sprint kickoff in 48 hours.
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#141414] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-[#141414]">
                        Engineering Review (Within 24h)
                      </p>
                      <p className="text-xs text-[#666460] mt-0.5 leading-relaxed">
                        Our lead architect studies your requirements, site speed, or design brief.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#1ab9a2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-[#141414]">
                        20-Min Architecture Discovery
                      </p>
                      <p className="text-xs text-[#666460] mt-0.5 leading-relaxed">
                        A focused, high-signal call to align on tech stack, user journeys, and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#fb72cc] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-[#141414]">
                        Fixed-Scope Sprint Contract
                      </p>
                      <p className="text-xs text-[#666460] mt-0.5 leading-relaxed">
                        A clear, itemized proposal with guaranteed delivery dates and zero budget creep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Guarantees Bento */}
              <div className="bg-white/90 rounded-3xl p-5 border border-[#e5e0d8] shadow-sm grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-[#f7f2ea]">
                  <ShieldCheck size={20} className="text-[#1ab9a2] mx-auto mb-1" />
                  <p className="font-montserrat font-bold text-xs text-[#141414]">100% Code IP</p>
                  <p className="text-[10px] text-[#7d7b77]">Full GitHub & Figma transfer</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#f7f2ea]">
                  <Zap size={20} className="text-[#fea800] mx-auto mb-1" />
                  <p className="font-montserrat font-bold text-xs text-[#141414]">98+ Performance</p>
                  <p className="text-[10px] text-[#7d7b77]">Guaranteed Core Web Vitals</p>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: MINIMAL & CREATIVE CONTACT FORM (7 cols) ── */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              
              {/* Decorative mini bubble beside the form */}
              <GlossyBubble
                size={70}
                color="cyan"
                floatVariant={2}
                delay="1.8s"
                className="hidden xl:block absolute -top-8 -right-6 z-30"
              />

              <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-9 md:p-10 border border-[#d8d3ce] shadow-xl relative">
                
                {submitted ? (
                  /* ── SUBMISSION SUCCESS STATE ── */
                  <div className="py-12 px-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1ab9a2] text-white flex items-center justify-center mx-auto shadow-lg mb-6">
                      <Check size={32} className="stroke-[3]" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#1ab9a2] bg-[#1ab9a2]/10 px-3.5 py-1 rounded-full">
                      Sprint Request Received
                    </span>
                    <h3 className="font-montserrat font-black text-3xl sm:text-4xl text-[#141414] tracking-tight mt-4">
                      We’re already looking at it.
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#666460] font-medium max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#141414] font-bold">{form.name}</span>! Our lead architect will review your project and reply to <span className="text-[#141414] font-bold">{form.email}</span> within 24 hours.
                    </p>

                    <div className="mt-8 pt-8 border-t border-[#f0ece5] flex flex-col sm:flex-row items-center justify-center gap-3.5">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition shadow-md"
                      >
                        <MessageCircle size={17} /> Fast-track on WhatsApp
                      </a>
                      <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#d8d3ce] text-sm font-bold text-[#141414] hover:bg-[#f7f2ea] transition"
                      >
                        Back to Homepage
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ── MINIMAL CONVERSION FORM ── */
                  <form onSubmit={onSubmit} className="space-y-6">
                    
                    {/* Form Header */}
                    <div className="border-b border-[#f0ece5] pb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1ab9a2]">
                          Quick Project Brief
                        </span>
                        <span className="text-[11px] font-semibold text-[#7d7b77] bg-[#f7f2ea] px-2.5 py-0.5 rounded-full border border-[#e5e0d8]">
                          Takes ~45 seconds
                        </span>
                      </div>
                      <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] tracking-tight mt-1.5">
                        Tell us what you need.
                      </h2>
                    </div>

                    {/* Honeypot Bot Trap */}
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

                    {/* Step 1: Project Type Selection (1-Tap Pills) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2.5">
                        1. What are you looking to build? <span className="text-[#1ab9a2]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {services.map((item) => {
                          const isSelected = selectedService === item.label;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedService(item.label)}
                              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all select-none active:scale-95 ${
                                isSelected
                                  ? "bg-[#141414] text-white shadow-md"
                                  : "bg-[#f7f2ea] text-[#141414] border border-[#d8d3ce] hover:border-[#1ab9a2]"
                              }`}
                            >
                              <span>{item.icon}</span>
                              <span>{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Core Required Inputs (Name & Email) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2.5">
                        2. Your Contact Details <span className="text-[#1ab9a2]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) => updateField("name", e.target.value)}
                            className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3.5 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Work Email (e.g. alex@company.com)"
                            value={form.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3.5 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Project Brief / Message */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                          3. Project Summary <span className="text-[#1ab9a2]">*</span>
                        </label>
                        <span className="text-[11px] text-[#7d7b77]">
                          Min 10 characters
                        </span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us a bit about your goals, target audience, or any reference sites you love..."
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className="w-full rounded-2xl border border-[#d8d3ce] bg-[#f7f2ea] px-4 py-3.5 text-base sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
                      />
                    </div>

                    {/* Step 4: Timeline Preference (1-Tap Pills) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-2.5">
                        4. Preferred Timeline
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timelines.map((t) => {
                          const isSelected = selectedTimeline === t.label;
                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setSelectedTimeline(t.label)}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                                isSelected
                                  ? "bg-[#1ab9a2] text-white shadow-sm"
                                  : "bg-[#f7f2ea] text-[#666460] border border-[#d8d3ce] hover:border-[#1ab9a2]"
                              }`}
                            >
                              {t.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Optional Details Accordion (Clean & Minimal by Default) */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setShowOptionalFields(!showOptionalFields)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666460] hover:text-[#141414] transition-colors py-1"
                      >
                        <span className="text-[#1ab9a2] text-sm font-mono">
                          {showOptionalFields ? "−" : "+"}
                        </span>
                        <span>{showOptionalFields ? "Hide optional details" : "Add company name or current website (optional)"}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${showOptionalFields ? "rotate-180" : ""}`}
                        />
                      </button>

                      {showOptionalFields && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="relative">
                            <Briefcase size={14} className="absolute left-3.5 top-4 text-[#7d7b77]" />
                            <input
                              type="text"
                              placeholder="Company name"
                              value={form.company}
                              onChange={(e) => updateField("company", e.target.value)}
                              className="w-full rounded-xl border border-[#d8d3ce] bg-[#f7f2ea] pl-9 pr-4 py-3 text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none"
                            />
                          </div>
                          <div className="relative">
                            <Globe size={14} className="absolute left-3.5 top-4 text-[#7d7b77]" />
                            <input
                              type="text"
                              placeholder="Current site (e.g. yoursite.com)"
                              value={form.website}
                              onChange={(e) => updateField("website", e.target.value)}
                              className="w-full rounded-xl border border-[#d8d3ce] bg-[#f7f2ea] pl-9 pr-4 py-3 text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-[#1ab9a2] focus:bg-white focus:outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Error Notice */}
                    {error && (
                      <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50/90 p-4 text-xs sm:text-sm text-red-700">
                        <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-600" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* CTA Submit Area */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                      <button
                        type="submit"
                        disabled={pending}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#141414] hover:bg-black text-white px-8 py-4 text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer min-h-[50px]"
                      >
                        {pending ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Sending Brief…</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Brief</span>
                            <Send size={15} className="text-[#1ab9a2]" />
                          </>
                        )}
                      </button>

                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-900 px-6 py-3.5 text-xs sm:text-sm font-bold transition min-h-[50px]"
                      >
                        <MessageCircle size={16} className="text-emerald-600" />
                        <span>Or WhatsApp Directly</span>
                      </a>
                    </div>

                    {/* Privacy & Anti-spam Trust Note */}
                    <div className="flex items-center gap-2 pt-2 text-[11px] text-[#7d7b77]">
                      <ShieldCheck size={14} className="text-[#1ab9a2] shrink-0" />
                      <span>Zero spam guarantee. Your details go directly to our engineering founders.</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
