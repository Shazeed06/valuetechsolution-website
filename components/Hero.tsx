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
    <section className="relative pt-24 sm:pt-28 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 bg-[#efebe5] text-[#141414] overflow-hidden flex flex-col justify-center min-h-[calc(100vh-60px)]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1ab9a2]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-[#fb72cc]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: High-Converting Headline & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Urgent Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
                Web Development Studio · Accepting Q4 Projects
              </span>
            </div>

            {/* Catchy Headline */}
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] leading-[0.98] tracking-[-0.04em] text-[#141414] mb-5">
              Websites<br />
              done <span className="font-sourceSerif italic font-normal text-primary">right.</span>
            </h1>

            {/* Persuasive Subtitle */}
            <p className="max-w-xl text-sm sm:text-base lg:text-[17px] text-[#7d7b77] leading-relaxed mb-6 font-medium">
              Slow, cookie-cutter templates lose customers. We design and engineer custom, lightning-fast <span className="text-[#141414] font-semibold">Next.js websites</span> that dominate search rankings, captivate visitors, and convert traffic into paying clients.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 mb-6 w-full">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all hover:border-[#141414]"
              >
                <span>View Live Work</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  50+
                </span>
              </Link>
            </div>

            {/* Social Proof Trust Row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-primary to-teal-200 flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
                  RM
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-secondary to-pink-200 flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
                  SK
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-[#efebe5] bg-gradient-to-tr from-tertiary to-amber-200 flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
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

            {/* Quick Value Guarantees */}
            <div className="flex flex-wrap gap-y-1.5 gap-x-5 text-xs text-[#7d7b77] font-medium pt-3 border-t border-[#d8d3ce]/60 w-full">
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

          {/* Right Column: Prominent, Grand Browser + Mobile Showcase with ZERO Overlapping Over Video */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative pt-6 pb-6">
            <div className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px]">
              
              {/* Floating Satellite Badge 1: Cleanly positioned ABOVE the browser (Zero Overlap) */}
              <div className="absolute -top-7 right-2 sm:right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#ece9e1] flex items-center gap-2.5 transition-transform hover:scale-105 duration-300">
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  <Zap className="w-3.5 h-3.5 fill-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414] flex items-center gap-1 leading-tight">
                    <span>99 Lighthouse</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Core Web Vitals Pass</div>
                </div>
              </div>

              {/* Floating Satellite Badge 2: Cleanly positioned BELOW the browser on bottom-right (Zero Overlap) */}
              <div className="absolute -bottom-6 right-2 sm:right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#ece9e1] flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                <div className="w-7 h-7 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141414] leading-tight">3.2x Conversion Lift</div>
                  <div className="text-[10px] text-[#7d7b77] font-medium">Engineered to Sell</div>
                </div>
              </div>

              {/* Main Desktop Browser Frame - Grand & Prominent */}
              <div className="relative w-full bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.16)] border border-[#d8d3ce] overflow-hidden group">
                
                {/* Browser Header Bar */}
                <div className="bg-[#f7f2ea] px-4 py-2.5 border-b border-[#ece9e1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 bg-white px-3.5 py-1 rounded-full border border-[#ece9e1] text-[11px] font-medium text-[#7d7b77] w-64 max-w-[60%] justify-center shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate text-[#141414] font-semibold">valuetechsolution.com</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#7d7b77]">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Viewport: High-impact 3D Web Motion Video (Entire Video 100% Clear & Visible) */}
                <div className="relative aspect-[16/9.5] w-full bg-[#141414] overflow-hidden">
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
                  
                  {/* Subtle Visual Overlay Banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary text-[#141414] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Live Architecture
                      </span>
                      <span className="text-[10px] text-white/70">Next.js 16 · Tailwind · Motion</span>
                    </div>
                    <h4 className="font-montserrat font-bold text-sm sm:text-base lg:text-lg text-white leading-tight">
                      Modern Web Engineering That Outperforms
                    </h4>
                  </div>
                </div>

              </div>

              {/* Layered Smartphone on Bottom-Left (Compact & Offset so it does NOT block the browser artwork) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-8 w-[130px] sm:w-[150px] h-[225px] sm:h-[255px] bg-[#141414] rounded-[28px] p-1.5 shadow-2xl border-[4px] border-white z-20 overflow-hidden flex flex-col group/phone hover:scale-105 transition-transform duration-300">
                {/* iPhone Notch */}
                <div className="w-10 h-2 bg-black rounded-full mx-auto mb-1 flex items-center justify-end pr-1">
                  <div className="w-1 h-1 rounded-full bg-[#222]" />
                </div>
                
                {/* Inner Screen */}
                <div className="w-full h-full bg-[#191919] rounded-[20px] overflow-hidden relative flex flex-col justify-between p-2">
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
                  
                  <div className="relative z-10 flex items-center justify-between text-[7.5px] font-bold text-primary">
                    <span>● MOBILE READY</span>
                    <Smartphone className="w-2.5 h-2.5 text-white/80" />
                  </div>
                  
                  <div className="relative z-10 text-white text-[8px] font-semibold leading-tight">
                    Responsive on all screens
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Client Logo Strip - Compact to guarantee 100vh fit */}
        <div className="mt-8 sm:mt-10 pt-4 border-t border-[#d8d3ce]/50">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#7d7b77]/80 mb-3 text-center">
            Trusted by tech startups & ambitious brands worldwide
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 opacity-65 hover:opacity-100 transition-opacity">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="font-montserrat font-bold text-base sm:text-lg tracking-tight text-[#141414]/70 hover:text-[#141414] transition-colors cursor-default"
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
