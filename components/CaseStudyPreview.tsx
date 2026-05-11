"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { cases } from "@/lib/case-studies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudyPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cs-card]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Pick the two highest-signal cases for the home preview.
  const preview = cases.slice(0, 2);

  return (
    <section ref={ref} className="section">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Recent work
            </span>
            <h2 className="heading-md mt-6">
              Real engagements.{" "}
              <span className="italic-accent text-carbon-500">
                Real outcomes.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-carbon-500">
              Anonymised by request — but the numbers are exactly what was
              shipped. Click through for the engineering tradeoffs.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="btn-link self-start sm:self-auto"
          >
            All case studies <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          {preview.map((c) => {
            // Surface the two most quantitative outcomes on the card.
            const headlineMetrics = c.outcome.slice(0, 2);
            return (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                data-cs-card
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-white transition hover:border-carbon-950/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
                  <Image
                    src={c.hero}
                    alt={c.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale contrast-110 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white sm:p-5">
                    <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] backdrop-blur">
                      {c.category}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/70">
                      {c.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-5 sm:p-7">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.02em] text-carbon-950 sm:text-2xl">
                    {c.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 border-t border-carbon-950/[0.08] pt-5">
                    {headlineMetrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-2xl">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-carbon-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 text-xs text-carbon-500">
                    <span className="flex flex-wrap gap-1.5">
                      {c.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-carbon-950/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-carbon-500"
                        >
                          {s}
                        </span>
                      ))}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 font-medium text-carbon-950 transition group-hover:gap-2">
                      Read <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
