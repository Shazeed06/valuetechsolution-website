"use client";

import { 
  Compass, 
  Paintbrush, 
  Rocket, 
  Check, 
  Layers, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Zap,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    timeline: "Week 1",
    desc: "We analyze your audience, map out conversion funnels, define technical architecture, and structure site wireframes before writing code.",
    accent: "text-primary",
    badgeBg: "bg-primary/10 text-primary border-primary/20",
    visual: "strategy",
    deliverables: ["Competitor & UX Audit", "Conversion Funnel Mapping", "Information Architecture"],
  },
  {
    step: "02",
    title: "Design & Prototype",
    timeline: "Week 2",
    desc: "We craft bespoke visual concepts in Figma with tailored typography, custom design systems, and responsive layouts for desktop & mobile.",
    accent: "text-secondary",
    badgeBg: "bg-secondary/10 text-secondary border-secondary/20",
    visual: "design",
    deliverables: ["Interactive Figma Prototypes", "Custom Design Tokens", "Unlimited Revisions"],
  },
  {
    step: "03",
    title: "Development & Launch",
    timeline: "Weeks 3-4",
    desc: "We code pixel-perfect Next.js pages, integrate CMS and tracking tools, test 98+ Lighthouse performance, and launch on Vercel/AWS.",
    accent: "text-tertiary",
    badgeBg: "bg-tertiary/10 text-tertiary border-tertiary/20",
    visual: "launch",
    deliverables: ["Production Next.js 16 Build", "98+ Core Web Vitals Pass", "Domain & Analytics Go-Live"],
  },
];

export default function EngagementProcess() {
  return (
    <section id="process" className="py-20 sm:py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3.5 py-1.5 bg-black/5 border border-black/5 rounded-full mb-4">
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#141414]/70 mb-0">
              Our Process
            </p>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            We like to keep things<br />
            <span className="font-sourceSerif italic font-normal text-primary">nice and simple</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium max-w-xl mx-auto">
            A battle-tested 3-stage sprint that moves from blank canvas to revenue-driving website in just 4 weeks.
          </p>
        </div>

        {/* 3 Step Cards matching Services Section High-End Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-[#f7f2ea] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-[#e7e2dc]/80 hover:border-[#141414]/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                {/* Creative Top Visual Container */}
                <div className="relative w-full h-[190px] rounded-2xl bg-white/70 border border-black/5 p-4 mb-6 shadow-xs flex flex-col justify-between overflow-hidden group-hover:bg-white transition-colors">
                  
                  {/* Subtle ambient light leak */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-xl pointer-events-none" />

                  {/* Header in visual */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${s.badgeBg}`}>
                      {s.timeline}
                    </span>
                    <span className="font-montserrat font-black text-2xl text-[#141414]/15 group-hover:text-[#141414]/30 transition-colors">
                      {s.step}
                    </span>
                  </div>

                  {/* Visual 1: Strategy Blueprint & Wireframe Grid */}
                  {s.visual === "strategy" && (
                    <div className="relative z-10 my-auto space-y-2">
                      <div className="flex items-center gap-2 bg-[#f7f2ea] p-2 rounded-xl border border-black/5">
                        <Compass className="w-4 h-4 text-primary shrink-0 animate-spin" style={{ animationDuration: "12s" }} />
                        <div className="text-[10px] font-bold text-[#141414]">Funnel & Conversion Architecture</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="bg-white p-2 rounded-lg border border-black/5 text-center">
                          <div className="text-[8px] text-[#7d7b77] uppercase font-bold">Audit</div>
                          <div className="text-[10px] font-black text-primary">100%</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-black/5 text-center">
                          <div className="text-[8px] text-[#7d7b77] uppercase font-bold">Scope</div>
                          <div className="text-[10px] font-black text-[#141414]">Fixed</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-black/5 text-center">
                          <div className="text-[8px] text-[#7d7b77] uppercase font-bold">Timeline</div>
                          <div className="text-[10px] font-black text-secondary">7 Days</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual 2: Figma Design System & UI Components */}
                  {s.visual === "design" && (
                    <div className="relative z-10 my-auto space-y-2">
                      <div className="flex items-center justify-between bg-[#f7f2ea] p-2 rounded-xl border border-black/5">
                        <div className="flex items-center gap-2">
                          <Paintbrush className="w-4 h-4 text-secondary shrink-0" />
                          <span className="text-[10px] font-bold text-[#141414]">Figma Design System</span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Swatches */}
                        <div className="flex -space-x-1.5">
                          <span className="w-5 h-5 rounded-full bg-primary border-2 border-white" />
                          <span className="w-5 h-5 rounded-full bg-secondary border-2 border-white" />
                          <span className="w-5 h-5 rounded-full bg-tertiary border-2 border-white" />
                          <span className="w-5 h-5 rounded-full bg-[#141414] border-2 border-white" />
                        </div>
                        <div className="text-[10px] text-[#7d7b77] font-medium bg-white px-2 py-1 rounded-md border border-black/5 flex-1 text-center">
                          Bespoke UI Tokens
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual 3: Next.js Terminal & 99 Speed Launch */}
                  {s.visual === "launch" && (
                    <div className="relative z-10 my-auto bg-[#141414] rounded-xl p-2.5 text-white font-mono text-[10px] space-y-1 shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-1">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-[8px] text-emerald-400 font-bold">READY TO DEPLOY</span>
                      </div>
                      <div className="text-emerald-400 flex items-center justify-between pt-0.5">
                        <span>$ next build --prod</span>
                        <Zap className="w-3 h-3 text-tertiary animate-pulse" />
                      </div>
                      <div className="text-white/70 text-[9px]">
                        ✓ Core Web Vitals: <span className="text-primary font-bold">99/100</span>
                      </div>
                    </div>
                  )}

                  {/* Footer sub-bar in visual */}
                  <div className="flex items-center justify-between text-[10px] text-[#7d7b77] pt-1 border-t border-black/5">
                    <span className="font-semibold text-[#141414]/70">Phase {s.step}</span>
                    <span className="text-primary font-bold flex items-center gap-1">
                      Ready <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>

                {/* Step Title & Description */}
                <h3 className="font-montserrat font-bold text-2xl sm:text-[25px] text-[#141414] mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#7d7b77] text-sm sm:text-[15px] leading-relaxed font-medium mb-6">
                  {s.desc}
                </p>
              </div>

              {/* Deliverable Checkmarks */}
              <div className="pt-4 border-t border-[#e7e2dc] space-y-2">
                {s.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#141414]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#d8d3ce] shadow-xs text-xs font-bold text-[#141414]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Guaranteed fixed timeline: 4 weeks from discovery kickoff to live deployment.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
