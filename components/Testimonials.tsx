"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Value Tech delivered our complete Next.js website in 3 weeks. The performance scores blew us away — 98 on Lighthouse and our signup rate jumped 40% immediately.",
    author: "Rahul Mehta",
    role: "Founder & CEO",
    company: "Verve FinTech",
    avatar: "RM",
  },
  {
    id: 2,
    quote: "They understood our aesthetic from day one. The custom Figma design to Next.js execution was flawless. We've received non-stop compliments from our investors.",
    author: "Sarah Jenkins",
    role: "Head of Marketing",
    company: "Aura Studio London",
    avatar: "SJ",
  },
  {
    id: 3,
    quote: "Best agency investment we've made. Transparent fixed pricing, zero delays, and our organic search rankings climbed within 6 weeks of launch.",
    author: "Amit Patel",
    role: "Chief Technology Officer",
    company: "PropTech Scale",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Client Feedback
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            Loved by founders<br />
            <span className="font-sourceSerif italic font-normal text-primary">&amp; ambitious brands</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium">
            Over 50+ websites launched with a flawless 5.0 rating on Clutch and Google.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#ece9e1] hover:border-[#d8d3ce] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#fea800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#141414]/10" />
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#141414]/85 leading-relaxed font-medium mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#ece9e1] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-[#141414]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#7d7b77] font-medium">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
