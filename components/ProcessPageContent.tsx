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
  HelpCircle,
  Laptop,
} from "lucide-react";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const steps = [
  {
    num: "01",
    tag: "Days 1–3",
    color: "#1ab9a2",
    icon: Compass,
    title: "Discovery & Technical Scoping",
    subtitle: "Aligning audience, architecture & business goals.",
    desc: "We start with an intensive 30-minute discovery session to deeply understand your product, target audience, conversion goals, and technical requirements. We map out the exact sitemap, user journeys, and component architecture so there is zero ambiguity.",
    deliverables: [
      "Technical architecture specification & tech stack plan",
      "Information architecture & sitemap mapping",
      "Fixed-price quote with zero hidden fees",
      "Guaranteed sprint timeline with delivery milestones",
    ],
  },
  {
    num: "02",
    tag: "Week 1–2",
    color: "#fb72cc",
    icon: Palette,
    title: "Bespoke UI/UX & Design System",
    subtitle: "Tailor-made Figma prototypes that look stunning.",
    desc: "We don't touch off-the-shelf templates. Our designers craft high-fidelity, tailor-made Figma prototypes complete with responsive typography, dark/light contrast scales, and micro-interactions. You get an interactive prototype to test and approve before any code is written.",
    deliverables: [
      "Interactive desktop & mobile Figma prototypes",
      "Design token system (colors, typography, spacing)",
      "Conversion-focused layouts & visual hierarchy",
      "Collaborative feedback rounds until 100% satisfied",
    ],
  },
  {
    num: "03",
    tag: "Week 2–3",
    color: "#fea800",
    icon: Code2,
    title: "Pure Next.js 16 Engineering",
    subtitle: "Strictly typed, lightning-fast component architecture.",
    desc: "Our senior software engineers bring the approved designs to life using modern Next.js 16, React 19, TypeScript, and Tailwind CSS. We code with modular component architecture, clean state management, and edge rendering so your application is robust and maintainable.",
    deliverables: [
      "Clean Next.js App Router & React 19 architecture",
      "100% strict TypeScript with zero runtime errors",
      "Fluid micro-animations (GSAP / CSS transforms)",
      "Live preview deployment on Vercel edge staging",
    ],
  },
  {
    num: "04",
    tag: "Week 3–4",
    color: "#1ab9a2",
    icon: Zap,
    title: "98+ Lighthouse & SEO Hardening",
    subtitle: "Sub-second speed, search schemas & enterprise QA.",
    desc: "Before launch, every page goes through our rigorous 40-point quality assurance checklist. We audit Google Core Web Vitals (LCP, INP, CLS), inject structured JSON-LD schemas for Google and AI engines (AEO), and test across all mobile screens and browsers.",
    deliverables: [
      "Guaranteed 98+ Google Lighthouse performance score",
      "Automated JSON-LD schemas for rich Google snippets",
      "Cross-browser & cross-device responsive QA",
      "Bank-grade SSL, security headers & asset caching",
    ],
  },
  {
    num: "05",
    tag: "Launch & Beyond",
    color: "#fb72cc",
    icon: Rocket,
    title: "Go-Live & Full Repository Handover",
    subtitle: "Deploy to production with 30-day warranty.",
    desc: "We point your custom domain, set up cloud DNS, configure automated CI/CD pipelines, and push the live button. You receive 100% ownership of the Git repository, environment keys, and design tokens, backed by our 30-day bug-free warranty.",
    deliverables: [
      "Zero-downtime DNS migration & live deployment",
      "100% Git repository ownership transferred to your team",
      "Loom video walkthrough & CMS administration guide",
      "30-day post-launch warranty with priority support",
    ],
  },
];

