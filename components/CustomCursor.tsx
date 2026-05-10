"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 32, mass: 0.4 });
  const scale = useMotionValue(1);
  const sScale = useSpring(scale, { stiffness: 300, damping: 22 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with hover (desktops). Skip touch.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], input, textarea, [data-cursor="hover"]'
      );
      setHovered(!!interactive);
      scale.set(interactive ? 2.4 : 1);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, scale]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ref}
        aria-hidden
        style={{
          x: sx,
          y: sy,
          scale: sScale,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-3 -mt-3 hidden h-6 w-6 rounded-full border border-carbon-950/40 mix-blend-difference md:block"
      />
      {/* Inner dot */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 hidden h-2 w-2 rounded-full transition-opacity md:block ${
          hovered ? "opacity-0" : "bg-carbon-950 mix-blend-difference"
        }`}
      />
    </>
  );
}
