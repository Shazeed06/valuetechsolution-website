"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How long does a typical website project take from start to finish?",
    a: "Most custom marketing and corporate websites take between 2 to 4 weeks to design, develop, test, and launch. More complex web applications, client portals, or large headless e-commerce stores typically take 4 to 8 weeks depending on exact integrations.",
  },
  {
    q: "What tech stack do you build websites with?",
    a: "We build primarily with Next.js 16, React, TypeScript, and Tailwind CSS. For backend and content management, we integrate headless CMS platforms like Sanity, Strapi, or Shopify Storefront, and deploy to Vercel or AWS for sub-second global load times.",
  },
  {
    q: "Can you migrate our existing site without hurting our Google SEO rankings?",
    a: "Absolutely. We conduct a complete pre-migration SEO crawl, preserve your existing URL structures, configure 301 redirects, implement structured JSON-LD schema, and ensure your new site scores 98+ on Core Web Vitals to boost your search rankings.",
  },
  {
    q: "How does your pricing work? Are there any hidden fees?",
    a: "We work on a fixed-scope, fixed-price model. After our initial discovery call, we provide a transparent, itemized proposal detailing all deliverables, timelines, and payment milestones. What you see is what you pay — zero unexpected surprises.",
  },
  {
    q: "What happens after the website is launched?",
    a: "Every project comes with a 30-day post-launch warranty covering bug fixes and minor adjustments. We also offer monthly care plans that include 24/7 uptime monitoring, security updates, regular speed optimizations, and ongoing feature development.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#efebe5] text-[#141414] overflow-hidden">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              FAQs
            </span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.05]">
            Frequently Asked<br />
            <span className="font-sourceSerif italic font-normal text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#7d7b77] font-medium">
            Everything you need to know about partnering with our studio. Have more questions?{" "}
            <Link href="/contact" className="text-primary underline hover:text-black">
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#f7f2ea] rounded-2xl sm:rounded-3xl border border-[#d8d3ce] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-montserrat font-bold text-base sm:text-lg text-[#141414] tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#141414] text-white"
                        : "bg-white border border-[#d8d3ce] text-[#141414]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed border-t border-[#d8d3ce]/40">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
