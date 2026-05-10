"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

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
        { opacity: 0.18 },
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

      gsap.from("[data-portrait]", {
        opacity: 0,
        scale: 1.04,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const quote =
    "Their AI agent handles our entire lead routing and onboarding flow. We didn't hire two ops people we'd planned to — that's the whole story.";
  const words = quote.split(" ");

  return (
    <section className="section">
      <div ref={ref} className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Portrait + meta */}
          <div className="lg:col-span-5">
            <div
              data-portrait
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-carbon-950/[0.08]"
            >
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80"
                alt="Founder portrait — Daniel Okafor"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover grayscale contrast-110"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
              />

              {/* Top-left chip */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-carbon-950 opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-carbon-950" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-950">
                  client · 2026
                </span>
              </div>

              {/* Bottom name card */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">
                    Daniel Okafor
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                    T.01
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/75">
                  Founder · Coastline Exports
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/55">
                    engagement
                  </p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/85">
                    AI lead-routing · 5 weeks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              (testimonial)
            </span>

            <Quote
              size={36}
              className="mt-8 text-carbon-950/30"
              strokeWidth={1.5}
            />

            <p className="mt-6 font-display text-3xl font-medium leading-[1.18] tracking-[-0.025em] text-carbon-950 sm:text-4xl lg:text-[3rem] lg:leading-[1.12]">
              <span className="italic-accent text-carbon-500">&ldquo;</span>
              {words.map((w, i) => (
                <span key={i} data-w className="inline-block">
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
              <span className="italic-accent text-carbon-500">&rdquo;</span>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-carbon-950/[0.08] pt-8">
              <Stat label="ops people not hired" value="2" />
              <Stat label="hours saved / week" value="26" />
              <Stat label="response time" value="4h → 47s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-500">
        {label}
      </p>
    </div>
  );
}
