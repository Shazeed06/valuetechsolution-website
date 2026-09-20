"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Search,
  ShieldCheck,
  Layers,
  Sparkles,
  CheckCircle2,
  XCircle,
  Laptop,
  Flame,
  Star,
  Award,
  Users,
  Zap,
  Cpu,
  Globe2,
} from "lucide-react";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const capabilities = [
  {
    n: "01",
    icon: Code2,
    color: "#1ab9a2", // teal
    tag: "Next.js 16",
    title: "Next.js & React Engineering",
    desc: "Clean component architecture, TypeScript, App Router, and edge rendering that guarantee 98+ Google Lighthouse scores and rapid scaling.",
  },
  {
    n: "02",
    icon: Palette,
    color: "#fb72cc", // pink
    tag: "Bespoke Design",
    title: "Bespoke UI/UX & Design Systems",
    desc: "Tailor-made Figma designs, responsive typography scales, and token-driven design systems built for seamless handoffs and brand consistency.",
  },
  {
    n: "03",
    icon: Search,
    color: "#fea800", // amber
    tag: "AEO & SEO",
    title: "Technical SEO & Organic Visibility",
    desc: "Clean semantic HTML, automated JSON-LD schemas, Core Web Vitals optimization, and architecture that search engines and AI assistants love to index.",
  },
  {
    n: "04",
    icon: Layers,
    color: "#1ab9a2", // teal
    tag: "Full Stack",
    title: "Full-Stack Web Applications",
    desc: "Custom client portals, SaaS dashboards, and database integrations built with secure authentication, modern APIs, and reliable cloud setups.",
  },
  {
    n: "05",
    icon: Sparkles,
    color: "#fb72cc", // pink
    tag: "Conversion",
    title: "Conversion Rate Optimization (CRO)",
    desc: "High-impact landing pages designed with persuasive user psychology, clear visual hierarchy, and friction-free call-to-actions.",
  },
  {
    n: "06",
    icon: ShieldCheck,
    color: "#fea800", // amber
    tag: "Enterprise",
    title: "Performance & Security Hardening",
    desc: "Bank-grade SSL, DDoS protection, sub-second asset caching, and automated testing to keep your website fast, resilient, and always online.",
  },
];

const principles = [
  {
    num: "01",
    accent: "text-[#1ab9a2] bg-[#1ab9a2]/10 border-[#1ab9a2]/30",
    title: "Senior Engineers Only.",
    desc: "Every project is designed and coded by senior developers with 6+ years of experience. No juniors learning on your dime or passing off broken code.",
  },
  {
    num: "02",
    accent: "text-[#fb72cc] bg-[#fb72cc]/10 border-[#fb72cc]/30",
    title: "Outcomes, Not Slideware.",
    desc: "We measure success by page speed, search rankings, and lead conversions — not the number of bloated meetings or 80-page slide decks.",
  },
  {
    num: "03",
    accent: "text-[#fea800] bg-[#fea800]/10 border-[#fea800]/30",
    title: "Clean Stack, Lasting Code.",
    desc: "We write clean, strictly typed Next.js and TypeScript. You own 100% of the Git repository, deployment configs, and intellectual property from day one.",
  },
  {
    num: "04",
    accent: "text-[#1ab9a2] bg-[#1ab9a2]/10 border-[#1ab9a2]/30",
    title: "Fixed Price & Guaranteed Sprints.",
    desc: "No hourly billing surprises or creeping invoices. You receive a guaranteed fixed-price quote and guaranteed 2–4 week turnaround before work begins.",
  },
];

const marqueeItems = [
  "✦ BESPOKE WEB ENGINEERING",
  "✦ ZERO COOKIE-CUTTER TEMPLATES",
  "✦ 98+ LIGHTHOUSE SCORES",
  "✦ SENIOR DEVELOPERS ONLY",
  "✦ FULL REPOSITORY OWNERSHIP",
  "✦ NEXT.JS & TYPESCRIPT EXPERTS",
  "✦ HIGH-CONVERTING FUNNELS",
  "✦ 2–4 WEEK DELIVERY GUARANTEE",
];

