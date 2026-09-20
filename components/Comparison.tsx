"use client";

import { Check, X, Sparkles } from "lucide-react";
import Link from "next/link";

const others = [
  "Slow timelines taking 3 to 6 months to launch",
  "Bloated WordPress/Wix templates with slow load times",
  "Vague hourly billing and surprise invoices",
  "Junior developers or unvetted outsourced contractors",
  "Disappear as soon as the final invoice is paid",
  "Zero conversion psychology or SEO optimization",
];

const valuetech = [
  "Fast 2 to 4 week agile turnaround to launch",
  "Custom Next.js 16 code with 98+ Lighthouse scores",
  "Fixed, transparent quote with zero hidden charges",
  "Senior software engineers working directly with you",
  "30-day post-launch warranty & dedicated Slack support",
  "Built-in conversion funnels and technical SEO schema",
];

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              The Difference
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            Why choose Value Tech<br />
            <span className="font-sourceSerif italic font-normal text-primary">over everyone else?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium">
            See why high-growth startups and founders choose our engineering-led studio.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Other Agencies */}
          <div className="bg-[#f7f2ea] rounded-3xl p-8 sm:p-10 border border-[#d8d3ce] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#d8d3ce]">
                <div>
                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#141414]">
                    Other Agencies
                  </h3>
                  <p className="text-xs text-[#7d7b77] mt-1">Typical agencies &amp; freelancers</p>
                </div>
                <span className="text-xs font-semibold bg-[#ece9e1] text-[#7d7b77] px-3 py-1 rounded-full">
                  The Old Way
                </span>
              </div>

              <div className="space-y-4">
                {others.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#d8d3ce]">
              <p className="text-xs text-[#7d7b77] text-center font-medium">
                High friction, long delays, and unpredictable results.
              </p>
            </div>
          </div>

          {/* Right Card: Value Tech Solution (Elevated) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-primary shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient accent background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#ece9e1]">
                <div>
                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#141414]">
                    Value Tech Solution
                  </h3>
                  <p className="text-xs text-primary font-semibold mt-1">Dedicated web engineering studio</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary text-white px-3.5 py-1.5 rounded-full shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  <span>Recommended</span>
                </span>
              </div>

              <div className="space-y-4">
                {valuetech.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm text-[#141414] font-semibold leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#ece9e1]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-white py-4 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                <span>Book a Call with Us</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
