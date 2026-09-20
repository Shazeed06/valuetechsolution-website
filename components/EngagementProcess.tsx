"use client";

import { Compass, Paintbrush, Rocket, Check } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    timeline: "Week 1",
    desc: "We analyze your audience, map out conversion funnels, define technical architecture, and structure site wireframes.",
    icon: Compass,
    highlights: ["Competitor & UX audit", "Site architecture plan", "Conversion goal mapping"],
  },
  {
    step: "02",
    title: "Design & Prototype",
    timeline: "Week 2",
    desc: "We craft bespoke visual concepts in Figma with tailored typography, custom design systems, and responsive layouts for desktop & mobile.",
    icon: Paintbrush,
    highlights: ["Figma interactive preview", "Design tokens & styleguide", "Revisions until 100% approved"],
  },
  {
    step: "03",
    title: "Development & Launch",
    timeline: "Weeks 3-4",
    desc: "We code pixel-perfect Next.js pages, integrate CMS and tracking tools, test 98+ Lighthouse performance, and launch on Vercel/AWS.",
    icon: Rocket,
    highlights: ["Production Next.js 16 build", "98+ Google Core Web Vitals", "Pre-launch QA & go-live checklist"],
  },
];

export default function EngagementProcess() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Our Process
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            We like to keep things<br />
            <span className="font-sourceSerif italic font-normal text-primary">nice and simple</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium">
            A battle-tested 3-stage sprint that moves from blank canvas to revenue-driving website in just 4 weeks.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-8 border border-[#ece9e1] hover:border-[#d8d3ce] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#f7f2ea] border border-[#ece9e1] text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {s.timeline}
                      </span>
                      <span className="font-montserrat font-black text-2xl text-[#141414]/20">
                        {s.step}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-montserrat font-bold text-xl text-[#141414] mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#7d7b77] leading-relaxed font-medium mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-[#ece9e1] space-y-2">
                  {s.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-[#141414]/80">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
