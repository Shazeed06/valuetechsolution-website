"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  video: string;
  fallbackVideo: string;
  href: string;
  tag: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: "01",
    title: "Content Creation",
    description: "Short-form video, UGC, reels, and visuals designed to stop the scroll and go viral.",
    video: "/videos/services/content-creation.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/SCuqi0qyfpukKLtZm0jURfE.mp4",
    href: "/services",
    tag: "Reels · UGC · Motion",
  },
  {
    id: "02",
    title: "Social Management",
    description: "We handle your content calendar, posting, and day-to-day management of your socials.",
    video: "/videos/services/social-management.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/64ZMhO5aQtuzPw6cPEGQKIEos.mp4",
    href: "/services",
    tag: "Calendar · Growth · Community",
  },
  {
    id: "03",
    title: "Paid Ads",
    description: "We build and manage targeted ad campaigns on Meta, Google, Tiktok, and more.",
    video: "/videos/services/paid-ads.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/u0e0HQVXrB8r4Av9RYEjAmZ7rw.mp4",
    href: "/services",
    tag: "Meta Ads · Google Ads · ROI",
  },
  {
    id: "04",
    title: "SEO / AEO",
    description: "We rank your business on Google and AI engines like ChatGPT, Perplexity, and Gemini.",
    video: "/videos/services/seo-aeo.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/tCiWSYhH7ogb02EDlkqd1IiaXf8.mp4",
    href: "/services/seo",
    tag: "Rankings · AI Search · Backlinks",
  },
  {
    id: "05",
    title: "Web Design & Dev",
    description: "With our design-first mindset we make sure your website is optimal to outshine the competition.",
    video: "/videos/services/web-design.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/4K6zXdlvxNmH7jGydrlDfMxo6c.mp4",
    href: "/services/web-development",
    tag: "Next.js · Figma · Speed",
  },
  {
    id: "06",
    title: "Software Development",
    description: "We can build any software you desire, from custom web apps, bots, dashboards and much more.",
    video: "/videos/services/software-dev.mp4",
    fallbackVideo: "https://framerusercontent.com/assets/ZhpNJCNDDSZVMFkXxApJLEc3y8w.mp4",
    href: "/services/ai-automation",
    tag: "Full-Stack · SaaS · Automation",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3.5 py-1.5 bg-black/5 border border-black/5 rounded-full mb-4">
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#141414]/70 mb-0">
              Services
            </p>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            How we can help you <span className="font-sourceSerif italic font-normal text-primary">grow</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium max-w-xl mx-auto">
            Explore our end-to-end creative and digital growth services designed to outshine your competition.
          </p>
        </div>

        {/* 3D Motion Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {serviceItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
            >
              <div className="bg-[#f7f2ea] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-[450px] sm:h-[470px] border border-[#e7e2dc]/80 hover:border-[#141414]/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden">
                
                {/* Top 3D Motion Visual */}
                <div className="relative w-full h-[220px] sm:h-[235px] flex items-center justify-center overflow-hidden rounded-2xl bg-transparent">
                  <video
                    src={item.video}
                    loop
                    muted
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to remote Framer video if local fails
                      const target = e.currentTarget;
                      if (target.src !== item.fallbackVideo) {
                        target.src = item.fallbackVideo;
                      }
                    }}
                  />
                </div>

                {/* Bottom Content */}
                <div className="mt-auto w-full pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-montserrat font-bold text-2xl sm:text-[25px] text-[#141414] tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#141414] group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-[#7d7b77] text-sm sm:text-[15px] leading-relaxed font-medium mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <span className="inline-block text-[11px] font-semibold text-[#141414]/60 bg-white/70 px-2.5 py-0.5 rounded-full border border-black/5">
                    {item.tag}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Feature Mission Banner */}
        <div className="relative bg-[#f7f2ea] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-[#d8d3ce] overflow-hidden">
          
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#d8d3ce] text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Why It Works</span>
              </div>
              <h3 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-tight mb-4">
                Make your business <span className="font-sourceSerif italic font-normal text-primary">always growing</span>
              </h3>
              <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed max-w-2xl mb-6">
                Most agencies build and disappear. We operate as your dedicated engineering and creative partner — continuously optimizing page speeds, testing conversion hooks, and delivering high-impact assets as your brand scales.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#141414]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Senior Creative & Tech Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Iterative Fast Turnarounds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span>Direct WhatsApp Channel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#ece9e1] max-w-sm w-full text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="font-montserrat font-black text-3xl text-[#141414] mb-1">
                  3.2x
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Average Conversion Lift
                </div>
                <p className="text-xs text-[#7d7b77] leading-relaxed mb-5">
                  Brands switching to our high-converting landing pages and modern Next.js tech stack experience instant engagement gains.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] text-white hover:bg-black py-3 rounded-full text-xs font-semibold transition-all group"
                >
                  <span>See How It Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
