"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
  invert?: boolean;
};

export default function Marquee({
  children,
  speed = 40,
  className = "",
  invert = false,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -half,
      duration: half / speed,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div
      className={`relative overflow-hidden ${
        invert ? "bg-carbon-950 text-white" : "bg-[rgb(252,251,249)] text-carbon-950"
      } ${className}`}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-12 whitespace-nowrap"
      >
        {[...Array(2)].map((_, copy) => (
          <div key={copy} className="flex items-center gap-12">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
