"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  TrendingUp,
  Palette,
  Bot,
  Search,
  Share2,
  Code2,
  Stethoscope,
  Building2,
  ShoppingBag,
  UserCheck,
  Award,
  Layers,
  BarChart3,
  HeartHandshake,
  Star,
  ChevronDown,
  Sparkles
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  badgeBg: string; // "bg-primary" | "bg-secondary" | "bg-tertiary"
  textColor: string; // "text-primary" | "text-secondary" | "text-tertiary"
  icon: any;
  href: string;
}

const servicesGrid: ServiceItem[] = [
  {
    id: "01",
    title: "Website Development",
    desc: "Custom Next.js websites that convert visitors into customers with cutting-edge performance, clean code, and modern design.",
    badgeBg: "bg-[#1ab9a2]",
    textColor: "text-[#1ab9a2]",
    icon: "/images/globle-icon.svg",
    href: "/services/web-development",
  },
  {
    id: "02",
    title: "UI/UX & Design Systems",
    desc: "Create memorable digital brand identities, scalable Figma design systems, and visual assets that resonate and stand out.",
    badgeBg: "bg-[#fb72cc]",
    textColor: "text-[#fb72cc]",
    icon: "/images/design-icon.svg",
    href: "/services/design-systems",
  },
  {
    id: "03",
    title: "AI Automation & Workflows",
    desc: "Streamline operations with intelligent AI triage bots, n8n automated pipelines, and lead routers that save hours every week.",
    badgeBg: "bg-[#fea800]",
    textColor: "text-[#fea800]",
    icon: "/images/Ai-icon.svg",
    href: "/services/ai-automation",
  },
  {
    id: "04",
    title: "SEO & AEO Optimization",
    desc: "Dominate search engine rankings and AI answer engines (ChatGPT, Perplexity) with deep technical schema and Core Web Vitals.",
    badgeBg: "bg-[#1ab9a2]",
    textColor: "text-[#1ab9a2]",
    icon: "/images/seo-icon.svg",
    href: "/services/seo",
  },
  {
    id: "05",
    title: "Landing Pages & CRO",
    desc: "Laser-focused landing pages engineered for product launches, ad funnels, and maximum conversion capture in 1–2 weeks.",
    badgeBg: "bg-[#fb72cc]",
    textColor: "text-[#fb72cc]",
    icon: "/images/rocket-white.svg",
    href: "/services/starter-website",
  },
  {
    id: "06",
    title: "Software & SaaS Development",
    desc: "Custom full-stack web applications, interactive client portals, and SaaS dashboards built for scale, speed, and security.",
    badgeBg: "bg-[#fea800]",
    textColor: "text-[#fea800]",
    icon: "/images/setting-icon.svg",
    href: "/services/web-development",
  },
];

const whyChooseItems = [
  {
    icon: Layers,
    title: "Full-Service Solutions",
    desc: "From strategy and design to Next.js engineering and marketing, we handle every aspect of your digital presence under one roof.",
    color: "border-[#1ab9a2] text-[#1ab9a2]",
    accentGlow: "group-hover:border-[#1ab9a2]",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "100% client satisfaction with measurable business outcomes and 98+ Google Lighthouse speed scores across all project sizes.",
    color: "border-[#fb72cc] text-[#fb72cc]",
    accentGlow: "group-hover:border-[#fb72cc]",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    desc: "Every technical and design decision is backed by analytics, search intent, and user testing to ensure maximum commercial ROI.",
    color: "border-[#fea800] text-[#fea800]",
    accentGlow: "group-hover:border-[#fea800]",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "Your long-term success is our priority with 30-day post-launch warranty, ongoing optimization, and direct founder Slack access.",
    color: "border-amber-400 text-amber-400",
    accentGlow: "group-hover:border-amber-400",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "Value Tech delivered our custom Next.js web platform ahead of schedule. The performance scores blew us away — 99 on Lighthouse! Inbound leads doubled in our very first month.",
    author: "Rahul Mehta",
    role: "Founder, SaaSFlow",
    glow: "from-[#fea800]/25 via-transparent to-transparent",
    borderHover: "hover:border-[#fea800]/60",
  },
  {
    stars: 5,
    quote:
      "Working with them felt like having a dedicated senior engineering team in our corner. They understood our brand vision instantly and engineered a flawless design system.",
    author: "Sarah Jenkins",
    role: "CEO, Nexa Studio",
    glow: "from-[#fb72cc]/25 via-transparent to-transparent",
    borderHover: "hover:border-[#fb72cc]/60",
  },
  {
    stars: 5,
    quote:
      "Their automated lead-routing workflows and technical SEO gave us an unfair advantage. Our search rankings jumped to page 1 within 60 days of launching.",
    author: "Amit Patel",
    role: "Managing Director, PropTech India",
    glow: "from-[#1ab9a2]/25 via-transparent to-transparent",
    borderHover: "hover:border-[#1ab9a2]/60",
  },
];