const bentoDeliverables = [
  {
    icon: Code2,
    color: "#1ab9a2",
    title: "100% Source Code Ownership",
    desc: "You own every single line of code from day one. We transfer the private GitHub repository directly to your organization with full documentation.",
  },
  {
    icon: Palette,
    color: "#fb72cc",
    title: "Production Figma Files",
    desc: "All master design files, component tokens, vector assets, and brand guidelines are yours to keep, expand, and scale.",
  },
  {
    icon: ShieldCheck,
    color: "#fea800",
    title: "30-Day Post-Launch Warranty",
    desc: "We stand behind our code. Any bugs, layout issues, or performance regressions are fixed free of charge for 30 days post-launch.",
  },
  {
    icon: Clock,
    color: "#1ab9a2",
    title: "Guaranteed Delivery Date",
    desc: "We agree on a strict launch date before sprint kickoff. If we miss our agreed deadline, you receive a direct financial rebate.",
  },
];

const faqs = [
  {
    q: "How fast can we actually launch our website?",
    a: "Our standard sprint delivers high-performing websites in 2 to 4 weeks. Simpler landing pages can be ready in 7 to 10 days, while complex web applications with databases take 4 to 6 weeks.",
  },
  {
    q: "Who actually builds my website?",
    a: "Every project is designed and coded exclusively by our senior software engineers with 6+ years of experience. We have a strict zero-interns and zero-subcontractors policy.",
  },
  {
    q: "How do revisions and feedback work?",
    a: "We share interactive Figma prototypes and live staging links on Vercel. You can leave comments directly on the design or staging site, and we iterate until you are 100% delighted.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes! We deploy on Vercel or AWS with edge caching. You can host on your own cloud account or let us manage continuous security updates and backups.",
  },
];

const marqueeItems = [
  "✦ STEP 01: DISCOVERY & SCOPING",
  "✦ STEP 02: BESPOKE FIGMA SYSTEM",
  "✦ STEP 03: PURE NEXT.JS 16 CODE",
  "✦ STEP 04: 98+ LIGHTHOUSE AUDIT",
  "✦ STEP 05: REPO HANDOVER & LAUNCH",
  "✦ 2–4 WEEK DELIVERY GUARANTEE",
];

