"use client";

import Link from "next/link";
import { ArrowUpRight, Star, Sparkles, CheckCircle2 } from "lucide-react";

const clientLogos = [
  { name: "Techstars", label: "techstars" },
  { name: "Y Combinator", label: "Y Combinator" },
  { name: "TechCrunch", label: "TechCrunch" },
  { name: "NETFLIX", label: "NETFLIX" },
  { name: "Forbes", label: "Forbes" },
  { name: "Sequoia", label: "SEQUOIA" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#efebe5] text-[#141414] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1ab9a2]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-[#fb72cc]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
                Website Development
              </span>
            </div>

            {/* Massive Heading: "Websites done right" */}
            <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.96] tracking-[-0.04em] text-[#141414] mb-6">
              Websites<br />
              done <span className="font-sourceSerif italic font-normal text-primary">right</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-[#7d7b77] leading-relaxed mb-8 font-medium">
              We&apos;re a website development studio crafting high-performance websites for startups and ambitious brands — beautifully designed, ultra-fast, and engineered to turn visitors into paying customers.
            </p>

            {/* CTA Button + Review row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 w-full">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </Link>

              {/* Rating Trust Badge */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-primary to-teal-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    RM
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-secondary to-pink-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    SK
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-tertiary to-amber-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    AP
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#fea800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-[#141414] ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-[#7d7b77] font-medium">
                    from 50+ founders &amp; tech leaders
                  </p>
                </div>
              </div>
            </div>

            {/* Quick value bullets */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#7d7b77] font-medium pt-2 border-t border-[#d8d3ce]/60 w-full">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 2-4 Week Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 98+ Google Lighthouse
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Fixed, Transparent Pricing
              </span>
            </div>

          </div>

          {/* Right Column: Mobile Device Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Floating pill badge 01 */}
            <div className="absolute -top-4 -right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-[#ece9e1] flex items-center gap-3 animate-float-slow">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                ⚡ 99
              </div>
              <div className="text-left pr-2">
                <div className="text-xs font-bold text-[#141414]">Lighthouse Speed</div>
                <div className="text-[10px] text-[#7d7b77]">Core Web Vitals Pass</div>
              </div>
            </div>

            {/* Smartphone Container Mockup */}
            <div className="relative w-[280px] sm:w-[310px] h-[540px] sm:h-[590px] bg-[#141414] rounded-[48px] p-3 shadow-2xl border-[6px] border-[#222222] ring-1 ring-black/20 overflow-hidden flex flex-col">
              
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

              {/* Inner Screen Preview */}
              <div className="relative w-full h-full bg-[#191919] rounded-[40px] overflow-hidden p-4 pt-10 text-white flex flex-col justify-between">
                
                {/* Mini App Header */}
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="text-[11px] font-bold tracking-tight">valuetech.app</span>
                  </div>
                  <span className="text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>

                {/* Simulated Screen Content */}
                <div className="space-y-4 my-auto">
                  <div className="text-left">
                    <span className="text-[10px] text-primary uppercase tracking-widest font-semibold">Web Studio</span>
                    <h3 className="font-montserrat font-bold text-xl sm:text-2xl tracking-tight leading-tight mt-1 text-white">
                      Modern web engineering.
                    </h3>
                    <p className="text-[11px] text-white/60 mt-1">
                      Designed for peak conversions and SEO dominance.
                    </p>
                  </div>

                  {/* Interactive metric cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <div className="text-primary font-black text-lg">+142%</div>
                      <div className="text-[10px] text-white/50">Organic Traffic</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <div className="text-secondary font-black text-lg">0.4s</div>
                      <div className="text-[10px] text-white/50">Load Time</div>
                    </div>
                  </div>

                  {/* Visual UI Graphic */}
                  <div className="bg-gradient-to-br from-primary/20 via-black to-secondary/10 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-white">Next.js 16 + Tailwind</div>
                      <div className="text-[9px] text-white/50">Production Ready Build</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-black">
                      ✓
                    </div>
                  </div>
                </div>

                {/* Action footer inside phone */}
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                  <span>SSL Certified</span>
                  <span className="text-primary font-semibold">Built to Scale →</span>
                </div>

              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -bottom-3 -left-3 sm:left-4 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-[#ece9e1] flex items-center gap-2.5 animate-bounce-simple">
              <Sparkles className="w-5 h-5 text-tertiary" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#141414]">Conversion First</div>
                <div className="text-[10px] text-[#7d7b77]">UX Engineered to Sell</div>
              </div>
            </div>

          </div>

        </div>

        {/* Client Logo Strip */}
        <div className="mt-20 pt-10 border-t border-[#d8d3ce]/60">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-65 hover:opacity-100 transition-opacity">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="font-montserrat font-bold text-lg sm:text-xl tracking-tight text-[#141414]/70 hover:text-[#141414] transition-colors cursor-default"
              >
                {logo.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
