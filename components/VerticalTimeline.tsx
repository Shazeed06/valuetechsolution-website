"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phases = [
  {
    n: "T.01",
    title: "Discovery week",
    duration: "Week 1",
    body: "Workflow audit, integration map, success metrics. We leave with a written scope you sign off on.",
  },
  {
    n: "T.02",
    title: "Design + scoping",
    duration: "Week 2",
    body: "Figma flows for the agent UX, eval criteria for the model, integration tests. You see the proposal before code.",
  },
  {
    n: "T.03",
    title: "Build",
    duration: "Weeks 3–5",
    body: "Iterative builds with weekly demos. Eval suite runs in CI. Observability shipped before anything talks to production traffic.",
  },
  {
    n: "T.04",
    title: "Soft launch",
    duration: "Week 6",
    body: "Agent runs on real traffic with human-in-the-loop. Drafts reviewed, edits learned. Confidence scoring tuned.",
  },
  {
    n: "T.05",
    title: "Hand-off + tune",
    duration: "Week 7+",
    body: "Runbooks, training session, dashboard handover. 30-day post-launch tuning included on every engagement.",
  },
];

export default function VerticalTimeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current || !wrap.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 50%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );

      const dots = wrap.current.querySelectorAll<HTMLElement>("[data-dot]");
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0.4, backgroundColor: "rgba(10,10,10,0.15)" },
          {
            scale: 1,
            backgroundColor: "#0a0a0a",
            scrollTrigger: {
              trigger: dot,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            (timeline)
          </span>
          <h2 className="heading-lg mt-8">
            Six weeks.{" "}
            <span className="italic-accent text-carbon-500">
              From scope to live agent.
            </span>
          </h2>
        </div>

        <div ref={wrap} className="relative mx-auto mt-20 max-w-3xl">
          {/* Background track */}
          <div className="absolute left-6 top-0 h-full w-px bg-carbon-950/[0.08] sm:left-1/2 sm:-translate-x-1/2" />
          {/* Animated progress line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-px origin-top bg-carbon-950 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-16">
            {phases.map((p, i) => (
              <div
                key={p.n}
                className={`relative grid grid-cols-12 gap-4 sm:gap-12 ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div className="col-span-12 pl-16 sm:col-span-6 sm:pl-0">
                  <div
                    className={`rounded-3xl border border-carbon-950/[0.08] bg-white p-7 ${
                      i % 2 === 0 ? "sm:text-right" : ""
                    }`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {p.n} · {p.duration}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-carbon-500">{p.body}</p>
                  </div>
                </div>
                {/* Dot */}
                <div
                  data-dot
                  className="absolute left-6 top-7 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-[rgb(252,251,249)] sm:left-1/2"
                />
                <div className="hidden sm:col-span-6 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
