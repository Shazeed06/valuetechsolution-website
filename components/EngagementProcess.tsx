"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, FileText, Rocket, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Diagnostic call",
    duration: "30 min · free",
    body: "We map the highest-leverage workflows, agree on what success looks like, and decide whether a build even makes sense for you.",
    deliverable: "A written tradeoff doc — yours to keep, hire us or not.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Scoped proposal",
    duration: "48 hours",
    body: "Tight scope, honest timeline, fixed price. Every assumption written down so there are no surprises mid-build. No retainer pressure.",
    deliverable: "Statement of work + fixed quote you can take to your CFO.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Build sprint",
    duration: "2–6 weeks",
    body: "Senior engineers, async-first, daily Looms. Production-grade from day one — versioned, tested, observable. Handover walkthrough at the end.",
    deliverable: "Shipped agent or site · runbook · 30-day post-launch tuning.",
  },
];

export default function EngagementProcess() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-ep-step]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        "[data-ep-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          delay: 0.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              How we start
            </span>
            <h2 className="heading-md mt-6">
              From first call to shipped.{" "}
              <span className="italic-accent text-carbon-500">
                In three moves.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-carbon-500">
              No sales theatre. No 6-call discovery dance. We give you a tight
              scope and an honest price — whether you hire us or not.
            </p>
          </div>
          <Link href="/contact" className="btn-primary self-start sm:self-auto">
            Start a diagnostic
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="relative mt-10 sm:mt-14">
          {/* Connecting line — desktop only, runs through the icon row */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden lg:block"
          >
            <span
              data-ep-line
              className="block h-px w-full origin-left bg-carbon-950/[0.12]"
            />
          </div>

          <ol className="relative grid gap-5 lg:grid-cols-3 lg:gap-8">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  data-ep-step
                  className="group relative rounded-3xl border border-carbon-950/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:border-carbon-950/30 hover:shadow-[0_24px_40px_-24px_rgba(10,10,10,0.16)] sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-carbon-950 text-white transition group-hover:bg-carbon-700">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                        Step · {s.n}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-500">
                        {s.duration}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-carbon-950 sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                    {s.body}
                  </p>

                  <p className="mt-5 border-t border-carbon-950/[0.08] pt-4 text-xs leading-relaxed text-carbon-700">
                    <span className="font-mono uppercase tracking-[0.18em] text-carbon-400">
                      You get →
                    </span>{" "}
                    {s.deliverable}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