const faqs = [
  {
    num: "01",
    numColor: "text-[#1ab9a2]",
    q: "Which service is right for my business?",
    a: "If you need a modern marketing website or redesign, our Website Development service is the best starting point. For high-intent product launches, our Landing Page sprints deliver in 1–2 weeks. To dominate Google and AI search, our Technical SEO & AEO drives organic demand, while our AI Automation eliminates hours of repetitive operational tasks. In our free 20-minute discovery call, we'll recommend the exact right plan for your goals.",
  },
  {
    num: "02",
    numColor: "text-[#fb72cc]",
    q: "Can you handle multiple services at once?",
    a: "Yes! In fact, most of our clients combine UI/UX Design, Website Development, and SEO into a single unified sprint. This guarantees consistent brand storytelling, zero communication silos, and seamless technical execution under one roof.",
  },
  {
    num: "03",
    numColor: "text-[#fea800]",
    q: "How long does it take to see results?",
    a: "Website development and custom landing pages are typically delivered in 2 to 4 weeks. AI automation workflows go live within 1 to 2 weeks, immediately saving operational hours. SEO and organic search optimizations compound over 60 to 90 days into sustainable, high-converting traffic.",
  },
  {
    num: "04",
    numColor: "text-[#1ab9a2]",
    q: "Do you work with startups, growing businesses, or enterprises?",
    a: "We work with ambitious businesses at every stage: early-stage founders launching their first MVP, growing D2C and B2B brands scaling their online presence, and established businesses seeking modern Next.js upgrades with zero bloated legacy tech.",
  },
  {
    num: "05",
    numColor: "text-[#fb72cc]",
    q: "What makes Value Tech Solution different?",
    a: "Senior engineers only — zero junior outsourcing or generic templates. We guarantee 95+ Google Lighthouse scores, provide transparent 100% fixed-price quotes with no surprise billing, and hand over complete source code ownership upon delivery.",
  },
];

