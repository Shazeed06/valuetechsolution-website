"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { contactConfig } from "@/lib/contact-config";

export default function CTA() {
  return (
    <section className="pt-16 sm:pt-20 pb-0 bg-[#141414] text-[#141414] relative overflow-hidden">
      {/* Ambient background glow for seamless transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Signature GUD Agency Pink Curved Arch Banner */}
        <div className="bg-[#fb72cc] rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[140px] px-6 sm:px-12 lg:px-16 py-16 sm:py-24 text-center text-[#141414] relative overflow-hidden shadow-[0_-25px_60px_rgba(251,114,204,0.35)]">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-black/10 border border-black/10 px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#141414]">
              Start Your Next Digital Sprint
            </span>
          </div>

          {/* Giant Montserrat Bold Headline */}
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] uppercase text-[#141414] leading-[1.0] max-w-4xl mx-auto mb-6">
            Let's Build Something Great Together
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#141414]/85 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to take your online presence and conversion rates to the next level? Get in touch and let's craft something exceptional.
          </p>

          {/* Black Pill Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[#141414] hover:bg-black text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2 group"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Direct Contact Details */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#141414]/75">
            Direct: {contactConfig.phone.display} · {contactConfig.email.primary}
          </p>

        </div>

      </div>
    </section>
  );
}
