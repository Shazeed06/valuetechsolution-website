"use client";

import Link from "next/link";
import { ArrowUpRight, Star, Sparkles, CheckCircle2, Zap, TrendingUp, Laptop, Smartphone } from "lucide-react";

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
    <section className="relative pt-32 sm:pt-36 lg:pt-38 pb-16 lg:pb-20 bg-[#efebe5] text-[#141414] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1ab9a2]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-[#fb72cc]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Converting Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Urgent Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
                Web Development Studio · Accepting Q4 Projects
              </span>
            </div>

            {/* Catchy Headline */}
            <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[80px] leading-[0.98] tracking-[-0.04em] text-[#141414] mb-6">
              Websites<br />
              done <span className="font-sourceSerif italic font-normal text-primary">right.</span>
            </h1>

            {/* Persuasive Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-[#7d7b77] leading-relaxed mb-8 font-medium">
              Slow, cookie-cutter templates lose customers. We design and engineer custom, lightning-fast <span className="text-[#141414] font-semibold">Next.js websites</span> that dominate search rankings, captivate visitors, and convert traffic into paying clients.
            </p>

            {/* Dual CTA Buttons + Reviews */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-7 py-4 rounded-full font-semibold text-base transition-all hover:border-[#141414]"
              >
                <span>View Live Work</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  50+
                </span>
              </Link>
            </div>

            {/* Social Proof Trust Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-primary to-teal-200 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  RM
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-secondary to-pink-200 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  SK
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-tertiary to-amber-200 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                  AP
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#fea800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#141414] ml-1">5.0 / 5.0</span>
                </div>
                <div className="text-[11px] text-[#7d7b77] font-medium">
                  Loved by 50+ founders & ambitious brands
                </div>
              </div>
            </div>

            {/* Quick value guarantees */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#7d7b77] font-medium pt-3 border-t border-[#d8d3ce]/60 w-full">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 2-4 Week Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 98+ Google Lighthouse
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 100% Fixed-Price Quote
              </span>
            </div>

          </div>

          {/* Right Column: Catchy Responsive Desktop + Mobile Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-4 pb-6">
            <div className="relative w-full max-w-[460px] sm:max-w-[490px]">
              
              {/* Floating Badge 1: Top Right Speed Indicator */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#ece9e1] flex items-center gap-2.5 transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  <Zap className="w-4 h-4 fill-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414] flex items-center gap-1">
                    <span>99 Lighthouse</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Core Web Vitals Pass</div>
                </div>
              </div>

              {/* Floating Badge 2: Conversion Boost Indicator */}
              <div className="absolute -bottom-3 right-4 sm:right-8 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#ece9e1] flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414]">3.2x Conversion Lift</div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Engineered to Sell</div>
                </div>
              </div>

              {/* Main Desktop Browser Frame Mockup */}
              <div className="relative w-full bg-white rounded-[28px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.16)] border border-[#d8d3ce] overflow-hidden group">
                
                {/* Browser Header Bar */}
                <div className="bg-[#f7f2ea] px-4 py-3 border-b border-[#ece9e1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 bg-white px-3.5 py-1 rounded-full border border-[#ece9e1] text-[11px] font-medium text-[#7d7b77] w-56 max-w-[55%] justify-center shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate text-[#141414] font-semibold">valuetechsolution.com</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#7d7b77]">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Viewport: High-impact 3D Web Motion Video */}
                <div className="relative aspect-[16/10] w-full bg-[#141414] overflow-hidden">
                  <video
                    src="/videos/services/web-design.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://framerusercontent.com/assets/4K6zXdlvxNmH7jGydrlDfMxo6c.mp4";
                    }}
                  />
                  
                  {/* Visual Overlay Banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary text-[#141414] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Live Architecture
                      </span>
                      <span className="text-[10px] text-white/70">Next.js 16 · Tailwind · Motion</span>
                    </div>
                    <h4 className="font-montserrat font-bold text-base sm:text-lg text-white leading-tight">
                      Modern Web Engineering That Outperforms
                    </h4>
                  </div>
                </div>

              </div>

              {/* Layered Smartphone on Bottom-Left (100% Mobile Responsive Proof) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 w-[145px] sm:w-[165px] h-[250px] sm:h-[280px] bg-[#141414] rounded-[34px] p-2 shadow-2xl border-[5px] border-white z-20 overflow-hidden flex flex-col group/phone hover:scale-105 transition-transform duration-300">
                {/* iPhone Notch */}
                <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-end pr-1">
                  <div className="w-1 h-1 rounded-full bg-[#222]" />
                </div>
                
                {/* Inner Screen */}
                <div className="w-full h-full bg-[#191919] rounded-[24px] overflow-hidden relative flex flex-col justify-between p-2.5">
                  <video
                    src="/videos/services/social-management.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://framerusercontent.com/assets/64ZMhO5aQtuzPw6cPEGQKIEos.mp4";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-between text-[8px] font-bold text-primary">
                    <span>● MOBILE READY</span>
                    <Smartphone className="w-2.5 h-2.5 text-white/80" />
                  </div>
                  
                  <div className="relative z-10 text-white text-[9px] font-semibold leading-tight">
                    Flawless on all screens & devices
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Client Logo Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#d8d3ce]/60">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7d7b77] mb-6 text-center">
            Trusted by tech startups & ambitious brands worldwide
          </p>
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