export default function AboutPageContent() {
  return (
    <div className="bg-[#efebe5] text-[#141414] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: High-Energy Typographic & Visual Studio Showcase
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#1ab9a2]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-40 left-[-80px] w-[450px] h-[450px] bg-[#fb72cc]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Bold Headline & Manifesto */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Studio Pill */}
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
                  Value Tech Solution · Engineering Studio
                </span>
              </div>

              {/* Mega Headline */}
              <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.02] tracking-[-0.04em] text-[#141414] mb-6">
                We don&apos;t build templates.<br />
                We engineer{" "}
                <span className="font-sourceSerif italic font-normal text-primary underline decoration-[#1ab9a2]/30 decoration-wavy">
                  digital flagships.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-xl text-base sm:text-lg text-[#7d7b77] leading-relaxed mb-8 font-medium">
                Most web agencies resell bloated templates that load like molasses and crumble under traffic. Value Tech Solution was founded to bring computer-science rigor to web design: custom Next.js websites crafted by senior engineers that load in milliseconds and convert visitors into loyal clients.
              </p>

              {/* Creative Floating Badges / Stickers */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#ece9e1] shadow-xs text-xs font-bold text-[#141414] rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
                  <span className="w-2 h-2 rounded-full bg-[#fb72cc]" />
                  <span>🎓 Zero Junior Devs</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#ece9e1] shadow-xs text-xs font-bold text-[#141414] rotate-[3deg] hover:rotate-0 transition-transform cursor-default">
                  <span className="w-2 h-2 rounded-full bg-[#1ab9a2]" />
                  <span>⚡ 98+ Lighthouse Guarantee</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#ece9e1] shadow-xs text-xs font-bold text-[#141414] rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
                  <span className="w-2 h-2 rounded-full bg-[#fea800]" />
                  <span>👑 Senior Engineers Only</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
                >
                  <span>Work With Senior Engineers</span>
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-6 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all"
                >
                  <span>Explore Case Studies</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Creative Browser & Motion Window */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Browser Mockup */}
              <div className="relative w-full max-w-[500px] bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] border border-[#d8d3ce] overflow-hidden group">
                
                {/* Browser Top Chrome */}
                <div className="bg-[#f7f2ea] px-4 py-3 border-b border-[#ece9e1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#ece9e1] text-[11px] font-medium text-[#7d7b77] w-52 justify-center shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate text-[#141414] font-semibold">valuetechsolution.com</span>
                  </div>
                  <Laptop className="w-3.5 h-3.5 text-[#7d7b77]/60" />
                </div>

                {/* Looping Engineering Video */}
                <div className="relative aspect-[4/3] w-full bg-[#141414] overflow-hidden">
                  <video
                    src="/videos/services/software-dev.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "/videos/services/web-design.mp4";
                    }}
                  />
                  
                  {/* Floating Floating Spec Overlay */}
                  <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      100% Next.js 16 Engine
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#141414]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 text-right shadow-lg">
                    <div className="text-[10px] font-bold text-[#fea800] uppercase tracking-wider">Lighthouse Score</div>
                    <div className="text-xl font-black text-white font-montserrat flex items-center justify-end gap-1">
                      <span>98+</span>
                      <Zap className="w-4 h-4 text-[#fea800] fill-current" />
                    </div>
                  </div>
                </div>

                {/* Browser Bottom Spec Footnote */}
                <div className="bg-[#f7f2ea] p-4 flex items-center justify-between border-t border-[#ece9e1] text-xs font-semibold text-[#7d7b77]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Senior Coded
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Edge Deployed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Clean Repo
                  </span>
                </div>

              </div>

              {/* Decorative Hand-Drawn SVG Accent */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block pointer-events-none">
                <Image
                  src="/images/shape-line.svg"
                  alt="Decorative line"
                  width={90}
                  height={90}
                  className="opacity-80"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. KINETIC MARQUEE STRIP: High-Energy Contrast Strip
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
          3. THE CONTRAST: Why Value Tech Exists (Agency vs Standard)
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 max-w-[1262px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              The Contrast
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-[1.1]">
            The old agency model is{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              fatally broken.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#7d7b77] font-medium leading-relaxed">
            Here is why ambitious founders and scaling brands switch from traditional marketing agencies to Value Tech Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Outdated Agency Trap */}
          <div className="bg-[#f7f2ea] border border-[#d8d3ce] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-xs font-bold text-red-600 mb-6 uppercase tracking-wider">
                <XCircle className="w-3.5 h-3.5 text-red-500" />
                The Typical Agency Trap
              </div>

              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] mb-6 tracking-tight">
                Bloated code, outsourced juniors & runaway invoices.
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-[#7d7b77] font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span>Recycled WordPress / Webflow templates bloated with 40+ plugins that cause endless security breaches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span>Pitched by senior founders, then secretly handed off to junior interns learning on your dime.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span>Dismal Google Lighthouse scores (sub-50) that destroy your ad return and organic search rankings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span>Opaque hourly billing where 3-week projects drag out into 6-month budget black holes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
                  <span>Hostage holding: you never receive full source code access or control of your domain repos.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d8d3ce] text-xs font-bold text-[#7d7b77]/70 uppercase tracking-wider">
              Result: Sluggish performance & wasted capital
            </div>
          </div>

          {/* Right: The Value Tech Standard */}
          <div className="bg-white border-2 border-[#1ab9a2] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-xl overflow-hidden">
            {/* Corner Decorative Ribbon */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1ab9a2]/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 bg-[#1ab9a2]/15 border border-[#1ab9a2]/30 px-3 py-1 rounded-full text-xs font-bold text-[#1ab9a2] mb-6 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1ab9a2]" />
                The Value Tech Engineering Standard
              </div>

              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] mb-6 tracking-tight">
                Pure Next.js engineering, senior developers & fixed quotes.
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-[#141414] font-semibold">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0 font-black">✓</span>
                  <span>100% Handcrafted Next.js 16 & TypeScript: zero template bloat, zero dependencies vulnerabilities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0 font-black">✓</span>
                  <span>Every line written by senior software engineers with 6+ years of production experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0 font-black">✓</span>
                  <span>Guaranteed 98+ Google Lighthouse scores with sub-second First Contentful Paint.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0 font-black">✓</span>
                  <span>Guaranteed fixed-price quotes and transparent 2–4 week turnaround sprints.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0 font-black">✓</span>
                  <span>100% Repository ownership: full GitHub push permissions and design tokens transfer on day one.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ece9e1] flex items-center justify-between text-xs font-bold text-primary uppercase tracking-wider">
              <span>Result: Lightning speed & unmatched conversion</span>
              <Award className="w-5 h-5 text-primary" />
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INTERACTIVE BENTO GRID: Inside Our Studio & Culture
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f7f2ea] border-y border-[#d8d3ce]">
        <div className="max-w-[1262px] mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Studio Blueprint
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-[1.1]">
              Engineered for speed.{" "}
              <span className="font-sourceSerif italic font-normal text-primary">
                Built to scale.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#7d7b77] font-medium leading-relaxed">
              We operate like a dedicated in-house product team — agile, transparent, and obsessed with craft.
            </p>
          </div>

          {/* Asymmetric Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Performance Benchmark (col-span-7) */}
            <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#ece9e1] shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1ab9a2]/10 border border-[#1ab9a2]/20 flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-[#1ab9a2]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Core Web Vitals
                  </span>
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] mb-3 tracking-tight">
                  Zero Tolerance for Latency
                </h3>
                <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed mb-8">
                  Every 100ms delay costs 7% in conversions. We optimize asset tree-shaking, static edge caching, and server-side rendering to ensure instantaneous page transitions.
                </p>
              </div>

              {/* Live Metric Simulation Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#ece9e1]">
                <div className="bg-[#f7f2ea] p-4 rounded-2xl text-center">
                  <div className="font-montserrat font-black text-2xl text-primary">98+</div>
                  <div className="text-[11px] font-bold text-[#7d7b77] uppercase mt-1">Lighthouse</div>
                </div>
                <div className="bg-[#f7f2ea] p-4 rounded-2xl text-center">
                  <div className="font-montserrat font-black text-2xl text-[#fb72cc]">0.8s</div>
                  <div className="text-[11px] font-bold text-[#7d7b77] uppercase mt-1">Avg. LCP</div>
                </div>
                <div className="bg-[#f7f2ea] p-4 rounded-2xl text-center">
                  <div className="font-montserrat font-black text-2xl text-[#fea800]">0.00</div>
                  <div className="text-[11px] font-bold text-[#7d7b77] uppercase mt-1">CLS Score</div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Senior Engineers Only (col-span-5) */}
            <div className="md:col-span-5 bg-[#141414] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-sm flex flex-col justify-between group hover:border-[#fb72cc]/50 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#fb72cc]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#fb72cc]">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#fb72cc] bg-[#fb72cc]/10 border border-[#fb72cc]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    Talent Policy
                  </span>
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  No Juniors. No Subcontractors.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed">
                  We don&apos;t train interns on your production budget. Every architect on your project has built, scaled, and maintained high-traffic web applications.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white/80 font-montserrat">
                  Direct Founder & Senior Dev Communication
                </span>
              </div>
            </div>

            {/* Bento Card 3: Modern Tech Stack (col-span-5) */}
            <div className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#ece9e1] shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fea800]/10 border border-[#fea800]/20 flex items-center justify-center text-[#fea800]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#fea800] bg-[#fea800]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Future Proof
                  </span>
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] mb-3 tracking-tight">
                  Modern Web Arsenal
                </h3>
                <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed mb-6">
                  We strictly code with modern industry standards: Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ece9e1]">
                {["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel", "GSAP", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-bold bg-[#f7f2ea] text-[#141414] px-3 py-1 rounded-full border border-[#ece9e1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 4: Global Footprint & Sprints (col-span-7) */}
            <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#ece9e1] shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1ab9a2]/10 border border-[#1ab9a2]/20 flex items-center justify-center text-primary">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-[#1ab9a2]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Global Delivery
                  </span>
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] mb-3 tracking-tight">
                  Delivering to Ambitious Brands Worldwide
                </h3>
                <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed">
                  Headquartered in India, partnering with fast-moving startups and companies across Delhi, Mumbai, Bangalore, London, Dubai, and the US.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ece9e1] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1ab9a2]" />
                  <span className="text-xs font-bold text-[#141414]">2–4 Week Delivery Average</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fb72cc]" />
                  <span className="text-xs font-bold text-[#141414]">100% Client Retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fea800]" />
                  <span className="text-xs font-bold text-[#141414]">Zero Tech Debt Guarantee</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OUR CAPABILITIES: Interactive 6-Card Grid with Colored Borders
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-[1262px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight leading-[1.08]">
            What we <span className="font-sourceSerif italic font-normal text-primary">engineer.</span>
          </h2>
          <p className="mt-4 text-base text-[#7d7b77] font-medium">
            Every deliverable is handled in-house by experienced software engineers who take pride in craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.n}
                className="bg-white rounded-3xl p-8 border border-[#ece9e1] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                style={{ borderTop: `4px solid ${c.color}` }}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${c.color}15`, color: c.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-montserrat opacity-40 group-hover:opacity-100 transition-opacity">
                      {c.n}
                    </span>
                  </div>

                  <span
                    className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3"
                    style={{ backgroundColor: `${c.color}15`, color: c.color }}
                  >
                    {c.tag}
                  </span>

                  <h3 className="font-montserrat font-bold text-xl text-[#141414] mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ece9e1] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#141414] group-hover:text-primary transition-colors">
                    Learn more
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. STATS / NUMBERS: Dynamic Animated Counter Section
      ─────────────────────────────────────────────────────────────── */}
      <Stats />

      {/* ─────────────────────────────────────────────────────────────
          7. OUR 4 UNWAVERING PRINCIPLES
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-[1262px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Our Values
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
            Four principles.{" "}
            <span className="font-sourceSerif italic font-normal text-primary">Every project.</span>
          </h2>
          <p className="mt-4 text-base text-[#7d7b77] font-medium">
            How we protect your budget, brand reputation, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#ece9e1] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${p.accent}`}>
                  Principle {p.num}
                </span>
                <h3 className="mt-6 font-montserrat font-bold text-2xl text-[#141414] tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FOUNDER'S CALLOUT STRIP
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f7f2ea] border-t border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-5 sm:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-[#1ab9a2]/15 border border-[#1ab9a2]/30 flex items-center justify-center text-primary mx-auto mb-6">
            <Award className="w-6 h-6" />
          </div>
          <p className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight max-w-3xl mx-auto leading-snug mb-8">
            &ldquo;If you want a cookie-cutter template, we&apos;re the wrong studio. If you want senior engineers who build high-performance web systems and stand behind them — let&apos;s build.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 group"
          >
            <span>Start a Project Discussion</span>
            <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. SEAMLESS PINK ARCH CTA
      ─────────────────────────────────────────────────────────────── */}
      <CTA />

    </div>
  );
}
