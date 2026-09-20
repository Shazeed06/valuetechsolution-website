"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

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
   5 PRODUCTION-GRADE ENGINEERING SPRINTS
───────────────────────────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    phase: "Phase 1",
    tag: "Days 1–3",
    color: "#1ab9a2",
    bubbleColor: "teal" as BubbleColor,
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
      label: "Scoping Turnaround",
      val: "72 Hours",
      badge: "SLA Guaranteed",
    },
  },
  {
    num: "02",
    phase: "Phase 2",
    tag: "Week 1–2",
    color: "#fb72cc",
    bubbleColor: "pink" as BubbleColor,
    icon: Palette,
    title: "Bespoke Figma System & Prototype",
    subtitle: "Zero generic templates. 100% custom brand design tokens.",
    assurance: "Unlimited Design Iterations Until 100% Delight Guarantee",
    desc: "Our senior design leads craft bespoke Figma prototypes from scratch. We establish strict design token variables for typography scales, dark/light contrast ratios, fluid spacing grids, and stateful micro-interactions. You receive a clickable, interactive prototype matching your exact brand vision to test and approve before engineering begins.",
    deliverables: [
      "Clickable desktop & mobile interactive Figma prototypes",
      "Custom design token library (colors, typography, grid tokens)",
      "High-converting visual hierarchy & bespoke vector graphics",
      "Collaborative feedback rounds with same-day Figma updates",
    ],
    highlightMetric: {
      label: "Component System",
      val: "40+ Tokens",
      badge: "Production Ready",
    },
  },
  {
    num: "03",
    phase: "Phase 3",
    tag: "Week 2–3",
    color: "#fea800",
    bubbleColor: "amber" as BubbleColor,
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
    bubbleColor: "teal" as BubbleColor,
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
    bubbleColor: "purple" as BubbleColor,
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
   FAQS
───────────────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How fast can we realistically launch our website?",
    a: "Our standard sprint delivers fully custom, production-ready websites in 2 to 4 weeks. High-converting 3-page landing sites can be delivered in 10 to 14 days, while complex platforms with custom CMS or database logic take 3 to 5 weeks. Every timeline is locked in writing before kickoff.",
  },
  {
    q: "Who actually designs and engineers our website?",
    a: "Every project is architected, designed, and coded exclusively by senior software engineers with 6+ years of production experience. We maintain a strict zero-intern and zero-outsourcing policy. You communicate directly with the engineers building your site.",
  },
  {
    q: "What happens if our Lighthouse score drops below 98?",
    a: "We contractually guarantee 98+ Google Lighthouse performance on production launch. If your production site scores below 95 on Core Web Vitals, our engineering team optimizes scripts, assets, and server components on our own dime until it passes.",
  },
  {
    q: "How do revisions and collaborative feedback work during the sprint?",
    a: "We share interactive Figma prototypes during Week 1 and live Vercel edge staging links during Weeks 2–3. You can leave pin comments directly on the design or staging site. Revisions are executed with same-day turnaround until you are completely thrilled.",
  },
  {
    q: "Do we own the code and design files after launch?",
    a: "Yes, 100%. We transfer the private GitHub repository to your organization, export all master Figma files, and provide full environment documentation. You have total sovereign ownership with zero licensing fees or platform lock-ins.",
  },
];

const marqueeItems = [
  "✦ STEP 01: TECHNICAL SCOPE LOCKDOWN",
  "✦ STEP 02: BESPOKE FIGMA DESIGN SYSTEM",
  "✦ STEP 03: PURE NEXT.JS 16 CODEBASE",
  "✦ STEP 04: 98+ LIGHTHOUSE PERFORMANCE SLA",
  "✦ STEP 05: 100% REPO HANDOVER & HYPERCARE",
  "✦ 2–4 WEEK FIXED SPRINT GUARANTEE",
];

