"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current?.querySelectorAll("span") ?? [],
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="border-y border-carbon-950/[0.08] py-24 text-center sm:py-32 lg:py-40">
          <span className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            (let's talk)
          </span>

          <h2 ref={ref} className="heading-display mt-10 text-6xl sm:text-7xl lg:text-[10rem] lg:leading-[0.9]">
            <span className="block overflow-hidden">
              <span className="block">Let's give your team</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block italic-accent text-carbon-500">
                40 hours back.
              </span>
            </span>
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            <Link href="/contact" className="btn-primary">
              Book a strategy call <ArrowUpRight size={15} />
            </Link>
            <a href="mailto:hello@valuetech.io" className="btn-link">
              hello@valuetech.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
