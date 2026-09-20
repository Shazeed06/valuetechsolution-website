"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, Phone, Calendar, Clock, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { contactConfig } from "@/lib/contact-config";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Banner Card */}
        <div className="relative bg-white rounded-[40px] sm:rounded-[50px] p-8 sm:p-12 lg:p-16 border border-[#ece9e1] shadow-lg overflow-hidden">
          
          {/* Subtle warm ambient glow background */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Get Started
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[56px] tracking-[-0.04em] text-[#141414] leading-[1.02] mb-6">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/${contactConfig.whatsapp.e164}?text=Hi%20Value%20Tech%2C%20I%20want%20to%20discuss%20a%20website%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f7f2ea] hover:bg-[#ece9e1] text-[#141414] border border-[#d8d3ce] px-6 py-4 rounded-full font-semibold text-sm transition-all"
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

            {/* Right Side: Creative "Founder Discovery & Project Launchpad" Card (No repetitive phone, No messy floating tags) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[480px] bg-[#141414] rounded-[36px] p-6 sm:p-8 text-white border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-500">
                
                {/* Ambient dynamic glow in card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

                {/* Top Status Header */}
                <div className="relative z-10 flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                      Discovery Session
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    2 Slots Available This Week
                  </span>
                </div>

                {/* Center Content: What Happens on the Call */}
                <div className="relative z-10 my-6 space-y-3.5">
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white tracking-tight">
                      Let&apos;s map your new website.
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
                      Direct with our engineering founders. Zero sales pressure.
                    </p>
                  </div>

                  {/* 3 Value Pillars Client Receives */}
                  <div className="space-y-2.5 pt-2">
                    <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-3 border border-white/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold text-xs">
                          01
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Full UX & Competitor Audit</div>
                          <div className="text-[10px] text-white/50">Identify where your current site loses leads</div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    </div>

                    <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-3 border border-white/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center font-bold text-xs">
                          02
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Next.js Technical Architecture</div>
                          <div className="text-[10px] text-white/50">Speed, SEO schema, and CMS roadmap</div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    </div>

                    <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-3 border border-white/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center font-bold text-xs">
                          03
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Fixed-Price Quote & Timeline</div>
                          <div className="text-[10px] text-white/50">Guaranteed 2-4 week delivery timeline</div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Bottom Booking Action Bar */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>20 Min Google Meet / Zoom</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#1dd3b9] text-[#141414] px-5 py-2.5 rounded-full font-bold text-xs transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <span>Reserve Free Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