export default function ServicesPageContent() {
  const [openFaq, setOpenFaq] = useState<string | null>("01");

  return (
    <div className="bg-[#141414] text-white min-h-screen font-montserrat antialiased selection:bg-[#fb72cc] selection:text-white">
      
      {/* 1. HERO BANNER - Exact GUD Agency Dark Atmosphere with Floating 3D Bubbles */}
      <section className="relative w-full pt-36 sm:pt-44 lg:pt-56 pb-24 sm:pb-28 lg:pb-36 overflow-hidden text-center bg-[#141414] md:bg-[url('/images/hero-banner.png')] bg-[url('/images/hero-mobile.jpg')] bg-no-repeat bg-[50%_90%] bg-cover">
        
        {/* Floating 3D Bubbles matching GUD Agency Screenshot */}
        {/* Big Teal Bubble (Top Left) */}
        <div className="absolute top-[14%] sm:top-[18%] left-[6%] sm:left-[10%] lg:left-[14%] w-[100px] sm:w-[140px] lg:w-[170px] h-[100px] sm:h-[140px] lg:h-[170px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#3af7d9_0%,#1ab9a2_55%,#0b5f53_100%)] shadow-[0_12px_45px_rgba(26,185,162,0.5)] pointer-events-none -z-10 animate-bounce [animation-duration:6s]" />

        {/* Big Pink/Magenta Bubble (Top Right) */}
        <div className="absolute top-[12%] sm:top-[15%] right-[5%] sm:right-[8%] lg:right-[12%] w-[110px] sm:w-[150px] lg:w-[190px] h-[110px] sm:h-[150px] lg:h-[190px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffb4e8_0%,#fb72cc_55%,#9e2175_100%)] shadow-[0_12px_45px_rgba(251,114,204,0.5)] pointer-events-none -z-10 animate-bounce [animation-duration:7s] [animation-delay:1s]" />

        {/* Medium Purple Bubble (Far Left) */}
        <div className="absolute top-[8%] sm:top-[12%] left-[1%] sm:left-[3%] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#e895ff_0%,#b24bf3_60%,#6918a0_100%)] shadow-[0_8px_30px_rgba(178,75,243,0.45)] pointer-events-none -z-10 animate-bounce [animation-duration:8s]" />

        {/* Small Amber/Gold Bubble (Left Mid) */}
        <div className="absolute top-[55%] left-[3%] sm:left-[5%] w-[32px] sm:w-[44px] h-[32px] sm:h-[44px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe48a_0%,#fea800_60%,#9c6400_100%)] shadow-[0_6px_22px_rgba(254,168,0,0.55)] pointer-events-none -z-10 animate-bounce [animation-duration:5s] [animation-delay:2s]" />

        {/* Small Amber/Gold Bubble (Right Mid) */}
        <div className="absolute top-[20%] right-[22%] sm:right-[25%] w-[26px] sm:w-[36px] h-[26px] sm:h-[36px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe48a_0%,#fea800_60%,#9c6400_100%)] shadow-[0_6px_20px_rgba(254,168,0,0.55)] pointer-events-none -z-10 animate-bounce [animation-duration:4.5s]" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Huge Uppercase Heading */}
          <h1 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.03em] uppercase text-white leading-[1.0] mb-6">
            Our Services
          </h1>

          {/* Subheading */}
          <p className="font-medium text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-service digital solutions designed to help your brand{" "}
            <span className="text-[#1ab9a2] font-semibold">launch</span>,{" "}
            <span className="text-[#fb72cc] font-semibold">grow</span>, and{" "}
            <span className="text-[#fea800] font-semibold">win</span>.
          </p>

          {/* Two CTA Buttons matching GUD Agency */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#141414] border-2 border-white/30 hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md"
            >
              Start a Project
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#fb72cc] hover:bg-[#ff5bbd] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(251,114,204,0.4)]"
            >
              Book a Call
            </Link>
          </div>

        </div>
      </section>

      {/* 2. "WHAT OUR DIGITAL AGENCY DOES" - Exact 3x4 Grid (12 Cards) */}
      <section className="py-20 sm:py-28 lg:py-32 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading with Decorative Line */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] uppercase text-white leading-tight">
              What Our Web & Digital Agency Does
            </h2>
            
            {/* Centered Accent Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#1ab9a2] via-[#fb72cc] to-[#fea800] mx-auto mt-5 mb-6 rounded-full" />

            <p className="text-sm sm:text-base md:text-lg text-white/70 font-normal leading-relaxed">
              We craft bold brands, build high-performance websites, and launch campaigns that drive real results. Design, strategy, and execution, all done with excellence.
            </p>
          </div>

          {/* The 12-Card Grid (3 Columns x 4 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesGrid.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group block h-full focus:outline-none"
                >
                  <div className="h-full bg-[#191919]/70 hover:bg-[#1f1f1f] border border-white/20 hover:border-white/50 backdrop-blur-md rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    
                    <div>
                      {/* Top Row: Squircle Vibrant Icon Badge */}
                      <div className={`w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-[14px] ${item.badgeBg} flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                        <img src={item.icon} alt={item.title} className="w-7 h-7" />
                      </div>

                      {/* Card Title - Uppercase Bold Montserrat */}
                      <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mb-3 group-hover:text-[#1ab9a2] transition-colors">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Link with Arrow */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-1.5">
                      <span className={`${item.textColor} font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1`}>
                        <span>Explore More</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. "WHY CHOOSE US" - Exact 4 Cards with Accent Borders */}
      <section className="py-20 sm:py-28 relative border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] uppercase text-white leading-tight">
              Why Choose Us
            </h2>
            
            {/* Cursive Handwriting Flourish matching GUD Agency */}
            <p className="font-serif italic text-lg sm:text-xl text-[#1ab9a2] mt-2 mb-4">
              All in one place. Growth partner.
            </p>

            <p className="text-sm sm:text-base text-white/70">
              We're not just another agency — we're your dedicated engineering and growth team.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((col, idx) => {
              const PillarIcon = col.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#191919]/60 border border-white/20 ${col.accentGlow} rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div>
                    {/* Top Icon with colored border */}
                    <div className={`w-12 h-12 rounded-xl border-2 ${col.color} bg-black/40 flex items-center justify-center mb-5`}>
                      <PillarIcon className="w-6 h-6" />
                    </div>

                    <h3 className="font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-3">
                      {col.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {col.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. "YOU'RE IN GREAT COMPANY" - Exact 3 Glowing atmospheric cards */}
      <section className="py-20 sm:py-28 relative bg-[#0e0e0e] border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] uppercase text-white leading-tight">
              You're in Great Company
            </h2>
            
            {/* Glowing horizontal line */}
            <div className="w-36 h-1 bg-[#1ab9a2] shadow-[0_0_20px_#1ab9a2] mx-auto mt-4 mb-5 rounded-full" />

            <p className="text-sm sm:text-base text-white/70">
              Real words from real clients. See why modern brands trust Value Tech.
            </p>
          </div>

          {/* 3 Atmospheric Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`relative bg-[#161616] border border-white/20 ${t.borderHover} rounded-[26px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-xl group`}
              >
                {/* Atmospheric colored top/bottom glow */}
                <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${t.glow} rounded-full blur-3xl pointer-events-none`} />

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#fea800] mb-5">
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <p className="font-black text-sm uppercase text-white tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#1ab9a2] font-semibold mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. "FREQUENTLY ASKED QUESTIONS" - Clean Numbered Accordion */}
      <section className="py-20 sm:py-28 relative border-t border-white/10">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] uppercase text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#fb72cc] mt-2 mb-3">
              Clear answers to common questions
            </p>
            <p className="text-sm text-white/60">
              Everything you need to know about our services, process, and deliverables.
            </p>
          </div>

          {/* Accordion Rows */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.num;
              return (
                <div key={faq.num} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.num)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className={`font-black text-base sm:text-lg ${faq.numColor}`}>
                        {faq.num}
                      </span>
                      <span className="font-bold text-base sm:text-lg text-white group-hover:text-[#1ab9a2] transition-colors tracking-tight">
                        {faq.q}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-white text-black border-white" : "text-white/60"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 text-sm sm:text-base text-white/70 font-normal leading-relaxed pl-10 sm:pl-12">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA - Exact GUD Agency Iconic Pink Arch Banner */}
      <section className="pt-16 sm:pt-20 pb-0 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#fb72cc] rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[140px] px-6 sm:px-12 lg:px-16 py-16 sm:py-24 text-center text-[#141414] relative overflow-hidden shadow-[0_-20px_50px_rgba(251,114,204,0.3)]">
            
            {/* Subtle decorative script */}
            <div className="inline-flex items-center gap-2 bg-black/10 border border-black/10 px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#141414]">
                Start Your Next Digital Sprint
              </span>
            </div>

            {/* Giant Bold Headline */}
            <h2 className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] uppercase text-[#141414] leading-[1.0] max-w-4xl mx-auto mb-6">
              Let's Build Something Great Together
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#141414]/85 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to take your online presence and conversion rates to the next level? Get in touch and let's craft something exceptional.
            </p>

            {/* Dark Pill CTA Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full bg-[#141414] hover:bg-black text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#1ab9a2]" />
              </Link>
            </div>

            <p className="text-xs text-[#141414]/70 font-semibold mt-8 uppercase tracking-widest">
              Direct: +91 88106 50579 · admin@valuetechsolution.com
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}
