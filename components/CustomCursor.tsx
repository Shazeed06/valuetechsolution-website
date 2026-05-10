"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Black two-layer cursor.
 *  - Outer ring lerps slowly (calm, follows pointer with delay)
 *  - Inner dot lerps fast (precise, sits at pointer)
 *  - Ring scales 1.7× on hover over interactive elements.
 *  - data-cursor="X" sets a small label inside the ring (X up to 5 chars).
 *  - pointer-events-none on both layers — never blocks clicks.
 *  - Auto-disabled on touch / coarse-pointer devices.
 *
 *  Native cursor is hidden via static CSS (see globals.css) only on
 *  hover-capable devices, so accessibility is preserved on touch.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!canHover) return;
    setEnabled(true);

    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!ring || !dot || !label) return;

    // Mark body so global CSS can hide native cursor (see globals.css)
    document.documentElement.classList.add("vts-cursor-on");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let dx = mx;
    let dy = my;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );
      const cursorText = interactive?.getAttribute("data-cursor");

      if (interactive) {
        targetScale = cursorText ? 2.6 : 1.7;
        if (cursorText) {
          label.textContent = cursorText;
          label.style.opacity = "1";
          dot.style.opacity = "0";
        } else {
          label.textContent = "";
          label.style.opacity = "0";
          dot.style.opacity = "0.5";
        }
      } else {
        targetScale = 1;
        label.textContent = "";
        label.style.opacity = "0";
        dot.style.opacity = "1";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dx += (mx - dx) * 0.34;
      dy += (my - dy) * 0.34;
      scale += (targetScale - scale) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale.toFixed(
        3
      )})`;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("vts-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border-2 border-carbon-950 opacity-0 transition-[background-color] duration-200 will-change-transform md:block"
      >
        <span
          ref={labelRef}
          className="absolute inset-0 grid place-items-center text-[8px] font-bold uppercase tracking-[0.18em] text-carbon-950 opacity-0 transition-opacity duration-200"
        />
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-carbon-950 opacity-0 will-change-transform md:block"
      />
    </>
  );
}