export default function ProcessPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#efebe5] text-[#141414] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Warm Beige with 3D Floating Bubbles & Motion
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-24 lg:pb-28 overflow-hidden text-center">
        
        {/* Floating 3D Bubbles matching GUD Agency aesthetic */}
        {/* Big Teal Bubble (Top Left) */}
        <div className="absolute top-[12%] sm:top-[16%] left-[4%] sm:left-[8%] lg:left-[12%] w-[110px] sm:w-[150px] lg:w-[180px] h-[110px] sm:h-[150px] lg:h-[180px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#3af7d9_0%,#1ab9a2_55%,#0b5f53_100%)] shadow-[0_15px_45px_rgba(26,185,162,0.35)] pointer-events-none -z-10 animate-bounce [animation-duration:6.5s]" />

        {/* Big Pink/Magenta Bubble (Top Right) */}
        <div className="absolute top-[10%] sm:top-[14%] right-[4%] sm:right-[7%] lg:right-[10%] w-[120px] sm:w-[160px] lg:w-[200px] h-[120px] sm:h-[160px] lg:h-[200px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffb4e8_0%,#fb72cc_55%,#9e2175_100%)] shadow-[0_15px_45px_rgba(251,114,204,0.35)] pointer-events-none -z-10 animate-bounce [animation-duration:7.5s] [animation-delay:1s]" />

        {/* Medium Purple Bubble (Far Left) */}
        <div className="absolute top-[50%] left-[2%] sm:left-[4%] w-[55px] sm:w-[75px] h-[55px] sm:h-[75px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#e895ff_0%,#b24bf3_60%,#6918a0_100%)] shadow-[0_10px_30px_rgba(178,75,243,0.3)] pointer-events-none -z-10 animate-bounce [animation-duration:8s]" />

        {/* Small Amber/Gold Bubble (Right Mid) */}
        <div className="absolute top-[45%] right-[3%] sm:right-[6%] w-[38px] sm:w-[50px] h-[38px] sm:h-[50px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe48a_0%,#fea800_60%,#9c6400_100%)] shadow-[0_8px_25px_rgba(254,168,0,0.4)] pointer-events-none -z-10 animate-bounce [animation-duration:5s] [animation-delay:2s]" />

        {/* Tiny Teal Bubble (Center High) */}
        <div className="absolute top-[25%] left-[25%] hidden md:block w-[30px] h-[30px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#3af7d9_0%,#1ab9a2_60%,#0b5f53_100%)] shadow-[0_6px_20px_rgba(26,185,162,0.4)] pointer-events-none -z-10 animate-bounce [animation-duration:4.5s]" />

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
              Proven Sprint Methodology · 2–4 Weeks Delivery
            </span>
          </div>

          {/* Main Huge Typography */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.02] tracking-[-0.04em] text-[#141414] max-w-4xl mx-auto mb-6">
            From concept to launch in{" "}
            <span className="font-sourceSerif italic font-normal text-primary underline decoration-[#1ab9a2]/30 decoration-wavy">
              4 structured weeks.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#7d7b77] leading-relaxed mb-10 font-medium">
            Zero endless meetings. Zero junior handoffs. Just clear milestones, direct senior engineer collaboration, and a guaranteed fixed-price quote before we write a single line of code.
          </p>

          {/* Floating Sticker Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#1ab9a2]" />
              <span>⏱️ 2–4 Week Delivery Guarantee</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[2deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#fb72cc]" />
              <span>💰 100% Fixed-Price Quote</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ece9e1] shadow-sm text-xs font-bold text-[#141414] rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#fea800]" />
              <span>🛡️ 30-Day Post-Launch Warranty</span>
            </div>
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              <span>Book a Sprint Call</span>
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-7 py-4 rounded-full font-bold text-sm sm:text-base transition-all"
            >
              <span>See What We Shipped</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. KINETIC MARQUEE STRIP: Dark Ribbon Contrast
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
          3. THE 5-STEP PROCESS TIMELINE: High-Detail Cards
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-[1262px] mx-auto px-5 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Step-by-Step Breakdown
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight leading-[1.08]">
            How your project goes from{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              idea to live production.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#7d7b77] font-medium leading-relaxed">
            Every step is documented, transparent, and driven by senior software engineers.
          </p>
        </div>

        {/* Vertical Step Cards */}
        <div className="space-y-12 relative">
          
          {/* Decorative Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-10 top-16 bottom-16 w-0.5 bg-[#d8d3ce] z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 bg-white rounded-3xl p-8 sm:p-12 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ borderLeft: `6px solid ${step.color}` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Timeline Tag & Icon */}
                  <div className="lg:col-span-4 flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-montserrat font-black text-xl shadow-xs"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        {step.num}
                      </span>
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Description & Deliverables */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <p className="text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <div className="bg-[#f7f2ea] rounded-2xl p-5 sm:p-6 border border-[#ece9e1]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414] mb-3 flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-primary" /> Key Deliverables in this step:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#141414]">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE DELIVERABLES BENTO: What You Actually Receive
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f7f2ea] border-y border-[#d8d3ce]">
        <div className="max-w-[1262px] mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Client Handover
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-[1.1]">
              What you receive upon{" "}
              <span className="font-sourceSerif italic font-normal text-primary">
                project completion.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#7d7b77] font-medium leading-relaxed">
              We believe in total code sovereignty. You own every pixel, every line of TypeScript, and every deployment asset.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoDeliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-[#ece9e1] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-[#141414] tracking-tight mb-3">
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
          5. PROCESS FAQ: Clearing Ambiguity
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-[1000px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
            Sprint & workflow{" "}
            <span className="font-sourceSerif italic font-normal text-primary">answers.</span>
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
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-montserrat font-bold text-base sm:text-lg text-[#141414] hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary text-xl font-bold ml-4">
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
          6. STATS / NUMBERS: Dynamic Counter
      ─────────────────────────────────────────────────────────────── */}
      <Stats />

      {/* ─────────────────────────────────────────────────────────────
          7. SEAMLESS PINK ARCH CTA
      ─────────────────────────────────────────────────────────────── */}
      <CTA />

    </div>
  );
}