export default function ProcessPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSprintTab, setActiveSprintTab] = useState(0);

  return (
    <div className="bg-[#efebe5] text-[#141414] overflow-hidden font-montserrat relative selection:bg-[#1ab9a2] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Epic Warm Beige + Crisp 3D Floating Bubbles
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 lg:pb-32 overflow-hidden text-center">
        
        {/* PROMINENT 3D GLOSSY FLOATING BUBBLES (Foreground z-20 with real specular shine) */}
        
        {/* Giant Teal Bubble (Left Upper) */}
        <div className="absolute top-[14%] sm:top-[18%] left-[2%] sm:left-[6%] lg:left-[8%] z-20">
          <GlossyBubble size={170} color="teal" floatVariant={1} delay="0s" />
        </div>

        {/* Giant Magenta/Pink Bubble (Right Upper) */}
        <div className="absolute top-[12%] sm:top-[16%] right-[2%] sm:right-[5%] lg:right-[7%] z-20">
          <GlossyBubble size={185} color="pink" floatVariant={2} delay="1.2s" />
        </div>

        {/* Medium Purple Bubble (Left Mid) */}
        <div className="absolute top-[48%] sm:top-[52%] left-[1%] sm:left-[3%] z-20 hidden sm:block">
          <GlossyBubble size={80} color="purple" floatVariant={3} delay="2.4s" />
        </div>

        {/* Small Amber Bubble (Right Mid) */}
        <div className="absolute top-[46%] sm:top-[50%] right-[3%] sm:right-[5%] z-20">
          <GlossyBubble size={65} color="amber" floatVariant={1} delay="0.8s" />
        </div>

        {/* Micro Cyan Bubble (Floating Near Headline) */}
        <div className="absolute top-[28%] left-[22%] z-20 hidden lg:block">
          <GlossyBubble size={42} color="cyan" floatVariant={2} delay="1.8s" />
        </div>

        {/* Micro Pink Bubble (Floating Near CTA) */}
        <div className="absolute top-[72%] right-[18%] z-20 hidden md:block">
          <GlossyBubble size={38} color="pink" floatVariant={3} delay="3s" />
        </div>

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Live Production Availability Eyebrow */}
          <div className="inline-flex items-center gap-2.5 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ab9a2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1ab9a2]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#141414]">
              Web Engineering Sprints · 2 to 4 Weeks Delivery SLA
            </span>
          </div>

          {/* Main Huge Montserrat Headline */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.02] tracking-[-0.04em] text-[#141414] max-w-5xl mx-auto mb-6">
            From concept to flagship in{" "}
            <span className="font-sourceSerif italic font-normal text-primary relative inline-block">
              4 structured weeks.
              {/* Hand-drawn SVG wavy underline */}
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#1ab9a2] opacity-70"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12C60 4 120 18 180 8C220 1 260 14 295 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* High-Ticket Agency Subheading */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#7d7b77] leading-relaxed mb-10 font-medium">
            Zero endless meetings. Zero junior handoffs. Just clear technical milestones, direct senior software architect collaboration, and a 98+ Google Lighthouse performance score guaranteed in contract.
          </p>

          {/* Floating Sticker Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#1ab9a2]" />
              <span>⚡ 98+ Lighthouse Guaranteed in Writing</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[2deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#fb72cc]" />
              <span>⏱️ Fixed 2 to 4 Week Sprint SLA</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#fea800]" />
              <span>🛡️ 100% Git Repository & IP Sovereignty</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[1.5deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#ba49f5]" />
              <span>👨‍💻 Senior Engineers Only · Zero Juniors</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="btn bg-primary text-white text-base font-bold px-8 py-4 rounded-full shadow-[0_12px_32px_rgba(26,185,162,0.35)] hover:bg-[#159a86] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Book a 15-Min Discovery Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="#process-breakdown"
              className="btn bg-[#f7f2ea] text-[#141414] border border-[#d8d3ce] text-base font-bold px-8 py-4 rounded-full hover:bg-white transition-all flex items-center gap-2"
            >
              <span>Explore The 5-Step Process</span>
              <span className="text-[#7d7b77]">↓</span>
            </a>
          </div>

          {/* ─────────────────────────────────────────────────────────
              INTERACTIVE SPRINT CONSOLE / ROADMAP PREVIEW
          ─────────────────────────────────────────────────────────── */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#d8d3ce] bg-white p-4 sm:p-6 shadow-xl text-left relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#ece9e1] pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-mono text-xs font-bold text-[#7d7b77]">
                  sprint-lifecycle · production-engine v16.2
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 font-mono text-[11px] font-bold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Engineering Pipeline
              </span>
            </div>

            {/* Interactive Sprint Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {steps.map((s, idx) => (
                <button
                  key={s.num}
                  onClick={() => setActiveSprintTab(idx)}
                  className={`px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                    activeSprintTab === idx
                      ? "bg-[#141414] text-white border-[#141414] shadow-md"
                      : "bg-[#f7f2ea] text-[#141414] border-[#ece9e1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1 opacity-80">
                    <span>{s.phase}</span>
                    <span className="font-mono">{s.tag}</span>
                  </div>
                  <p className="font-bold text-xs truncate">{s.title.split(" ")[0]} {s.title.split(" ")[1]}</p>
                </button>
              ))}
            </div>

            {/* Active Sprint Detail Box */}
            <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md"
                    style={{ backgroundColor: `${steps[activeSprintTab].color}20`, color: steps[activeSprintTab].color }}
                  >
                    {steps[activeSprintTab].tag} · {steps[activeSprintTab].phase}
                  </span>
                  <h3 className="font-montserrat font-black text-xl text-[#141414] mt-1">
                    {steps[activeSprintTab].title}
                  </h3>
                  <p className="text-xs font-semibold text-primary">
                    {steps[activeSprintTab].assurance}
                  </p>
                </div>

                <div className="bg-white rounded-xl px-4 py-2 border border-[#ece9e1] shrink-0 text-center sm:text-right">
                  <p className="font-mono text-[10px] uppercase text-[#7d7b77] font-bold">
                    {steps[activeSprintTab].highlightMetric.label}
                  </p>
                  <p className="font-montserrat font-black text-lg text-[#141414]">
                    {steps[activeSprintTab].highlightMetric.val}
                  </p>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                    ✓ {steps[activeSprintTab].highlightMetric.badge}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#7d7b77] font-medium leading-relaxed mb-4">
                {steps[activeSprintTab].desc}
              </p>

              <div className="border-t border-[#ece9e1] pt-3">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141414] mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-primary" /> Key Milestone Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#141414]">
                  {steps[activeSprintTab].deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
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
          3. THE 5-STEP TIMELINE: Rich Visuals, Animations & Assurance
      ─────────────────────────────────────────────────────────────── */}
      <section id="process-breakdown" className="py-24 lg:py-32 max-w-[1262px] mx-auto px-5 sm:px-8 relative">
        
        {/* Floating Accent Bubbles Along Timeline (Z-20 Foreground) */}
        <div className="absolute top-[8%] -left-8 z-20 hidden lg:block">
          <GlossyBubble size={110} color="teal" floatVariant={1} />
        </div>
        <div className="absolute top-[28%] -right-10 z-20 hidden lg:block">
          <GlossyBubble size={125} color="pink" floatVariant={2} />
        </div>
        <div className="absolute top-[52%] -left-6 z-20 hidden lg:block">
          <GlossyBubble size={95} color="amber" floatVariant={3} />
        </div>
        <div className="absolute top-[75%] -right-8 z-20 hidden lg:block">
          <GlossyBubble size={115} color="purple" floatVariant={1} />
        </div>

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
            We don't do vague agile hand-waving. Each phase has a strict technical definition of done, contractual quality gates, and verified deliverables.
          </p>
        </div>

        {/* Vertical Step Cards with Rich Interactive Visuals */}
        <div className="space-y-16 relative">

          {/* ── STEP 01 ─────────────────────────────────────────────── */}
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

              {/* Right Visual Graphic: Tech Blueprint Architecture Mockup */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1ab9a2]" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/80">
                      Architecture Blueprint Spec
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-white/10 px-2.5 py-0.5 rounded-full text-white/70">
                    Status: Locked
                  </span>
                </div>

                {/* Tech Node Hierarchy */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1ab9a2]/20 flex items-center justify-center text-[#1ab9a2]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Next.js 16 App Router</p>
                        <p className="text-white/50 text-[11px]">React 19 Server Components + Edge Cache</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Active Node</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#fb72cc]/20 flex items-center justify-center text-[#fb72cc]">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">TypeScript Strict Core</p>
                        <p className="text-white/50 text-[11px]">Zero any types · Strict Null Checking</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Strict Mode</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#fea800]/20 flex items-center justify-center text-[#fea800]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Written Milestone SLA</p>
                        <p className="text-white/50 text-[11px]">Guaranteed Launch Date & Scope Signed</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">100% Locked</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                  <span>Scope Creep Protection: Active</span>
                  <span className="text-[#1ab9a2] font-bold">Milestone Verified ✓</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 02 ─────────────────────────────────────────────── */}
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
                    Bespoke Figma System & Prototype
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Zero generic templates. 100% custom brand design tokens.
                  </p>

                  <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                    We don't touch off-the-shelf WordPress or Webflow templates. Our designers craft high-fidelity Figma prototypes with responsive typography, dark/light contrast scales, and micro-interactions. You get an interactive prototype to test on mobile and desktop before any code is written.
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

              {/* Right Visual Graphic: Live Looping Figma & Design System Preview */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#ece9e1] shadow-lg bg-[#141414] relative">
                {/* Browser Title Bar */}
                <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/10 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-bold text-white">figma-prototype · master-tokens</span>
                  </div>
                  <span className="text-[10px] bg-[#fb72cc]/20 text-[#fb72cc] px-2 py-0.5 rounded-full font-bold">
                    Interactive Preview
                  </span>
                </div>

                {/* Looping Design Video Animation */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src="/videos/services/web-design.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Floating Token Chips */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-[#141414] shadow-md">
                      <span className="w-3 h-3 rounded-full bg-[#1ab9a2]" />
                      <span className="w-3 h-3 rounded-full bg-[#fb72cc]" />
                      <span className="w-3 h-3 rounded-full bg-[#fea800]" />
                      <span className="font-mono text-[11px] ml-1">Design Tokens Locked</span>
                    </div>
                    <span className="bg-emerald-500 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      100% Custom Layout
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 03 ─────────────────────────────────────────────── */}
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
                    Pure Next.js 16 & Motion Engineering
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Strict TypeScript, server components & edge rendering.
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

              {/* Right Visual Graphic: Live Code Terminal & Video Mockup */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#ece9e1] shadow-lg bg-[#141414] relative">
                <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/10 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-bold text-white">turbopack · edge-compiler</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                    ✓ Turbopack Active
                  </span>
                </div>

                {/* Looping Code Video */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src="/videos/services/software-dev.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                  {/* Terminal Output Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/10 font-mono text-[11px] text-white/90">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-emerald-400 font-bold">▲ Next.js 16.2.6 (Turbopack)</span>
                      <span className="text-white/50">Compiled in 312ms</span>
                    </div>
                    <div className="text-white/70 text-[10px]">
                      ✓ 0 TypeScript errors · Server Components streaming
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 04 ─────────────────────────────────────────────── */}
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
                    98+ Lighthouse Audit & Technical SEO Rig
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    Sub-second load times, schema injection & search authority.
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

              {/* Right Visual Graphic: Google Lighthouse 99 Score Dashboard */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-lg relative overflow-hidden">
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
                    <p className="font-mono text-[10px] sm:text-xs font-bold mt-2 text-white/80">SEO & AEO</p>
                  </div>
                </div>

                {/* Real Metric Telemetry */}
                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">LCP</p>
                    <p className="text-emerald-400 font-bold text-sm">0.62s</p>
                    <span className="text-[10px] text-emerald-400/80">Sub-second</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">CLS</p>
                    <p className="text-emerald-400 font-bold text-sm">0.000</p>
                    <span className="text-[10px] text-emerald-400/80">Zero Shift</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <p className="text-white/40 text-[10px]">INP</p>
                    <p className="text-emerald-400 font-bold text-sm">18ms</p>
                    <span className="text-[10px] text-emerald-400/80">Instant</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── STEP 05 ─────────────────────────────────────────────── */}
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
                    Edge Deployment & Full Repository Handover
                  </h3>
                  <p className="text-sm font-bold text-primary mb-4">
                    DNS propagation, cloud CDN & 30-day Hypercare warranty.
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

              {/* Right Visual Graphic: GitHub Repo & Production Live Status */}
              <div className="lg:col-span-6 bg-[#141414] rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#ba49f5]" />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-white/90">
                      GitHub IP Sovereignty Transfer
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                    Transferred
                  </span>
                </div>

                {/* Production Live Card */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60">Live Production URL:</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Lock className="w-3.5 h-3.5" /> SSL Secured
                      </span>
                    </div>
                    <div className="bg-black/50 p-3 rounded-lg border border-white/10 flex items-center justify-between text-white font-bold text-sm">
                      <span>https://yourdomain.com</span>
                      <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded font-bold uppercase">
                        Active 200 OK
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60">Repository Sovereignty:</span>
                      <span className="text-[#1ab9a2] font-bold">Private GitHub Repo</span>
                    </div>
                    <p className="text-white/90 font-bold text-sm">
                      org / flagship-web-platform
                    </p>
                    <p className="text-[11px] text-white/50 mt-1">
                      100% full admin ownership transferred · 0 vendor lock-in
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-[#ba49f5] shrink-0" />
                      <div>
                        <p className="font-bold text-white text-xs">30-Day Hypercare Warranty</p>
                        <p className="text-white/60 text-[11px]">Free bug fixes & priority architect support</p>
                      </div>
                    </div>
                    <span className="text-purple-300 font-bold text-[10px] uppercase bg-purple-500/20 px-2 py-1 rounded-md">
                      Active SLA
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                  <span>DNS Propagation: Global Edge</span>
                  <span className="text-[#ba49f5] font-bold">Live Worldwide 🚀</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CLIENT SOVEREIGNTY BENTO GRID
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f7f2ea] border-y border-[#d8d3ce] relative overflow-hidden">
        
        {/* Floating Bubble Accent in Bento (z-20) */}
        <div className="absolute top-[12%] right-[4%] z-20 hidden md:block">
          <GlossyBubble size={130} color="amber" floatVariant={2} />
        </div>
        <div className="absolute bottom-[10%] left-[3%] z-20 hidden md:block">
          <GlossyBubble size={90} color="teal" floatVariant={3} />
        </div>

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                Client Guarantees & Handover
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-[1.1]">
              What you walk away with upon{" "}
              <span className="font-sourceSerif italic font-normal text-primary">
                sprint completion.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#7d7b77] font-medium leading-relaxed">
              Total code and asset sovereignty. You own every pixel, every line of TypeScript, and every cloud configuration asset.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoDeliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f7f2ea] text-[#7d7b77]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-montserrat font-black text-xl text-[#141414] tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. PROCESS FAQS: Clearing Ambiguity
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-[1000px] mx-auto px-5 sm:px-8 relative">
        
        {/* Floating Accent Bubble near FAQ */}
        <div className="absolute top-[20%] -right-12 z-20 hidden lg:block">
          <GlossyBubble size={100} color="pink" floatVariant={1} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
              Sprint FAQs
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
            Sprint & workflow{" "}
            <span className="font-sourceSerif italic font-normal text-primary">answers plainly.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ece9e1] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-montserrat font-bold text-base sm:text-lg text-[#141414] hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary text-xl font-bold ml-4 w-6 h-6 rounded-full bg-[#f7f2ea] flex items-center justify-center shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed border-t border-[#f7f2ea] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. STATS / NUMBERS: Dynamic Counter Section
      ─────────────────────────────────────────────────────────────── */}
      <Stats />

      {/* ─────────────────────────────────────────────────────────────
          7. SEAMLESS PINK ARCH CTA BLOCK
      ─────────────────────────────────────────────────────────────── */}
      <CTA />

    </div>
  );
}
