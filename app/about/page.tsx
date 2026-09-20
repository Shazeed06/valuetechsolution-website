import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Palette, Search, ShieldCheck, Layers, Sparkles, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: {
    absolute: "About Us — Web Development Studio | Value Tech Solution",
  },
  description:
    "Learn about Value Tech Solution: an engineering-led web development studio crafting high-performance Next.js websites, design systems, and conversion funnels for ambitious startups.",
  keywords: [
    "about web development studio",
    "Value Tech Solution team",
    "Next.js agency founders",
    "web development studio India",
  ],
  alternates: { canonical: "https://valuetechsolution.com/about" },
};

const capabilities = [
  {
    n: "01",
    icon: Code2,
    title: "Next.js & React Engineering",
    desc: "Clean component architecture, TypeScript, App Router, and edge rendering that guarantee 98+ Google Lighthouse scores and rapid scaling.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Bespoke UI/UX & Design Systems",
    desc: "Tailor-made Figma designs, responsive typography scales, and token-driven design systems built for seamless handoffs and brand consistency.",
  },
  {
    n: "03",
    icon: Search,
    title: "Technical SEO & Organic Visibility",
    desc: "Clean semantic HTML, automated JSON-LD schemas, Core Web Vitals optimization, and architecture that search engines love to index and rank.",
  },
  {
    n: "04",
    icon: Layers,
    title: "Full-Stack Web Applications",
    desc: "Custom client portals, SaaS dashboards, and database integrations built with secure authentication, modern APIs, and reliable cloud setups.",
  },
  {
    n: "05",
    icon: ShieldCheck,
    title: "Performance & Security Hardening",
    desc: "Bank-grade SSL, DDoS protection, sub-second asset caching, and automated testing to keep your website fast, resilient, and always online.",
  },
  {
    n: "06",
    icon: Sparkles,
    title: "Conversion Rate Optimization",
    desc: "High-impact landing pages designed with persuasive user psychology, clear visual hierarchy, and friction-free call-to-actions.",
  },
];

const values = [
  {
    title: "Senior Engineers Only.",
    desc: "Every project is designed and coded by senior developers with 6+ years of experience. No juniors learning on your dime.",
  },
  {
    title: "Outcomes, Not Slideware.",
    desc: "We measure success by page speed, search rankings, and lead conversions — not the number of meetings or slide decks.",
  },
  {
    title: "Clean Stack, Lasting Code.",
    desc: "We write clean, documented Next.js and TypeScript. You own 100% of the repository and codebase from day one.",
  },
  {
    title: "Fixed Price & Clear Scope.",
    desc: "No hourly surprises or creeping bills. You receive a fixed quote and guaranteed timeline before work begins.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "About", url: "https://valuetechsolution.com/about" },
        ]}
      />

      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            Engineering first.
            <br />
            <span className="font-sourceSerif italic font-normal text-primary">
              Studio second.
            </span>
          </>
        }
        description="Value Tech Solution is a modern web development studio crafting high-performance Next.js websites for startups and ambitious brands. Built for founders who would rather ship real results than negotiate slide decks."
      />

      {/* Manifesto + Image Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8d3ce] shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80"
                  alt="Web engineers collaborating"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Web Studio</span>
                  <span className="text-xs font-mono text-white/80">Est. 2024 · Global</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4 self-start">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  The Philosophy
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#141414] tracking-tight leading-[1.1] mb-6">
                We build websites that look stunning and{" "}
                <span className="font-sourceSerif italic font-normal text-primary">
                  convert effortlessly
                </span>
                .
              </h2>
              <div className="space-y-4 text-base text-[#7d7b77] font-medium leading-relaxed">
                <p>
                  Most web design agencies focus solely on surface aesthetics, leaving behind bloated codebases that load slowly, fail SEO audits, and require constant debugging.
                </p>
                <p>
                  We started Value Tech Solution to bridge that gap. We combine world-class Figma design with rigorous computer science engineering — building Next.js websites that feel instantaneous, rank at the top of Google, and turn casual visitors into paying customers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-[#f7f2ea] border-y border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Capabilities
              </span>
            </div>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
              What we <span className="font-sourceSerif italic font-normal text-primary">engineer</span>
            </h2>
            <p className="mt-4 text-base text-[#7d7b77] font-medium">
              Every deliverable is handled in-house by experienced software engineers who care about quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.n}
                  className="bg-white rounded-3xl p-8 border border-[#ece9e1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#f7f2ea] border border-[#ece9e1] text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#7d7b77]/50 font-montserrat">
                        {c.n}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-[#141414] mb-3 tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numbers / Stats Section */}
      <Stats />

      {/* Values / Principles */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Our Values
              </span>
            </div>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#141414] tracking-tight">
              Four principles.{" "}
              <span className="font-sourceSerif italic font-normal text-primary">Every project.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#ece9e1] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Principle 0{i + 1}
                  </span>
                  <h3 className="mt-6 font-montserrat font-bold text-2xl text-[#141414] tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-16 bg-[#f7f2ea] border-t border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-tight max-w-3xl mx-auto leading-tight mb-8">
            &ldquo;If you want a cookie-cutter template, we&apos;re the wrong studio. If you want engineers who build high-performance web systems and stand behind them — let&apos;s talk.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#141414] text-white hover:bg-black px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
