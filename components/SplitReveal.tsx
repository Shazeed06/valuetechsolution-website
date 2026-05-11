"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  stagger?: number;
  trigger?: "load" | "scroll";
  y?: number;
};

export default function SplitReveal({
  children,
  delay = 0,
  className = "",
  stagger = 0.07,
  trigger = "scroll",
  y = 60,
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current) return;
    const root = wrap.current;
    const items = root.querySelectorAll<HTMLElement>("[data-split]");
    if (!items.length) return;

    items.forEach((el) => {
      const inner = el.querySelector<HTMLElement>("[data-split-inner]");
      if (inner) {
        gsap.set(inner, { yPercent: 100 });
      }
    });

    const tl = gsap.timeline({ delay });
    items.forEach((el) => {
      const inner = el.querySelector<HTMLElement>("[data-split-inner]");
      tl.to(
        inner ?? el,
        {
          yPercent: 0,
          y: 0,
          duration: 1,
          ease: "expo.out",
        },
        `-=${1 - stagger}`
      );
    });

    if (trigger === "scroll") {
      ScrollTrigger.create({
        trigger: root,
        start: "top 80%",
        once: true,
        onEnter: () => tl.play(0),
      });
      tl.pause();
    } else {
      tl.play();
    }

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrap} className={className}>
      {children}
    </div>
  );
}

export function Line({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    // pb-[0.18em] gives italic descenders ("g", "k" tail, periods) room
    // inside the overflow:hidden box that powers the slide-up reveal.
    // Without it, letterforms get visibly clipped at the bottom edge.
    <span
      data-split
      className={`block overflow-hidden pb-[0.18em] ${className}`}
    >
      <span data-split-inner className="block">
        {children}
      </span>
    </span>
  );
}
