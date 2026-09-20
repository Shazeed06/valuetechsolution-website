"use client";

import Link from "next/link";
import { ArrowUpRight, Star, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

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

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
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
                  <div className="text-[11px] text-[#7d7b77] font-medium mt-0.5">
                    Clutch & Google Verified Reviews
                  </div>
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

          {/* Right Column: Clean Phone Device Showcase with Non-overlapping Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-6">
            
            {/* Outer Container with ample margin so badges don't collide */}
            <div className="relative">

              {/* Floating Badge 01: Top Right - positioned clearly outside the phone frame */}
              <div className="absolute -top-3 -right-2 sm:-right-8 lg:-right-8 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#ece9e1] flex items-center gap-3 transition-transform hover:scale-105 duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  <Zap className="w-4 h-4 fill-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                    <span>99 Lighthouse</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Core Web Vitals Pass</div>
                </div>
              </div>

              {/* Floating Badge 02: Bottom Left - positioned comfortably above section bottom */}
              <div className="absolute bottom-10 -left-2 sm:-left-8 lg:-left-10 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#ece9e1] flex items-center gap-3 transition-transform hover:scale-105 duration-300">
                <div className="w-9 h-9 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 fill-tertiary" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414]">Conversion First</div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Engineered to Convert</div>
                </div>
              </div>

              {/* Apple Device Frame with clean white bezel matching GUD aesthetic */}
              <div className="relative w-[290px] sm:w-[320px] md:w-[330px] h-[570px] sm:h-[610px] bg-[#141414] rounded-[48px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] border-[8px] border-white overflow-hidden flex flex-col">
                
                {/* Dynamic Island Speaker / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                </div>

                {/* Inner Screen Viewport */}
                <div className="relative w-full h-full bg-[#161616] rounded-[38px] overflow-hidden p-4 pt-9 text-white flex flex-col justify-between">
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-semibold text-white/80 tracking-tight">
                        valuetechsolution.com
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                      LIVE
                    </span>
                  </div>

                  {/* Body Content - Spacious with zero cutoffs */}
                  <div className="flex flex-col gap-3.5 my-auto">
                    
                    {/* Header snippet */}
                    <div className="text-left">
                      <div className="inline-block text-[9px] font-bold uppercase tracking-wider text-primary mb-1">
                        Web Engineering Studio
                      </div>
                      <h3 className="font-montserrat font-bold text-xl leading-tight text-white tracking-tight">
                        Websites built for scale.
                      </h3>
                      <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                        High-performance Next.js architecture with instant load speeds.
                      </p>
                    </div>

                    {/* Dual Metrics */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-left">
                        <div className="text-primary font-montserrat font-black text-xl leading-none mb-1">
                          +142%
                        </div>
                        <div className="text-[10px] text-white/60 font-medium">
                          Organic Traffic
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-left">
                        <div className="text-secondary font-montserrat font-black text-xl leading-none mb-1">
                          0.4s
                        </div>
                        <div className="text-[10px] text-white/60 font-medium">
                          Page Load Speed
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Banner */}
                    <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-3 border border-white/10 flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-xs font-bold text-white">
                          Next.js 16 + Tailwind
                        </div>
                        <div className="text-[10px] text-white/50">
                          Production Ready Build
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary text-[#141414] flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </div>
                    </div>

                  </div>

                  {/* Device Footer with Safe Home Indicator */}
                  <div className="pt-2.5 pb-1 border-t border-white/10 flex flex-col items-center gap-2">
                    <div className="w-full flex items-center justify-between text-[10px] text-white/40">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-primary" /> SSL Protected
                      </span>
                      <span className="text-primary font-semibold">99.9% Uptime</span>
                    </div>
                    {/* iOS Home indicator pill */}
                    <div className="w-24 h-1 bg-white/30 rounded-full" />
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Client Logo Strip */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#d8d3ce]/60">
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
