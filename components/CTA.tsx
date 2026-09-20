"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, Phone } from "lucide-react";
import { contactConfig } from "@/lib/contact-config";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
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

            {/* Right 3D Phone / Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-[260px] sm:w-[290px] h-[480px] sm:h-[520px] bg-gradient-to-b from-[#141414] to-[#202020] rounded-[48px] p-3 shadow-2xl border-4 border-[#2d2d2d] rotate-[4deg] hover:rotate-0 transition-transform duration-500 overflow-hidden flex flex-col justify-between">
                
                {/* Dynamic notch */}
                <div className="w-24 h-3.5 bg-black rounded-full mx-auto mt-2" />

                {/* Inner screen */}
                <div className="w-full h-full my-3 bg-[#f7f2ea] rounded-[38px] p-5 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* Glowing graphic backdrop */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-amber-300 blur-xl opacity-60 absolute -top-4 -right-4" />

                  {/* Header in phone */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#141414] mb-3">
                      <span>valuetechsolution.com</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-[#ece9e1] mb-3">
                      <div className="text-[10px] uppercase font-bold text-primary tracking-wider">Ready to launch</div>
                      <div className="font-montserrat font-bold text-sm text-[#141414] mt-0.5">Custom Next.js Studio</div>
                      <div className="text-[10px] text-[#7d7b77] mt-1">98+ Core Web Vitals Guaranteed</div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#ece9e1] space-y-1.5">
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full" />
                      <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
                      <div className="h-2 w-2/3 bg-primary/30 rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Bottom button in phone */}
                  <div className="w-full bg-[#141414] text-white py-2.5 rounded-full text-center text-[11px] font-bold">
                    Start a Project ✦
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
