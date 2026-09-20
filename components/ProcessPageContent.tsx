"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  FileCheck,
  Layers,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
  Terminal,
  GitBranch,
  Cpu,
  Activity,
  Award,
  Check,
  Lock,
  ExternalLink,
  ChevronDown,
  Layers3,
  Server,
  Globe,
  Database,
  ArrowRight,
  Sliders,
  Eye,
  MousePointer2,
} from "lucide-react";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

/* ─────────────────────────────────────────────────────────────────────────────
   PROFESSIONAL FROSTED GLASS BUBBLE (Luxury Translucent Refraction & Iridescence)
───────────────────────────────────────────────────────────────────────────── */
type BubbleTint = "teal" | "pink" | "amber" | "purple" | "cyan";

interface GlassBubbleProps {
  size?: number;
  tint?: BubbleTint;
  className?: string;
  floatVariant?: 1 | 2 | 3;
  delay?: string;
}

function ProfessionalGlassBubble({
  size = 120,
  tint = "teal",
  className = "",
  floatVariant = 1,
  delay = "0s",
}: GlassBubbleProps) {
  // Translucent, frosted luxury glass gradients with subtle color refraction
  const glassGradients: Record<BubbleTint, string> = {
    teal: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(121,255,243,0.22) 42%, rgba(26,185,162,0.18) 70%, rgba(12,114,99,0.32) 100%)",
    pink: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(255,180,232,0.22) 42%, rgba(251,114,204,0.18) 70%, rgba(196,38,145,0.32) 100%)",
    amber: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(255,232,153,0.22) 42%, rgba(254,168,0,0.18) 70%, rgba(194,118,0,0.32) 100%)",
    purple: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(248,202,255,0.22) 42%, rgba(186,73,245,0.18) 70%, rgba(118,20,176,0.32) 100%)",
    cyan: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(181,247,255,0.22) 42%, rgba(0,180,216,0.18) 70%, rgba(0,119,182,0.32) 100%)",
  };

  const glassShadows: Record<BubbleTint, string> = {
    teal: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(12,114,99,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(26,185,162,0.22)",
    pink: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(196,38,145,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(251,114,204,0.22)",
    amber: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(194,118,0,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(254,168,0,0.22)",
    purple: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(118,20,176,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(186,73,245,0.22)",
    cyan: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(0,119,182,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(0,180,216,0.22)",
  };

  const animClass =
    floatVariant === 1
      ? "animate-bubble-1"
      : floatVariant === 2
      ? "animate-bubble-2"
      : "animate-bubble-3";

  return (
    <div
      className={`rounded-full relative pointer-events-none select-none backdrop-blur-[6px] border border-white/60 transition-transform duration-700 hover:scale-105 ${animClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: glassGradients[tint],
        boxShadow: glassShadows[tint],
        animationDelay: delay,
      }}
      aria-hidden="true"
    >
      {/* Specular high-gloss light crescent */}
      <div className="absolute w-[36%] h-[22%] rounded-[50%] bg-gradient-to-b from-white/95 via-white/50 to-transparent top-[10%] left-[16%] rotate-[-32deg] blur-[0.4px]" />
      {/* Secondary micro light glint */}
      <div className="absolute w-[8%] h-[8%] rounded-full bg-white/95 top-[25%] left-[30%] blur-[0.2px]" />
      {/* Bottom subtle ambient rim bounce light */}
      <div className="absolute w-[44%] h-[16%] rounded-[50%] bg-white/40 bottom-[10%] right-[14%] blur-[2px]" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   5 PRODUCTION-GRADE ENGINEERING SPRINTS
───────────────────────────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    phase: "Phase 1",
    tag: "Days 1–3",
    color: "#1ab9a2",
    icon: Compass,
    title: "Technical Discovery & Scope Lockdown",
    subtitle: "Architecture blueprint, edge sitemap & written SLA.",
    assurance: "Contractual Written Scope Guarantee · Zero Scope Creep",
    desc: "We begin with a focused 45-minute technical discovery session with our Lead Architect. We map out information architecture, database schema, user conversion funnels, and component hierarchy. You receive a complete technical specification and a fixed-timeline contract with guaranteed delivery milestones before a single line of code is written.",
    deliverables: [
      "Technical architecture specification & tech stack roadmap",
      "Full edge sitemap & interactive conversion journey mapping",
      "Fixed-price sprint scope document with milestone SLA",
      "Private GitHub repository initialized with CI/CD rules",
    ],
    highlightMetric: {
      label: "Scope Clarity",
      val: "100%",
      badge: "Zero Budget Creep",
    },
  },
  {
    num: "02",
    phase: "Phase 2",
    tag: "Week 1–2",
    color: "#fb72cc",
    icon: Palette,
    title: "Bespoke Figma System & Prototype",
    subtitle: "Zero generic templates. 100% custom brand design tokens.",
    assurance: "100% Bespoke Craft · Interactive Figma Prototyping",
    desc: "We never touch off-the-shelf WordPress or Webflow themes. Our product designers craft a bespoke design system in Figma with responsive typography scales, dark/light contrast rules, and interactive micro-interactions. You test a clickable prototype on both mobile and desktop screens before engineering commences.",
    deliverables: [
      "Clickable desktop & mobile interactive Figma prototypes",
      "Custom design token library (colors, typography, grid tokens)",
      "High-converting visual hierarchy & bespoke vector graphics",
      "Collaborative feedback rounds with same-day Figma updates",
    ],
    highlightMetric: {
      label: "Custom Assets",
      val: "100%",
      badge: "No Templates",
    },
  },
  {
    num: "03",
    phase: "Phase 3",
    tag: "Week 2–3",
    color: "#fea800",
    icon: Code2,
    title: "Pure Next.js 16 & Motion Engineering",
    subtitle: "Strict TypeScript, server components & edge rendering.",
    assurance: "Senior Engineers Only (6+ Yrs) · Zero Subcontractors",
    desc: "Our senior software engineers bring the approved Figma system to life using Next.js 16 (App Router), React 19, strict TypeScript, and Tailwind CSS. We code with modular component architecture, server-side dynamic streaming, and fluid 60fps micro-animations. We push daily preview deployments to private Vercel edge staging for real-time review.",
    deliverables: [
      "Clean Next.js 16 App Router & React 19 server components",
      "100% strictly typed TypeScript codebase with zero runtime errors",
      "GSAP and hardware-accelerated CSS micro-animations",
      "Live Vercel edge staging environments with password protection",
    ],
    highlightMetric: {
      label: "TypeScript Strictness",
      val: "100%",
      badge: "0 Lint Errors",
    },
  },
  {
    num: "04",
    phase: "Phase 4",
    tag: "Week 3–4",
    color: "#1ab9a2",
    icon: Zap,
    title: "98+ Lighthouse Audit & Technical SEO Rig",
    subtitle: "Sub-second load times, schema injection & search authority.",
    assurance: "Contractual 98+ Lighthouse Performance Guarantee",
    desc: "Before any site goes live, it must pass our uncompromising 50-point engineering QA checklist. We optimize Core Web Vitals (LCP < 0.8s, CLS = 0.000, INP < 25ms), inject comprehensive JSON-LD structured schemas for Google and AI search engines (Perplexity, ChatGPT), and conduct responsive browser audits across 15+ real physical devices.",
    deliverables: [
      "98+ Google Lighthouse performance score guaranteed in writing",
      "Structured JSON-LD schema markup (Org, Service, FAQ, Breadcrumb)",
      "Robots.txt, dynamic XML sitemaps & /llms.txt AI crawler indexing",
      "Cross-device & cross-browser QA on iOS, Android, macOS & Windows",
    ],
    highlightMetric: {
      label: "Google Lighthouse",
      val: "98+",
      badge: "Contractual Guarantee",
    },
  },
  {
    num: "05",
    phase: "Phase 5",
    tag: "Days 24–28",
    color: "#ba49f5",
    icon: Rocket,
    title: "Edge Deployment & Full Repository Handover",
    subtitle: "DNS propagation, cloud CDN & 30-day Hypercare warranty.",
    assurance: "100% Code IP Sovereignty + 30-Day Bug-Free Warranty",
    desc: "We configure custom domain DNS, setup Cloudflare/Vercel global edge routing, enable automated SSL certificates, and execute zero-downtime go-live. You receive 100% sovereign ownership of the private GitHub repository, environment configurations, and an in-depth video walkthrough, backed by our 30-day post-launch warranty with priority support.",
    deliverables: [
      "Zero-downtime global edge deployment & SSL configuration",
      "Full GitHub organization ownership transfer with clean Git history",
      "Loom video walkthrough & CMS administration documentation",
      "30-day post-launch warranty with same-day senior engineer resolution",
    ],
    highlightMetric: {
      label: "Code Sovereignty",
      val: "100%",
      badge: "Full IP Ownership",
    },
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   BENTO DELIVERABLES (Sovereignty & Standards)
───────────────────────────────────────────────────────────────────────────── */
const bentoDeliverables = [
  {
    icon: Code2,
    color: "#1ab9a2",
    tag: "Ownership",
    title: "100% Source Code Transfer",
    desc: "No platform lock-ins. You receive total ownership of the clean, documented GitHub repository directly transferred to your organization.",
  },
  {
    icon: Palette,
    color: "#fb72cc",
    tag: "Assets",
    title: "Production Master Figma Files",
    desc: "Every design token, component variant, responsive artboard, and vector asset is yours to keep, expand, and scale with your internal team.",
  },
  {
    icon: ShieldCheck,
    color: "#fea800",
    tag: "Warranty",
    title: "30-Day Hypercare Guarantee",
    desc: "We stand behind our code. Any bugs, edge cases, or performance anomalies are investigated and resolved free of charge for 30 days post-launch.",
  },
  {
    icon: Clock,
    color: "#ba49f5",
    tag: "Reliability",
    title: "Strict Launch Date SLA",
    desc: "We agree on a strict launch date in the kickoff statement of work. If we miss our agreed deadline, you receive a direct financial rebate.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FREQUENTLY ASKED QUESTIONS
───────────────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How long does a typical sprint take from start to finish?",
    a: "Standard bespoke studio websites take between 2 to 4 weeks. High-complexity platforms or applications take 4 to 6 weeks. Every milestone date is contractually locked in our statement of work before kickoff.",
  },
  {
    q: "What do you need from us before the sprint starts?",
    a: "We only require your branding guidelines (if any), your product/service copy, and a 45-minute discovery interview. If you don't have copy, our editorial team handles copywriting as part of the sprint.",
  },
  {
    q: "Do we get full access to the source code and Figma files?",
    a: "Yes, 100%. We transfer full admin rights of the private GitHub repository and editable Figma production files directly to your team upon launch. You retain total intellectual property sovereignty.",
  },
  {
    q: "How do you guarantee a 98+ Google Lighthouse score?",
    a: "We engineer directly in Next.js 16 App Router using React 19 Server Components, zero third-party bloated libraries, next/image compression, critical CSS extraction, and global Edge CDN caching.",
  },
  {
    q: "What happens after launch? Are we left on our own?",
    a: "Every project comes standard with 30 days of comprehensive Hypercare warranty. Our senior architects monitor production telemetry, error logs, and user flows to resolve any issues immediately at zero extra cost.",
  },
];

const marqueeItems = [
  "NEXT.JS 16 APP ROUTER",
  "REACT 19 SERVER COMPONENTS",
  "98+ GOOGLE LIGHTHOUSE",
  "CORE WEB VITALS OPTIMIZED",
  "TAILWIND CSS & GSAP MOTION",
  "100% REPO SOVEREIGNTY",
  "ZERO SCOPE CREEP SLA",
  "30-DAY HYPERCARE WARRANTY",
];

export default function ProcessPageContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative bg-[#efebe5] text-[#141414] overflow-hidden selection:bg-[#1ab9a2] selection:text-white min-h-screen">
      
      {/* ── AMBIENT RADIAL LIGHTING (Soft Warm Accents) ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1ab9a2]/15 via-[#fb72cc]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[-200px] w-[650px] h-[650px] bg-gradient-to-tr from-[#fea800]/12 via-[#ba49f5]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: High Energy, Refined Glass Bubbles
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28">
        
        {/* Refined Frosted Glass Bubbles in Open Negative Space */}
        <ProfessionalGlassBubble
          size={140}
          tint="teal"
          floatVariant={1}
          className="hidden lg:block absolute top-24 right-[10%] opacity-90"
        />
        <ProfessionalGlassBubble
          size={95}
          tint="pink"
          floatVariant={2}
          delay="1.2s"
          className="hidden md:block absolute top-44 left-[6%] opacity-90"
        />
        <ProfessionalGlassBubble
          size={65}
          tint="amber"
          floatVariant={3}
          delay="2.4s"
          className="hidden lg:block absolute bottom-8 right-[24%] opacity-85"
        />

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Eyebrow badge with live pulse */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-[#d8d3ce] px-4 py-1.5 rounded-full shadow-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#141414]">
              Web Engineering Sprints · 2 to 4 Weeks Delivery SLA
            </span>
          </div>

          {/* Huge Montserrat Black Display Headline */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.04em] text-[#141414] leading-[0.98] max-w-5xl">
            How We Build{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              High-Performance
            </span>{" "}
            Websites That Convert.
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#666460] font-medium leading-relaxed max-w-3xl">
            A production-grade, 5-phase engineering protocol engineered for fast-moving startups and scale-ups.
            Zero fluff, zero template shortcuts, and contractual guarantees on performance.
          </p>

          {/* Quick Metrics & CTA Strip */}
          <div className="mt-10 flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book a 15-Min Discovery Call</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>

            <a
              href="#process-breakdown"
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-[#d8d3ce] text-[#141414] px-6 py-4 rounded-full text-sm sm:text-base font-bold transition-all shadow-xs hover:border-primary"
            >
              <span>Explore The 5 Steps</span>
              <span className="text-xs text-[#7d7b77]">↓</span>
            </a>

            <div className="flex items-center gap-6 ml-auto pl-2 py-2 border-l border-[#d8d3ce] hidden xl:flex">
              <div>
                <p className="font-montserrat font-black text-xl text-[#141414]">98+</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">Avg. Lighthouse</p>
              </div>
              <div>
                <p className="font-montserrat font-black text-xl text-[#141414]">2–4 Wks</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">Delivery SLA</p>
              </div>
              <div>
                <p className="font-montserrat font-black text-xl text-[#141414]">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#7d7b77]">IP Sovereignty</p>
              </div>
            </div>
          </div>

          {/* ── INTERACTIVE SPRINT LIFECYCLE CONSOLE ── */}
          <div className="mt-16 bg-[#141414] rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-1">
                  <Terminal size={14} />
                  <span>Sprint Lifecycle Console</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white">
                  Interactive Phase Breakdown
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Next Available Sprint Kickoff: Monday</span>
              </div>
            </div>

            {/* Interactive Timeline Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
              {steps.map((s, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl text-left transition-all relative select-none cursor-pointer ${
                      isActive
                        ? "bg-white/15 border-2 border-primary shadow-lg"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="font-montserrat font-black text-sm px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: `${s.color}25`,
                          color: s.color,
                        }}
                      >
                        {s.num}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">{s.tag}</span>
                    </div>
                    <p className="font-montserrat font-bold text-xs sm:text-sm text-white line-clamp-1">
                      {s.phase}
                    </p>
                    <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                      {s.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Showcase Panel */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider mb-3 bg-white/10 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: steps[activeTab].color }} />
                  {steps[activeTab].assurance}
                </div>
                <h4 className="font-montserrat font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
                  {steps[activeTab].title}
                </h4>
                <p className="text-primary font-bold text-sm mb-4">
                  {steps[activeTab].subtitle}
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  {steps[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeTab].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-72 bg-white/10 rounded-2xl p-6 border border-white/10 text-center flex flex-col justify-center items-center shrink-0">
                <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">
                  {steps[activeTab].highlightMetric.label}
                </p>
                <p className="font-montserrat font-black text-5xl sm:text-6xl text-white my-2">
                  {steps[activeTab].highlightMetric.val}
                </p>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                  {steps[activeTab].highlightMetric.badge}
                </span>
                <p className="text-[11px] text-white/60 mt-4 leading-normal">
                  Turnaround: <span className="text-white font-bold">{steps[activeTab].tag}</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. KINETIC MARQUEE STRIP: High Contrast Dark Ribbon
      ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#141414] py-5 border-y border-white/10 overflow-hidden text-white font-montserrat">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-8 items-center animate-marquee shrink-0">
            {marqueeItems.concat(marqueeItems).map((text, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90 flex items-center gap-6"
              >
                <span>{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
          <div className="flex gap-8 items-center animate-marquee shrink-0" aria-hidden="true">
            {marqueeItems.concat(marqueeItems).map((text, i) => (
              <span
                key={`dup-${i}`}
                className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90 flex items-center gap-6"
              >
                <span>{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE 5-STEP TIMELINE: High-Fidelity Custom Visuals
      ─────────────────────────────────────────────────────────────── */}
      <section id="process-breakdown" className="py-24 lg:py-32 max-w-[1262px] mx-auto px-5 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
              The Engineering Blueprint
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-[#141414] tracking-tight leading-[1.06]">
            Every step engineered for{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              speed, quality & zero risk.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed">
            We don&apos;t do vague agile hand-waving. Each phase has a strict technical definition of done, contractual quality gates, and verified deliverables.
          </p>
        </div>

        {/* Vertical Step Cards */}
        <div className="space-y-16 relative">

          {/* ── STEP 01: ARCHITECTURE BLUEPRINT & TOPOLOGY SPEC ── */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 border-l-[8px] border-l-[#1ab9a2] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#1ab9a2]/15 text-[#1ab9a2] flex items-center justify-center font-montserrat font-black text-xl shadow-xs">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1ab9a2]/15 text-[#1ab9a2]">
                      Days 1–3 · Phase 1
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Zero Scope Creep SLA
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight mb-2">
                    Technical Discovery & Scope Lockdown
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Architecture blueprint, conversion funnels & written SLA.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    We begin with an in-depth 45-minute technical discovery session with our Lead Architect. We map out information architecture, database schemas, user conversion funnels, and component hierarchy. You receive a complete technical specification and a fixed-timeline contract before a single line of code is written.
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[0].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Visual Showcase: Production Architecture Blueprint & Flow */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-7 text-white border border-white/10 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1ab9a2] animate-pulse" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/90">
                      blueprint · edge-routing-topology.spec
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                    Scope Signed ✓
                  </span>
                </div>

                {/* Visual Architecture Flow Diagram */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Step A: Global Edge & CDN */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1ab9a2]/20 flex items-center justify-center text-[#1ab9a2]">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs sm:text-sm">Global Anycast Edge CDN</p>
                        <p className="text-white/50 text-[11px]">Vercel Edge Network · &lt; 15ms Worldwide</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-bold">8ms Latency</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1 text-white/30">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  {/* Step B: Next.js 16 App Router Core */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#fb72cc]/20 flex items-center justify-center text-[#fb72cc]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs sm:text-sm">Next.js 16 App Router Core</p>
                        <p className="text-white/50 text-[11px]">React 19 Server Components · Dynamic Streaming</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-bold">RSC Stream</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1 text-white/30">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  {/* Step C: Database & CMS with ISR Cache */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#fea800]/20 flex items-center justify-center text-[#fea800]">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs sm:text-sm">Headless Data &amp; Caching</p>
                        <p className="text-white/50 text-[11px]">ISR Tagged Revalidation · 100% Type-Safe</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-bold">Instant Cache</span>
                  </div>
                </div>

                {/* Bottom Assurance Card */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1ab9a2]" />
                    <span>Fixed Scope Contract: 21 Days</span>
                  </div>
                  <span className="text-[#1ab9a2] font-bold">Zero Scope Creep SLA</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 02: FIGMA DESIGN SYSTEM & PROTOTYPE CANVAS ── */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 border-l-[8px] border-l-[#fb72cc] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#fb72cc]/15 text-[#fb72cc] flex items-center justify-center font-montserrat font-black text-xl shadow-xs">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#fb72cc]/15 text-[#fb72cc]">
                      Week 1–2 · Phase 2
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                      Bespoke Craft Only
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight mb-2">
                    Bespoke Figma System &amp; Prototype
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Zero generic templates. 100% custom brand design tokens.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    We don&apos;t touch off-the-shelf WordPress or Webflow templates. Our designers craft high-fidelity Figma prototypes with responsive typography, dark/light contrast scales, and micro-interactions. You get an interactive prototype to test on mobile and desktop before any code is written.
                  </p>
                </div>

                <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[1].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Visual Showcase: Authentic Figma Design System Workspace */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#ece9e1] shadow-xl bg-[#1e1e1e] text-white">
                {/* Figma Window Chrome */}
                <div className="bg-[#2c2c2c] px-4 py-3 flex items-center justify-between border-b border-white/10 text-xs font-sans">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="font-bold text-white/90 text-xs ml-2">
                      ❖ Design-System / v2.4 (Master Tokens)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#fb72cc] text-white text-[10px] font-bold flex items-center justify-center">
                      AD
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#1ab9a2] text-white text-[10px] font-bold flex items-center justify-center">
                      CL
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                      Live Collab
                    </span>
                  </div>
                </div>

                {/* Figma Canvas Area */}
                <div className="p-4 sm:p-6 bg-[#181818] relative">
                  
                  {/* Figma Selection & Inspection Mockup */}
                  <div className="rounded-xl bg-[#222222] border border-[#0d99ff] p-4 relative shadow-2xl">
                    {/* Measurement chip */}
                    <div className="absolute -top-3 left-4 bg-[#0d99ff] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      Frame: Desktop (1280px × 800px)
                    </div>

                    {/* Simulated High-End Website Preview Inside Figma */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1ab9a2]" />
                          <span className="font-montserrat font-bold text-xs text-white">Value Tech Studio</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-white/60">
                          <span>Services</span>
                          <span>Work</span>
                          <span className="bg-[#1ab9a2] text-white px-2 py-0.5 rounded-full font-bold">Start Project</span>
                        </div>
                      </div>

                      {/* Display headline inside prototype */}
                      <div className="py-2">
                        <div className="text-[9px] uppercase tracking-widest text-[#1ab9a2] font-bold">HIGH PERFORMANCE WEB</div>
                        <div className="text-base sm:text-lg font-montserrat font-black text-white leading-tight">
                          Websites Engineered for Massive Conversions.
                        </div>
                      </div>

                      {/* Mockup Buttons */}
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#1ab9a2] text-white text-[10px] font-bold">
                          Interactive CTA
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-medium border border-white/20">
                          View Work →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Design Tokens Palette Bar */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#222222] border border-white/10 font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-white/50 text-[10px]">TOKENS:</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1ab9a2] shadow-xs" title="#1ab9a2" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#fb72cc] shadow-xs" title="#fb72cc" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#fea800] shadow-xs" title="#fea800" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#141414] border border-white/30" title="#141414" />
                    </div>
                    <span className="text-[#fb72cc] font-bold text-[10px]">
                      100% Bespoke Tokens · Zero Templates
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 03: SENIOR ENGINEER IDE & NEXT.JS 16 CODE RIG ── */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 border-l-[8px] border-l-[#fea800] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#fea800]/15 text-[#fea800] flex items-center justify-center font-montserrat font-black text-xl shadow-xs">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#fea800]/15 text-[#fea800]">
                      Week 2–3 · Phase 3
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      Senior Engineers Only
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight mb-2">
                    Pure Next.js 16 &amp; Motion Engineering
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Strict TypeScript, server components &amp; edge rendering.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    Our senior software engineers bring the approved Figma system to life using Next.js 16 (App Router), React 19, strict TypeScript, and Tailwind CSS. We code with modular component architecture, server-side dynamic streaming, and fluid 60fps micro-animations. We push daily preview deployments to private Vercel edge staging for real-time review.
                  </p>
                </div>

                <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[2].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Visual Showcase: Authentic VS Code / Turbopack Senior IDE */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#ece9e1] shadow-xl bg-[#141414] text-white">
                {/* IDE Tab Bar */}
                <div className="bg-[#1e1e1e] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 bg-[#2d2d2d] px-3 py-1 rounded-t text-white text-xs font-bold border-t-2 border-[#fea800]">
                      page.tsx (Next.js 16)
                    </span>
                    <span className="text-white/40 text-xs hidden sm:inline">layout.tsx</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded">
                    git: main (synced)
                  </span>
                </div>

                {/* Code Syntax Highlighting */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed bg-[#141414] text-white/90 overflow-x-auto">
                  <p className="text-white/40">// Senior Engineer Authored · Zero Junior Outsourcing</p>
                  <p>
                    <span className="text-[#fb72cc]">import</span> &#123; Suspense &#125;{" "}
                    <span className="text-[#fb72cc]">from</span>{" "}
                    <span className="text-[#1ab9a2]">&quot;react&quot;</span>;
                  </p>
                  <p>
                    <span className="text-[#fb72cc]">import</span> &#123; EdgeStreamingCore &#125;{" "}
                    <span className="text-[#fb72cc]">from</span>{" "}
                    <span className="text-[#1ab9a2]">&quot;@/lib/edge-runtime&quot;</span>;
                  </p>
                  <br />
                  <p>
                    <span className="text-[#fea800]">export default async function</span>{" "}
                    <span className="text-[#79fff3]">FlagshipSprint</span>():{" "}
                    <span className="text-emerald-400">Promise&lt;JSX.Element&gt;</span> &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-[#fb72cc]">const</span> data ={" "}
                    <span className="text-[#fb72cc]">await</span> getEdgeData(&#123; cache:{" "}
                    <span className="text-[#1ab9a2]">&quot;force-cache&quot;</span> &#125;);
                  </p>
                  <p className="pl-4">
                    <span className="text-[#fb72cc]">return</span> (
                  </p>
                  <p className="pl-8 text-white/80">
                    &lt;<span className="text-[#fb72cc]">Suspense</span> fallback=&#123;&lt;
                    <span className="text-[#fea800]">FastSkeleton</span> /&gt;&#125;&gt;
                  </p>
                  <p className="pl-12 text-[#1ab9a2]">
                    &lt;<span className="text-[#79fff3]">HighPerformanceHero</span> metrics=&#123;data&#125; /&gt;
                  </p>
                  <p className="pl-8 text-white/80">
                    &lt;/<span className="text-[#fb72cc]">Suspense</span>&gt;
                  </p>
                  <p className="pl-4">);</p>
                  <p>&#125;</p>
                </div>

                {/* Docked Turbopack Terminal Output */}
                <div className="bg-[#0c0c0c] p-3.5 border-t border-white/10 font-mono text-[11px] text-white/90">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-emerald-400 font-bold">▲ Next.js 16.2.6 (Turbopack)</span>
                    <span className="text-white/50 text-[10px]">Compiled in 184ms</span>
                  </div>
                  <div className="text-white/70 text-[10px] flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>0 TypeScript errors · 100% strict type coverage</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 04: GOOGLE LIGHTHOUSE 99 SCORE RIG ── */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 border-l-[8px] border-l-[#1ab9a2] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#1ab9a2]/15 text-[#1ab9a2] flex items-center justify-center font-montserrat font-black text-xl shadow-xs">
                      04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1ab9a2]/15 text-[#1ab9a2]">
                      Week 3–4 · Phase 4
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Contractual 98+ Guarantee
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight mb-2">
                    98+ Lighthouse Audit &amp; Technical SEO Rig
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Sub-second load times, schema injection &amp; search authority.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    Before any site goes live, it must pass our uncompromising 50-point engineering QA checklist. We optimize Core Web Vitals (LCP &lt; 0.8s, CLS = 0.000, INP &lt; 25ms), inject comprehensive JSON-LD structured schemas for Google and AI search engines (Perplexity, ChatGPT), and conduct responsive browser audits across 15+ real physical devices.
                  </p>
                </div>

                <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[3].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Visual Showcase: Google Lighthouse 99 Telemetry Dashboard */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/90">
                      Google PageSpeed Insights Telemetry
                    </span>
                  </div>
                  <span className="font-mono text-[11px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                    Passed Core Web Vitals
                  </span>
                </div>

                {/* 4 Glowing Circular Dials */}
                <div className="grid grid-cols-4 gap-3 text-center mb-6">
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-emerald-400 flex items-center justify-center font-montserrat font-black text-lg sm:text-2xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      99
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs font-bold mt-2 text-white/80">Performance</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-emerald-400 flex items-center justify-center font-montserrat font-black text-lg sm:text-2xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      100
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs font-bold mt-2 text-white/80">Accessibility</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-emerald-400 flex items-center justify-center font-montserrat font-black text-lg sm:text-2xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      100
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs font-bold mt-2 text-white/80">Best Practices</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-emerald-400 flex items-center justify-center font-montserrat font-black text-lg sm:text-2xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      100
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs font-bold mt-2 text-white/80">SEO &amp; AEO</p>
                  </div>
                </div>

                {/* Real Metric Telemetry */}
                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">LCP (Largest Contentful Paint)</p>
                    <p className="text-emerald-400 font-bold text-sm">0.62s</p>
                    <span className="text-[10px] text-emerald-400/80">Sub-second</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">CLS (Layout Shift)</p>
                    <p className="text-emerald-400 font-bold text-sm">0.000</p>
                    <span className="text-[10px] text-emerald-400/80">Zero Shift</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">INP (Interaction Speed)</p>
                    <p className="text-emerald-400 font-bold text-sm">18ms</p>
                    <span className="text-[10px] text-emerald-400/80">Instant</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 05: GLOBAL EDGE DEPLOYMENT & GITHUB HANDOVER ── */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 border-l-[8px] border-l-[#ba49f5] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#ba49f5]/15 text-[#ba49f5] flex items-center justify-center font-montserrat font-black text-xl shadow-xs">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#ba49f5]/15 text-[#ba49f5]">
                      Days 24–28 · Phase 5
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      100% Code Handover
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight mb-2">
                    Edge Deployment &amp; Full Repository Handover
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    DNS propagation, cloud CDN &amp; 30-day Hypercare warranty.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    We configure custom domain DNS, setup Cloudflare/Vercel global edge routing, enable automated SSL certificates, and execute zero-downtime go-live. You receive 100% sovereign ownership of the private GitHub repository, environment configurations, and an in-depth video walkthrough, backed by our 30-day post-launch warranty with priority support.
                  </p>
                </div>

                <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[4].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Visual Showcase: Production Live Deployment & Sovereignty Handover */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#ba49f5]" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/90">
                      GitHub IP Sovereignty Transfer
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                    Transferred ✓
                  </span>
                </div>

                {/* Production Live Card */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Live URL */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 text-[11px]">Live Production URL:</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                        <Lock className="w-3 h-3" /> SSL Active (TLS 1.3)
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-black/60 px-3.5 py-2.5 rounded-lg border border-white/10">
                      <span className="text-white font-bold text-xs sm:text-sm">https://yourdomain.com</span>
                      <span className="bg-emerald-500 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                        200 OK
                      </span>
                    </div>
                  </div>

                  {/* Multi-Region Edge Latencies */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/50">US-East (iad1)</p>
                      <p className="text-emerald-400 font-bold mt-0.5">11ms</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/50">EU-Central (fra1)</p>
                      <p className="text-emerald-400 font-bold mt-0.5">16ms</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/50">AP-South (bom1)</p>
                      <p className="text-emerald-400 font-bold mt-0.5">8ms</p>
                    </div>
                  </div>

                  {/* Repository Ownership */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/60 text-[11px]">Organization Transfer:</span>
                      <span className="text-[#ba49f5] font-bold text-[11px]">Private GitHub Repo</span>
                    </div>
                    <p className="text-white font-bold text-xs">@client-org / flagship-web-platform</p>
                    <p className="text-white/50 text-[10px] mt-1">100% full admin ownership transferred · 0 vendor lock-in</p>
                  </div>

                  {/* 30-Day Hypercare Warranty */}
                  <div className="p-3.5 rounded-xl bg-[#ba49f5]/15 border border-[#ba49f5]/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#ba49f5] text-white flex items-center justify-center font-bold">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs">30-Day Hypercare Warranty</p>
                        <p className="text-white/70 text-[10px]">Free bug fixes &amp; priority architect support</p>
                      </div>
                    </div>
                    <span className="bg-[#ba49f5] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      ACTIVE SLA
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60 font-mono">
                  <span>DNS Propagation: Global Edge</span>
                  <span className="text-emerald-400 font-bold">Live Worldwide 🚀</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CLIENT SOVEREIGNTY BENTO: Total Ownership & Guarantee
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#141414] text-white font-montserrat">
        <div className="max-w-[1262px] mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Client Sovereignty Guarantee
            </span>
            <h2 className="font-black text-3xl sm:text-5xl tracking-tight mt-3 text-white">
              You own every pixel and every line of code.
            </h2>
            <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
              We never hold clients hostage. Our engineering standards ensure your internal team can take over, deploy, and scale effortlessly.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-3xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    <item.icon size={22} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest font-mono px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-xl text-white mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FAQ ACCORDION SECTION
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 max-w-[950px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Clear Answers
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ece9e1] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-montserrat font-bold text-base sm:text-lg text-[#141414] hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 text-primary shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#7d7b77] leading-relaxed border-t border-[#f5f2eb] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. HIGH CONVERSION CTA: Pink Accent Transition Arch
      ─────────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#fb72cc] text-[#141414] rounded-t-[70px] sm:rounded-t-[100px] md:rounded-t-[140px] pt-20 pb-24 sm:pt-28 sm:pb-32 px-5 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-[950px] mx-auto relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#141414]/80 bg-white/40 px-4 py-1.5 rounded-full inline-block mb-6">
            Fixed Scope · Guaranteed Launch Date
          </span>
          
          <h2 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#141414] leading-[1.04]">
            Ready to build a website that leaves competitors behind?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#141414]/85 font-medium max-w-2xl mx-auto leading-relaxed">
            Book a free 20-minute discovery call with our founding engineers. We will review your goals and deliver an itemized fixed-price sprint roadmap.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-white px-9 py-4 rounded-full text-base font-bold transition shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Book Your Discovery Call</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>
            
            <a
              href="https://wa.me/918810650579?text=Hi%20Value%20Tech%20Solution,%20I'd%20like%20to%20discuss%20a%20website%20sprint."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f7f2ea] text-[#141414] border border-[#141414]/20 px-8 py-4 rounded-full text-base font-bold transition"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
