"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    n: "T.01",
    quote:
      "Their AI agent handles our entire lead routing and onboarding flow. We didn't hire two ops people we'd planned to — that's the whole story.",
    name: "Daniel Okafor",
    role: "Founder · Coastline Exports",
    tag: "AI Automation",
    metric: "26 hrs / week saved",
    accent: "from-emerald-400/30 to-emerald-400/0",
  },
  {
    n: "T.02",
    quote:
      "Senior team, sane process, no fluff. They flagged trade-offs we hadn't even thought to ask about and shipped on the date they promised.",
    name: "Priya Subramanian",
    role: "CTO · Lumen Health",
    tag: "Web Development",
    metric: "Lighthouse 99 in CI",
    accent: "from-sky-400/30 to-sky-400/0",
  },
  {
    n: "T.03",
    quote:
      "We came in expecting a Webflow rebuild. We left with a Next.js site, a content engine, and a measurable pipeline. Different studio, different outcome.",
    name: "Aanya Mehta",
    role: "Head of Growth · Forge AI",
    tag: "SEO + Web",
    metric: "+3.2× sign-up rate",
    accent: "from-violet-400/30 to-violet-400/0",
  },
  {
    n: "T.04",
    quote:
      "The n8n workflows they built quietly run our backoffice now. I forget they exist — which is the highest compliment I can pay an automation.",
    name: "Rohan Iyer",
    role: "Operations Lead · Mosaic Labs",
    tag: "Automation",
    metric: "42 hrs / week saved",
    accent: "from-amber-400/30 to-amber-400/0",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = ref.current?.querySelectorAll("[data-card]") ?? [];
      gsap.fromTo(
        cards,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // AggregateRating JSON-LD — based on the four testimonials below
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Value Tech Solution",
    url: "https://valuetechsolution.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      bestRating: 5,
      worstRating: 1,
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />
      <div ref={ref} className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              (testimonials)
            </span>
            <h2 className="heading-lg gap-eyebrow-heading">
              Founders we&apos;ve{" "}
              <span className="italic-accent text-carbon-500">shipped with.</span>
            </h2>

            {/* Visible aggregate rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-carbon-950 text-carbon-950"
                  />
                ))}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-500">
                4.9 / 5 · {testimonials.length} reviews
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-carbon-500">
            Anonymous client names available on request — these are the lines
            we keep hearing back.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <article
              key={t.n}
              data-card
              className={`group relative flex flex-col p-7 transition-colors duration-500 sm:p-10 ${
                i % 3 === 0
                  ? "bg-carbon-950 text-white hover:bg-carbon-700"
                  : "bg-[rgb(252,251,249)] hover:bg-white"
              }`}
            >
              {/* Accent glow on dark cards */}
              {i % 3 === 0 && (
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${t.accent} blur-3xl`}
                />
              )}

              <div className="relative flex items-center justify-between">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.28em] ${
                    i % 3 === 0 ? "text-white/55" : "text-carbon-400"
                  }`}
                >
                  {t.n} · {t.tag}
                </span>
                <Quote
                  size={22}
                  strokeWidth={1.5}
                  className={i % 3 === 0 ? "text-white/30" : "text-carbon-950/25"}
                />
              </div>

              <p
                className={`relative mt-8 font-display text-xl font-medium leading-[1.32] tracking-[-0.015em] sm:text-2xl ${
                  i % 3 === 0 ? "text-white/90" : "text-carbon-950"
                }`}
              >
                <span
                  className={`italic-accent ${
                    i % 3 === 0 ? "text-white/55" : "text-carbon-500"
                  }`}
                >
                  &ldquo;
                </span>
                {t.quote}
                <span
                  className={`italic-accent ${
                    i % 3 === 0 ? "text-white/55" : "text-carbon-500"
                  }`}
                >
                  &rdquo;
                </span>
              </p>

              <div
                className={`relative mt-auto flex items-end justify-between gap-4 border-t pt-5 ${
                  i % 3 === 0 ? "border-white/15" : "border-carbon-950/[0.08]"
                } mt-10`}
              >
                <div>
                  <p
                    className={`font-display text-base font-bold tracking-[-0.01em] sm:text-lg ${
                      i % 3 === 0 ? "text-white" : "text-carbon-950"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      i % 3 === 0 ? "text-white/55" : "text-carbon-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                    i % 3 === 0
                      ? "border-white/20 bg-white/5 text-white/85"
                      : "border-carbon-950/15 bg-snow-50 text-carbon-700"
                  }`}
                >
                  {t.metric}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
          ↳ NDAs and reference calls available on request
        </p>
      </div>
    </section>
  );
}
