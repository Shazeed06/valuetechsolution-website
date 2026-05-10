"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export default function AnimatedNumber({
  value,
  duration = 1.6,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const target = ref.current;
    const tween = gsap.to(obj, {
      v: value,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        target.textContent =
          prefix + obj.v.toFixed(decimals) + suffix;
      },
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, duration, suffix, prefix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
