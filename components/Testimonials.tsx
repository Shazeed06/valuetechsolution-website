"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = ref.current?.querySelectorAll("[data-w]") ?? [];
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const quote =
    "Their AI agent handles our entire lead routing and onboarding flow. We didn't hire two ops people we'd planned to — that's the whole story.";
  const words = quote.split(" ");

  return (
    <section className="section">
      <div className="container-x">
        <div ref={ref} className="mx-auto max-w-5xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            (testimonial)
          </span>
          <p className="mt-10 font-display text-3xl font-medium leading-[1.18] tracking-[-0.025em] text-carbon-950 sm:text-4xl lg:text-[3rem] lg:leading-[1.12]">
            <span className="italic-accent text-carbon-500">"</span>
            {words.map((w, i) => (
              <span key={i} data-w className="inline-block">
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
            <span className="italic-accent text-carbon-500">"</span>
          </p>
          <div className="mt-10 flex items-center gap-4 border-t border-carbon-950/[0.08] pt-6">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-carbon-950 font-display text-lg font-bold text-white">
              D
            </span>
            <div>
              <p className="font-medium text-carbon-950">Daniel Okafor</p>
              <p className="text-sm text-carbon-400">
                Founder · Coastline Exports
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
