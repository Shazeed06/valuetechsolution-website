"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Verve FinTech Platform",
    category: "Full-Stack Web App",
    description: "Ultra-fast marketing site and customer portal with real-time investment analytics and bank-grade security.",
    tags: ["Next.js 16", "TypeScript", "Tailwind", "REST API"],
    metric: "+210% User Signups",
    gradient: "from-[#1ab9a2]/30 via-[#191919] to-[#141414]",
    accent: "text-primary",
  },
  {
    id: 2,
    title: "Aura Luxury E-Commerce",
    category: "High-Converting Store",
    description: "Custom headless storefront with 0.3s page transitions, dynamic currency conversion, and 99 Mobile Lighthouse score.",
    tags: ["Next.js", "Shopify Storefront", "Stripe", "Framer"],
    metric: "0.3s Load Time",
    gradient: "from-[#fb72cc]/25 via-[#191919] to-[#141414]",
    accent: "text-secondary",
  },
  {
    id: 3,
    title: "Nova AI Studio Agency",
    category: "Bespoke Portfolio",
    description: "Interactive brand agency website featuring 3D canvas animations, CMS-driven blog, and automated lead capture.",
    tags: ["React", "WebGL", "Sanity CMS", "SEO Suite"],
    metric: "99 Lighthouse Score",
    gradient: "from-[#fea800]/25 via-[#191919] to-[#141414]",
    accent: "text-tertiary",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-[#141414] text-white rounded-t-[50px] sm:rounded-t-[70px] overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Featured Work
              </span>
            </div>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-white leading-tight">
              Crafted with passion,<br />
              <span className="font-sourceSerif italic font-normal text-primary">built for impact.</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded-full transition-all duration-300 self-start md:self-end"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-[#191919] rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div>
                {/* Browser-like Mockup Preview Header */}
                <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden relative mb-6 border border-white/10 bg-[#0d0d0d] flex flex-col justify-between p-4">
                  {/* Browser chrome bar */}
                  <div className="flex items-center justify-between w-full border-b border-white/10 pb-2.5 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <span className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">case-study-0{p.id}.com</span>
                    <ExternalLink className="w-3 h-3 text-white/40" />
                  </div>

                  {/* Gradient Screen Mockup Interior */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Center mockup card details */}
                  <div className="relative z-10 my-auto text-left">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${p.accent}`}>
                      {p.category}
                    </span>
                    <h4 className="font-montserrat font-bold text-lg sm:text-xl text-white mt-1 group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                  </div>

                  {/* Highlight pill */}
                  <div className="relative z-10 flex justify-between items-center pt-2">
                    <span className="text-[11px] font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {p.metric}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">
                  {p.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-white transition-colors"
                >
                  <span>Case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
