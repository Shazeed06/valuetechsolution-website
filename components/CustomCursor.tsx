"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Premium two-layer cursor.
 *  - Outer ring lerps slowly (calm, follows the cursor with delay)
 *  - Inner dot lerps fast (precise, sits at pointer)
 *  - On hover over interactive elements (a, button, [data-cursor]) the
 *    outer ring scales up + softens the dot.
 *  - When an element has `data-cursor="View"` (or any text), that text
 *    appears inside the ring.
 *  - Scroll velocity gently squashes the ring vertically.
 *  - mix-blend-difference keeps it visible on light + dark sections.
 *  - Auto-disabled on touch / coarse pointer devices.
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

    // Hide native cursor on body when the custom cursor is active
    document.documentElement.style.setProperty("cursor", "none");
    document.body.style.cursor = "none";
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-vts-cursor", "");
    styleEl.textContent = `
      a, button, [role="button"], input, textarea, select, label,
      [data-cursor], [data-cursor-hover] { cursor: none !important; }
    `;
    document.head.appendChild(styleEl);

    const ring = ringRef.current!;
    const dot = dotRef.current!;
    const label = labelRef.current!;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let dx = -100;
    let dy = -100;
    let scale = 1;
    let targetScale = 1;
    let opacity = 1;
    let dotOpacity = 1;
    let scrollSkewY = 1;
    let targetSkewY = 1;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Reveal cursor on first move after page load
      ring.style.opacity = String(opacity);
      dot.style.opacity = String(dotOpacity);
    };

    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      ring.style.opacity = String(opacity);
      dot.style.opacity = String(dotOpacity);
    };

    // Hover detection — bubbles up to find any interactive ancestor
    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor], [data-cursor-hover]'
      );
      const cursorText = interactive?.getAttribute("data-cursor");

      if (interactive) {
        targetScale = cursorText ? 3.4 : 1.7;
        dotOpacity = cursorText ? 0 : 0.4;
        label.textContent = cursorText ?? "";
        label.style.opacity = cursorText ? "1" : "0";
        ring.classList.add("vts-cursor-active");
      } else {
        targetScale = 1;
        dotOpacity = 1;
        label.textContent = "";
        label.style.opacity = "0";
        ring.classList.remove("vts-cursor-active");
      }
      dot.style.opacity = String(dotOpacity);
    };

    const onScroll = () => {
      // measure scroll velocity to softly squash the ring
      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      const dy = window.scrollY - lastScroll;
      const v = Math.min(Math.abs(dy / dt) * 8, 0.6);
      targetSkewY = 1 - v * 0.4 + 0; // squash vertically
      lastScroll = window.scrollY;
      lastTime = now;
    };

    let raf = 0;
    const tick = () => {
      // ring follows slowly, dot follows fast
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      dx += (mx - dx) * 0.32;
      dy += (my - dy) * 0.32;

      scale += (targetScale - scale) * 0.18;
      scrollSkewY += (targetSkewY - scrollSkewY) * 0.2;
      // ease scroll squash back to 1
      targetSkewY += (1 - targetSkewY) * 0.1;

      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale.toFixed(
        3
      )}) scaleY(${scrollSkewY.toFixed(3)})`;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.removeProperty("cursor");
      document.body.style.cursor = "";
      styleEl.remove();
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-white opacity-0 mix-blend-difference will-change-transform md:block"
        style={{
          transition: "background-color 240ms ease, border-color 240ms ease",
        }}
      >
        <span
          ref={labelRef}
          className="absolute inset-0 grid place-items-center text-[8px] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-200"
          style={{ letterSpacing: "0.18em" }}
        />
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 rounded-full bg-white opacity-0 mix-blend-difference will-change-transform md:block"
      />
      <style jsx global>{`
        .vts-cursor-active {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.95);
        }
      `}</style>
    </>
  );
}
