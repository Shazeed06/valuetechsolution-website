"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Bot,
  Search,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  BarChart3,
  Globe,
  Zap,
  Star,
  Check,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase
} from "lucide-react";

type Category = "all" | "web" | "design" | "ai" | "growth";

interface ServiceCard {
  id: string;
  category: Category;
  title: string;
  tag: string;
  summary: string;
  deliverables: string[];
  stack: string[];
  price: string;
  timeline: string;
  href: string;
  accentColor: string; // "primary" | "secondary" | "tertiary"
  icon: any;
}

const servicesData: ServiceCard[] = [
  {
    id: "01",
    category: "web",
    title: "Custom Web Development",
    tag: "Next.js · React · TypeScript",
    summary:
      "Lightning-fast, search-optimized websites built with Next.js App Router, Tailwind CSS, and edge caching for unbeatable speed and conversions.",
    deliverables: [
      "Custom Next.js 16 & TypeScript build",
      "98+ Google Lighthouse score guarantee",
      "Headless CMS integration (Sanity / Strapi / MDX)",
      "Responsive design for mobile, tablet & desktop",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    price: "from ₹40,000 / $500",
    timeline: "2–4 weeks",
    href: "/services/web-development",
    accentColor: "primary",
    icon: Code2,
  },
  {
    id: "02",
    category: "design",
    title: "UI/UX & Brand Design Systems",
    tag: "Figma · Design Tokens · Prototyping",
    summary:
      "Distinctive, conversion-first digital identities from scratch: full Figma design systems, responsive typography, and high-fidelity clickable prototypes.",
    deliverables: [
      "Bespoke Figma component design system",
      "Wireframing & user experience journey mapping",
      "Interactive prototypes with micro-interactions",
      "Production-ready design tokens & style guide",
    ],
    stack: ["Figma", "Design Tokens", "Micro-Interactions", "Wireframes"],
    price: "from ₹35,000 / $450",
    timeline: "2–3 weeks",
    href: "/services/design-systems",
    accentColor: "secondary",
    icon: Palette,
  },
  {
    id: "03",
    category: "ai",
    title: "AI Automation & Workflows",
    tag: "n8n · Python · AI Agents",
    summary:
      "Automate repetitive manual operations with autonomous AI agents, lead-qualification bots, CRM routing, and custom Python/n8n pipelines.",
    deliverables: [
      "Autonomous AI triage & lead routing agents",
      "n8n / Zapier / Make custom workflow pipelines",
      "CRM & database sync (HubSpot, GoHighLevel, Slack)",
      "Automated WhatsApp & email sequence bots",
    ],
    stack: ["n8n", "Python", "Claude 3.5", "OpenAI", "GoHighLevel"],
    price: "from ₹30,000 / $400",
    timeline: "1–3 weeks",
    href: "/services/ai-automation",
    accentColor: "tertiary",
    icon: Bot,
  },
  {
    id: "04",
    category: "growth",
    title: "Technical SEO & AEO Optimization",
    tag: "Core Web Vitals · AI Search · Schema",
    summary:
      "Rank high on Google search and get cited by AI answer engines (ChatGPT, Perplexity, Gemini) with deep technical schema and performance tuning.",
    deliverables: [
      "Full technical crawl & indexation audit",
      "Complete JSON-LD structured schema.org markup",
      "Core Web Vitals (LCP, INP, CLS) optimization",
      "AEO (AI Engine Optimization) search citations",
    ],
    stack: ["Google Search Console", "Schema.org", "Lighthouse", "Semrush"],
    price: "from ₹25,000 / mo",
    timeline: "Ongoing Sprint",
    href: "/services/seo",
    accentColor: "primary",
    icon: Search,
  },
  {
    id: "05",
    category: "web",
    title: "High-Converting Landing Pages",
    tag: "CRO · Ad Funnels · Speed",
    summary:
      "Laser-focused single and multi-page landing sites designed specifically for paid ads, SaaS launches, and high conversion capture.",
    deliverables: [
      "Conversion-engineered copywriting & visual hierarchy",
      "Interactive lead capture forms & direct WhatsApp link",
      "Meta Pixel, Google Tag Manager & analytics integration",
      "Sub-second load times on 4G/5G mobile connections",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "GTM"],
    price: "from ₹25,000 / $300",
    timeline: "1–2 weeks",
    href: "/services/starter-website",
    accentColor: "secondary",
    icon: Rocket,
  },
  {
    id: "06",
    category: "web",
    title: "Custom Web Applications & SaaS",
    tag: "Full-Stack · Portals · Dashboards",
    summary:
      "Interactive client portals, admin dashboards, and custom software tailored to your specific business logic with enterprise security.",
    deliverables: [
      "Secure authentication & role-based permissions",
      "REST & GraphQL API design & backend connections",
      "PostgreSQL / Supabase relational database architecture",
      "Real-time reactive state management & dashboards",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "REST API"],
    price: "from ₹75,000 / $950",
    timeline: "3–6 weeks",
    href: "/services/web-development",
    accentColor: "tertiary",
    icon: Layers,
  },
];

const industries = [
  {
    icon: Rocket,
    name: "Tech Startups & SaaS",
    description: "Launch MVPs and high-performance product landing pages that validate ideas and convert trial users.",
    tag: "Product Sites · SaaS Dashboards",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & D2C",
    description: "Headless storefronts and custom e-commerce experiences engineered for speed and maximized checkout rates.",
    tag: "Headless Next.js · Shopify APIs",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Clinics",
    description: "Trust-building websites with appointment booking, local SEO, and fast patient inquiry flows.",
    tag: "Local SEO · Booking Funnels",
  },
  {
    icon: Briefcase,
    name: "Financial & Professional",
    description: "Sophisticated corporate digital presence that conveys credibility, compliance, and authority.",
    tag: "Enterprise Design · Lead Routing",
  },
];

const whyChoosePillars = [
  {
    n: "01",
    title: "Full-Service Solutions",
    description:
      "From strategy and bespoke Figma UI design to Next.js engineering and SEO — we handle every single step under one roof so you never deal with fragmented freelancers.",
    color: "primary",
  },
  {
    n: "02",
    title: "Senior Engineers Only",
    description:
      "No junior devs or account manager middlemen. You communicate directly with senior developers and founders who understand technical architecture and commercial goals.",
    color: "secondary",
  },
  {
    n: "03",
    title: "98+ Speed & Lighthouse Guarantee",
    description:
      "Every single website we build is guaranteed to score 95+ on Google Lighthouse with sub-second load times and perfect Core Web Vitals that rank higher and convert more.",
    color: "tertiary",
  },
  {
    n: "04",
    title: "100% Fixed-Price & Code Ownership",
    description:
      "Transparent itemized scopes with zero surprise hourly bills. Upon launch, 100% of your source code, design assets, and intellectual property is transferred directly to you.",
    color: "primary",
  },
];

const faqs = [
  {
    id: "01",
    q: "Which service is right for my business?",
    a: "If you need a primary marketing website or want to replace an outdated site, our Custom Web Development service is the best fit. If you are launching a product or running paid ad campaigns, a High-Converting Landing Page is ideal. If you are losing hours to manual data entry and lead follow-ups, our AI Automation will transform your operations. During our free 20-minute discovery call, we'll recommend the exact right roadmap.",
  },
  {
    id: "02",
    q: "Can you handle both UI/UX design and development together?",
    a: "Yes, in fact 90% of our clients hire us for complete end-to-end delivery. We design the entire visual experience in Figma first (with your feedback at every iteration), and once approved, our senior engineers code it pixel-perfectly into clean, modern Next.js and TypeScript.",
  },
  {
    id: "03",
    q: "How fast can you deliver our project?",
    a: "Most marketing websites and landing pages are completed within 2 to 4 weeks. Smaller landing page sprints take 7–10 days, while complex full-stack web applications typically range from 4 to 6 weeks. We establish a fixed delivery date before kickoff and stick to it.",
  },
  {
    id: "04",
    q: "What tech stack do you work with?",
    a: "We build exclusively on modern, industry-standard technologies: Next.js (App Router), React, TypeScript, Tailwind CSS, Vercel for edge hosting, and PostgreSQL/Supabase for databases. For automations, we use n8n, Python, OpenAI, and Claude. We avoid slow, bloated legacy website builders so your site remains fast and maintainable.",
  },
  {
    id: "05",
    q: "Are there any hidden costs or surprise fees?",
    a: "None. We operate on 100% fixed-price quotes with clearly written milestones and deliverables agreed upon before work begins. You will never receive an unexpected invoice or hourly surcharge.",
  },
  {
    id: "06",
    q: "What post-launch support and warranty do you provide?",
    a: "Every project includes a 30-day post-launch warranty where we fix any bugs or edge cases completely free of charge. We also provide optional monthly ongoing maintenance retainers covering security updates, continuous speed checks, uptime monitoring, and priority feature requests.",
  },
];

export default function ServicesPageContent() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [openFaq, setOpenFaq] = useState<string | null>("01");

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      
      {/* 1. HERO SECTION - GUD Agency Style */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-[#d8d3ce]">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
              Full-Service Digital & Web Studio
            </span>
          </div>

          {/* Large Display Heading matching GUD Agency */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.04em] text-[#141414] leading-[0.98] mb-6 max-w-5xl">
            Our Services
          </h1>

          <p className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-[#141414] tracking-tight leading-snug max-w-3xl mb-4">
            Full-service digital solutions designed to help your brand{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              launch, grow, and win.
            </span>
          </p>

          <p className="text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed max-w-2xl mb-10">
            We craft bold brands, build high-performance Next.js websites, and engineer intelligent automations that drive real revenue — senior-led and fixed-price.
          </p>

          {/* Value Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#d8d3ce]">
            {[
              { n: "50+", l: "Websites Launched", c: "text-primary" },
              { n: "98+", l: "Avg. Lighthouse Score", c: "text-secondary" },
              { n: "2–4 wk", l: "Average Delivery", c: "text-tertiary" },
              { n: "100%", l: "Fixed-Price Quotes", c: "text-[#141414]" },
            ].map((stat) => (
              <div key={stat.l} className="bg-white/60 border border-[#d8d3ce]/80 rounded-2xl p-4 shadow-xs">
                <p className={`font-montserrat font-black text-2xl sm:text-3xl ${stat.c}`}>
                  {stat.n}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7d7b77] mt-1">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CORE SERVICES SECTION WITH INTERACTIVE TABS */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block px-3.5 py-1 bg-[#f7f2ea] border border-[#d8d3ce] rounded-full mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  What We Build
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#141414]">
                Services engineered for <span className="font-sourceSerif italic font-normal text-primary">results</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#7d7b77] max-w-md font-medium">
              Explore our core capabilities. Every project is scoped with transparent pricing and delivered by senior engineers.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-[#d8d3ce]/60">
            {[
              { id: "all", label: "All Services" },
              { id: "web", label: "Web & Frontend" },
              { id: "design", label: "UI/UX & Design" },
              { id: "ai", label: "AI & Automation" },
              { id: "growth", label: "SEO & Performance" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Category)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#141414] text-white shadow-sm"
                      : "bg-white text-[#7d7b77] border border-[#d8d3ce] hover:border-[#141414] hover:text-[#141414]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* GUD Agency Style Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const isPrimary = service.accentColor === "primary";
              const isSecondary = service.accentColor === "secondary";
              const badgeBg = isPrimary
                ? "bg-primary/10 text-primary border-primary/20"
                : isSecondary
                ? "bg-secondary/10 text-secondary border-secondary/20"
                : "bg-tertiary/10 text-tertiary border-tertiary/20";

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-[28px] p-7 sm:p-8 border border-[#d8d3ce] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#141414]/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Top Bar: Number Badge + Icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${badgeBg} transition-transform group-hover:scale-105 duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-montserrat font-black text-sm tracking-tight text-[#7d7b77]/40 group-hover:text-[#141414] transition-colors">
                        {service.id}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#7d7b77] mb-2">
                      {service.tag}
                    </p>

                    {/* Title */}
                    <h3 className="font-montserrat font-bold text-2xl text-[#141414] tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Price & Timeline Strip */}
                    <div className="flex items-center gap-3 py-2 px-3 bg-[#f7f2ea] rounded-xl border border-[#d8d3ce]/60 text-xs font-semibold text-[#141414] mb-5">
                      <span className="text-primary font-bold">{service.price}</span>
                      <span className="text-[#7d7b77]">·</span>
                      <span className="text-[#7d7b77]">{service.timeline}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#7d7b77] font-medium leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#141414]/70">
                        What's Included:
                      </p>
                      {service.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-[#141414]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & CTA */}
                  <div className="pt-5 border-t border-[#ece9e1]">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2 py-0.5 bg-[#f7f2ea] text-[#7d7b77] rounded-md border border-[#d8d3ce]/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-between w-full bg-[#141414] text-white hover:bg-primary hover:text-white px-5 py-3 rounded-full text-xs font-bold transition-all duration-300"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS SECTION - Matching GUD Agency's Niche Verticals */}
      <section className="py-20 bg-[#f7f2ea] border-y border-[#d8d3ce]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3.5 py-1 bg-white border border-[#d8d3ce] rounded-full mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Tailored Solutions
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#141414]">
              Solutions built for your <span className="font-sourceSerif italic font-normal text-primary">industry</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#7d7b77] font-medium">
              We understand the unique conversion funnels, buyer expectations, and technical demands of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 border border-[#d8d3ce] flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <IndIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-[#141414] mb-2 tracking-tight">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#7d7b77] font-medium leading-relaxed mb-4">
                      {ind.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#ece9e1]">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {ind.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US - 4 Pillars matching GUD Agency */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Sticky Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-block px-3.5 py-1 bg-[#f7f2ea] border border-[#d8d3ce] rounded-full mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#141414] leading-[1.08] mb-6">
                We're not just another agency — we're your{" "}
                <span className="font-sourceSerif italic font-normal text-primary">
                  growth partner.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed mb-8">
                From technical scoping to post-launch optimization, we engineer every website with senior precision so your brand stands out and converts visitors into loyal clients.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#141414] text-white hover:bg-primary hover:text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-white" />
              </Link>
            </div>

            {/* Right 4 Pillars Column */}
            <div className="lg:col-span-7 space-y-6">
              {whyChoosePillars.map((pillar) => (
                <div
                  key={pillar.n}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#d8d3ce] hover:border-[#141414]/30 hover:shadow-md transition-all duration-300 flex items-start gap-6"
                >
                  <span className="font-montserrat font-black text-3xl sm:text-4xl text-primary/40 shrink-0">
                    {pillar.n}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#141414] tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. YOU'RE IN GREAT COMPANY - Dark #141414 Section matching GUD Agency */}
      <section className="py-20 sm:py-24 bg-[#141414] text-white relative overflow-hidden">
        {/* Glow Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 bg-white/10 border border-white/10 rounded-full mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Client Proof & Results
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-white">
              You're in <span className="font-sourceSerif italic font-normal text-primary">great company</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70 font-medium">
              Real results from modern founders. See why growing brands trust Value Tech Solution.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                quote:
                  "Value Tech delivered our custom Next.js website in 3 weeks flat. The Lighthouse score was 99 across the board, and our inbound leads doubled in month one.",
                author: "Vikram Mehta",
                role: "Founder, SaaSFlow",
                rating: 5,
              },
              {
                quote:
                  "Working with Value Tech felt like having a senior in-house CTO. Transparent pricing, zero bullshit, and a design that blew our investors away.",
                author: "Elena Rostova",
                role: "CEO, Nexa Logistics",
                rating: 5,
              },
              {
                quote:
                  "Their AI automation workflows cut our customer lead response time from 3 hours to 30 seconds. The best technical investment we made this year.",
                author: "Rohit Agarwal",
                role: "Co-Founder, PropTech Global",
                rating: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-[#191919] border border-white/10 rounded-3xl p-7 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex gap-1 text-tertiary mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-montserrat font-bold text-sm text-white">{t.author}</p>
                  <p className="text-xs text-primary font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Big Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
            {[
              { num: "50+", label: "Websites Shipped" },
              { num: "98+", label: "Avg Lighthouse Speed" },
              { num: "4 wk", label: "Max Sprint Delivery" },
              { num: "100%", label: "Code Ownership Given" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-1">
                  {stat.num}
                </p>
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS - GUD Agency Style Accordion */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-block px-3.5 py-1 bg-[#f7f2ea] border border-[#d8d3ce] rounded-full mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Got Questions?
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#141414]">
              Frequently Asked <span className="font-sourceSerif italic font-normal text-primary">Questions</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#7d7b77] font-medium">
              Everything you need to know about our services, pricing, timelines, and deliverables.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#d8d3ce] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f7f2ea]/40 transition-colors"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-montserrat font-bold text-xs sm:text-sm text-primary">
                        {faq.id}
                      </span>
                      <span className="font-montserrat font-bold text-base sm:text-lg text-[#141414] tracking-tight">
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-[#d8d3ce] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#141414] text-white border-[#141414]" : "text-[#7d7b77]"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#ece9e1] text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed pl-14 sm:pl-16">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. HIGH-CONVERSION CTA BANNER - GUD Agency Style */}
      <section className="py-20 sm:py-24 bg-[#141414] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Ready to elevate your online presence?
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.05] mb-6">
            Let's Build Something{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              Great Together
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 font-medium">
            Book a free 20-minute discovery call with our founders. We'll scope your project, evaluate your technical needs, and quote a fixed price.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#159a86] text-white px-8 py-4 rounded-full font-bold text-sm tracking-tight transition-all shadow-lg active:scale-95"
            >
              <span>Book a Free Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <a
              href="mailto:admin@valuetechsolution.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>admin@valuetechsolution.com</span>
            </a>
          </div>

          <p className="text-xs text-white/50 font-medium">
            Direct phone: +91 88106 50579 · WhatsApp available · Zero sales pressure
          </p>

        </div>
      </section>

    </div>
  );
}
