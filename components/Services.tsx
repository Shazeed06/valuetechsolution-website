"use client";

import Link from "next/link";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Search, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight, 
  TrendingUp,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Custom Next.js & React websites built with clean architecture, blazing load times, and top-tier responsiveness across all screens.",
    icon: Code2,
    badgeColor: "text-primary bg-primary/10",
    accent: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(26,185,162,0.15)]",
    tag: "Next.js · React · TypeScript",
  },
  {
    id: "02",
    title: "UI/UX & Product Design",
    desc: "High-converting visual designs created in Figma with comprehensive design systems, interactive prototypes, and modern aesthetics.",
    icon: Palette,
    badgeColor: "text-secondary bg-secondary/10",
    accent: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(251,114,204,0.15)]",
    tag: "Figma · Design Systems · Wireframes",
  },
  {
    id: "03",
    title: "High-Converting Landing Pages",
    desc: "Laser-focused landing pages engineered for paid ad campaigns, SaaS signups, and lead generation with persuasive conversion psychology.",
    icon: Rocket,
    badgeColor: "text-tertiary bg-tertiary/10",
    accent: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(254,168,0,0.15)]",
    tag: "A/B Tested · CRO · Fast Sprints",
  },
  {
    id: "04",
    title: "Technical SEO & Speed",
    desc: "Built-in structured data, clean schema markup, 98+ Core Web Vitals, and semantic HTML that search engines love to index and rank.",
    icon: Search,
    badgeColor: "text-primary bg-primary/10",
    accent: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(26,185,162,0.15)]",
    tag: "Lighthouse 98+ · Schema · Indexing",
  },
  {
    id: "05",
    title: "Custom Web Applications",
    desc: "Full-stack portals, internal dashboards, and customer portals integrating secure REST/GraphQL APIs, databases, and authentication.",
    icon: Layers,
    badgeColor: "text-secondary bg-secondary/10",
    accent: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(251,114,204,0.15)]",
    tag: "Full-Stack · Auth · APIs",
  },
  {
    id: "06",
    title: "Ongoing Maintenance & Care",
    desc: "Continuous updates, performance monitoring, monthly speed tune-ups, and dedicated engineering support as your business scales.",
    icon: ShieldCheck,
    badgeColor: "text-tertiary bg-tertiary/10",
    accent: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(254,168,0,0.15)]",
    tag: "24/7 Monitoring · Updates · SLA",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Services
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            How we can help you <span className="font-sourceSerif italic font-normal text-primary">grow</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium">
            From initial concept to full-scale deployment, we build websites that give your brand a lasting competitive edge.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`bg-white rounded-3xl p-8 border border-[#ece9e1] transition-all duration-300 flex flex-col justify-between group ${s.accent}`}
              >
                <div>
                  {/* Card Top: Icon & Number Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${s.badgeColor}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#7d7b77]/60 font-montserrat">
                      {s.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-montserrat font-bold text-xl text-[#141414] mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#7d7b77] leading-relaxed font-medium mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Card Tag & Link */}
                <div className="pt-4 border-t border-[#ece9e1] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#7d7b77]/80 bg-[#f7f2ea] px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-black transition-colors"
                    aria-label={`Inquire about ${s.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner: "Make your business always growing" */}
        <div className="relative bg-[#f7f2ea] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-[#d8d3ce] overflow-hidden">
          
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#d8d3ce] text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Why It Works</span>
              </div>
              <h3 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-tight mb-4">
                Make your business <span className="font-sourceSerif italic font-normal text-primary">always growing</span>
              </h3>
              <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed max-w-2xl mb-6">
                Most agencies build a website, hand off messy code, and disappear. We operate as your dedicated web engineering team — continuously optimizing page speeds, enhancing UI conversions, and implementing new features as your business scales.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#141414]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Direct Senior Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Iterative Fast Releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#ece9e1] max-w-sm w-full text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="font-montserrat font-black text-3xl text-[#141414] mb-1">
                  3.2x
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Average Conversion Lift
                </div>
                <p className="text-xs text-[#7d7b77] leading-relaxed mb-5">
                  Clients switching from legacy CMS or templates to our Next.js architecture experience instant speed and engagement gains.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black py-3 rounded-full text-xs font-semibold transition-all"
                >
                  <span>See How It Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
