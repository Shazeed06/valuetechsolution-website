"use client";

import Link from "next/link";
import { ArrowUpRight, Star, CheckCircle2, Laptop } from "lucide-react";
import HeroHaikeiBackground from "@/components/HeroHaikeiBackground";

const techStack = [
  {
    name: "Next.js",
    label: "Next.js",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.836 18.064l-6.85-8.83v8.83H9.418V5.936h1.568l6.85 8.83V5.936h1.568v12.128h-1.568z" />
      </svg>
    ),
  },
  {
    name: "React",
    label: "React",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    label: "TypeScript",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm10.7 7.7h-2.1v6.7h-1.9v-6.7H7.6V9h6.1v1.7zm5 3.3c0-1.7-1.1-2.4-2.8-2.8-.9-.2-1.3-.5-1.3-.9 0-.4.4-.7 1.1-.7.8 0 1.5.3 1.9.7l1.1-1.3C18 8.3 17 8 15.7 8c-2 0-3.1 1.1-3.1 2.5 0 1.5 1 2.2 2.6 2.6.9.2 1.5.5 1.5 1 0 .5-.5.8-1.2.8-1 0-1.9-.4-2.4-1.1l-1.2 1.2c.8 1.1 2 1.6 3.6 1.6 2.1 0 3.2-1.1 3.2-2.9z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    label: "Tailwind CSS",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    label: "Node.js",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 1l10.392 6v12L12 25 1.608 19V7L12 1zm0 2.309L3.608 7.695v9.61L12 21.691l8.392-4.386v-9.61L12 3.309z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    label: "Vercel",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L24 22H0L12 2z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    label: "Figma",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zM4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm0-8c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4zm8-4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0zm0 8h4c2.2 0 4 1.8 4 4s-1.8 4-4 4c-2.2 0-4-1.8-4-4V8z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative z-0 isolate pt-24 sm:pt-28 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 bg-[#efebe5] text-[#141414] overflow-hidden flex flex-col justify-center min-h-[calc(100vh-60px)]">
      {/* Haikei-Style Organic Layered SVG Waves in Brand Colors */}
      <HeroHaikeiBackground />

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: High-Converting Headline & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-4 py-1.5 rounded-full mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#141414]">
                Web Development Studio · High-Performance Engineering
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

          {/* Right Column: Clean Desktop & Phone Composition Matched to Reference Image (Tags Removed) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative pt-4 pb-6">
            <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[650px] group">
              
              {/* Main Desktop Browser Frame - Clean with NO Tags, NO Overlay text */}
              <div className="relative w-full bg-white rounded-[26px] sm:rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] border border-[#d8d3ce] overflow-hidden">
                
                {/* Browser Header Bar */}
                <div className="bg-[#f7f2ea] px-4 py-2.5 sm:py-3 border-b border-[#ece9e1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-[#ece9e1] text-[11px] font-medium text-[#7d7b77] w-64 max-w-[60%] justify-center shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate text-[#141414] font-semibold">valuetechsolution.com</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#7d7b77]/60">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Viewport: Pure 3D Web Design Motion Video - Completely Unobscured */}
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
                </div>

              </div>

              {/* Tilted Smartphone positioned on Bottom-Left with minimal overlap so all desktop code is visible */}
              <div className="absolute bottom-1 sm:bottom-2 -left-6 sm:-left-12 lg:-left-16 w-[125px] sm:w-[145px] md:w-[160px] h-[245px] sm:h-[285px] md:h-[310px] bg-[#141414] rounded-[28px] sm:rounded-[34px] p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.24)] border-[4px] border-[#141414] z-20 overflow-hidden flex flex-col rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
                
                {/* iPhone Dynamic Notch */}
                <div className="w-10 sm:w-12 h-2 bg-black rounded-full mx-auto mb-1 flex items-center justify-end pr-1 z-20">
                  <div className="w-1 h-1 rounded-full bg-[#222]" />
                </div>
                
                {/* Inner Screen with Live Interactive Motion Loop Video */}
                <div className="w-full h-full bg-[#191919] rounded-[22px] sm:rounded-[28px] overflow-hidden relative flex flex-col justify-between p-2">
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
                  
                  {/* Status Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[7.5px] sm:text-[8px] font-bold text-white/90 px-1 pt-0.5">
                    <span>9:41</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Bottom Home Indicator */}
                  <div className="relative z-10 w-14 sm:w-16 h-1 bg-white/40 rounded-full mx-auto mb-0.5" />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Modern Web Tech Stack Strip - 100% Genuine, Honest & High-Converting */}
        <div className="mt-8 sm:mt-10 pt-4 border-t border-[#d8d3ce]/50">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#7d7b77]/80 mb-3 text-center">
            Engineered with modern web technologies & performance standards
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 opacity-75 hover:opacity-100 transition-opacity">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 font-montserrat font-bold text-sm sm:text-base tracking-tight text-[#141414]/80 hover:text-primary transition-colors cursor-default"
              >
                <span className="opacity-70 group-hover:opacity-100">{tech.icon}</span>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
