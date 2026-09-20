"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, Phone } from "lucide-react";
import { contactConfig } from "@/lib/contact-config";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Banner Card */}
        <div className="relative bg-white rounded-[40px] sm:rounded-[50px] p-8 sm:p-14 lg:p-16 border border-[#ece9e1] shadow-lg overflow-hidden">
          
          {/* Subtle warm glow background */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Get Started
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[58px] tracking-[-0.04em] text-[#141414] leading-[1.02] mb-6">
                Your success<br />
                <span className="font-sourceSerif italic font-normal text-primary">starts right here.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed max-w-xl mb-8">
                Ready to elevate your online presence with a high-performance website engineered for growth? Book a free 20-minute discovery call with our founders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </Link>

                <a
                  href={`https://wa.me/${contactConfig.whatsapp.e164}?text=Hi%20Value%20Tech%2C%20I%20want%20to%20discuss%20a%20website%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-6 py-4 rounded-full font-semibold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Direct Info */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#7d7b77] font-medium pt-4 border-t border-[#ece9e1]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" /> {contactConfig.phone.display}
                </span>
                <span>•</span>
                <span>{contactConfig.email.primary}</span>
                <span>•</span>
                <span>No commitment required</span>
              </div>

            </div>

            {/* Right 3D Phone / Mockup Visual with Rich Animations & Motion Inside */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                
                {/* Floating Motion Badge 1: Top Right */}
                <div className="absolute -top-3 -right-3 sm:-right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-[#ece9e1] flex items-center gap-2 animate-float-slow transition-transform group-hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-[#141414]">Live Visitors: 1,480+</span>
                </div>

                {/* Floating Motion Badge 2: Bottom Left */}
                <div className="absolute -bottom-3 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-[#ece9e1] flex items-center gap-2 animate-bounce-simple transition-transform group-hover:scale-105">
                  <Sparkles className="w-3.5 h-3.5 text-tertiary" />
                  <span className="text-[11px] font-bold text-[#141414]">⚡ 98+ Speed Score</span>
                </div>

                {/* Smartphone Frame with 3D hover physics & White Apple Bezel */}
                <div className="relative w-[275px] sm:w-[310px] h-[510px] sm:h-[550px] bg-[#141414] rounded-[48px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] border-[8px] border-white rotate-[3deg] group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                  
                  {/* Dynamic Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
                  </div>

                  {/* Inner screen with Live 3D Motion Video Loop & Interactive UI */}
                  <div className="w-full h-full bg-[#f7f2ea] rounded-[38px] p-4 pt-8 flex flex-col justify-between overflow-hidden relative">
                    
                    {/* Animated ambient background glow */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl absolute -top-8 -right-8 animate-pulse pointer-events-none" />

                    {/* Status Header */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-bold text-[#141414] pb-2 border-b border-black/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>valuetechsolution.com</span>
                      </div>
                      <span className="text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                        ONLINE
                      </span>
                    </div>

                    {/* Center: High-Impact 3D Motion Video Loop */}
                    <div className="relative my-auto w-full aspect-square max-h-[235px] rounded-2xl overflow-hidden flex items-center justify-center bg-white/70 border border-black/5 shadow-inner group-hover:shadow-md transition-shadow">
                      <video
                        src="/videos/services/social-management.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = "https://framerusercontent.com/assets/64ZMhO5aQtuzPw6cPEGQKIEos.mp4";
                        }}
                      />
                      
                      {/* Floating interactive badge inside screen */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/80 shadow-md flex items-center justify-between text-left">
                        <div>
                          <div className="text-[9px] uppercase font-bold text-primary tracking-wider">Next.js Studio</div>
                          <div className="text-[11px] font-bold text-[#141414]">Ready to Launch</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-primary text-[#141414] flex items-center justify-center text-xs font-black shrink-0">
                          ✓
                        </div>
                      </div>
                    </div>

                    {/* Animated Bottom Interactive Pill */}
                    <div className="relative z-10 pt-2">
                      <Link
                        href="/contact"
                        className="w-full bg-[#141414] hover:bg-black text-white py-2.5 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold transition-all shadow-md group-hover:shadow-lg active:scale-95"
                      >
                        <span>Start a Project</span>
                        <span className="text-primary text-sm">✦</span>
                      </Link>
                      <div className="w-20 h-1 bg-black/20 rounded-full mx-auto mt-2" />
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
