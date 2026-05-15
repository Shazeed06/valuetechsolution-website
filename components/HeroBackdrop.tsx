"use client";

import { useEffect, useRef } from "react";

/**
 * Hero backdrop — rotating constellation.
 *
 * A starfield slowly rotating around the hero's centre with thin
 * connection lines drawn between any two stars within a small radius
 * (alpha fades with distance). A handful of brighter "comet" streaks
 * cross the canvas every few seconds for ambient surprise. Behind it
 * sits a quiet aurora gradient (emerald / sky / violet) so the
 * canvas isn't just monochrome on flat black.
 *
 * Engineering choices:
 *  - Deterministic Mulberry32 PRNG so layout is identical on every
 *    mount; no flicker on hot reload.
 *  - Mobile-aware: fewer stars + tighter connect-radius below 720px.
 *  - DPR clamped at 2x — sharp on retina without exploding memory.
 *  - IntersectionObserver pauses the rAF loop the second the hero
 *    leaves the viewport (no battery drain anywhere else on the page).
 *  - Respects prefers-reduced-motion: renders one static frame.
 */
export default function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Star = { x: number; y: number; r: number; tw: number };
    type Comet = { x: number; y: number; vx: number; vy: number; life: number };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let comets: Comet[] = [];
    let raf = 0;
    let visible = true;
    let lastCometAt = 0;

    // NOTE: these are const arrow functions, not `function` declarations.
    // Function declarations are hoisted, so TS won't propagate the
    // `canvas` / `ctx` non-null narrowing from the if-checks above into
    // their bodies. Arrow functions assigned to const get type-checked
    // at their position in source, so narrowing flows in cleanly.

    const makeRng = (seed: number) => {
      let t = seed >>> 0;
      return () => {
        t = (t + 0x6d2b79f5) >>> 0;
        let x = Math.imul(t ^ (t >>> 15), t | 1);
        x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
        return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
      };
    };

    const buildStars = () => {
      const rand = makeRng(0xc0ffee);
      const narrow = w < 720;
      const count = narrow ? 80 : 150;
      stars = Array.from({ length: count }, () => ({
        x: rand() * w,
        y: rand() * h,
        // Slightly bigger range so most stars are readable on dark.
        r: 0.6 + rand() * 1.6,
        tw: rand() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const step = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const angle = t * 0.018; // very slow rotation
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Project each star into a rotated frame each tick. This is the
      // simple O(n) version — for ~150 stars on a hero it's well under
      // a millisecond per frame.
      const rotated = stars.map((s) => {
        const dx = s.x - cx;
        const dy = s.y - cy;
        return {
          x: cx + dx * cos - dy * sin,
          y: cy + dx * sin + dy * cos,
          r: s.r,
          tw: s.tw,
        };
      });

      // Connection lines — only draw if stars are within `range` px.
      const narrow = w < 720;
      const range = narrow ? 90 : 120;
      const rangeSq = range * range;
      for (let i = 0; i < rotated.length; i++) {
        const a = rotated[i];
        for (let j = i + 1; j < rotated.length; j++) {
          const b = rotated[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 > rangeSq) continue;
          const d = Math.sqrt(d2);
          const alpha = 0.32 * (1 - d / range);
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Stars themselves, with a gentle twinkle
      for (let i = 0; i < rotated.length; i++) {
        const s = rotated[i];
        const tw = reduceMotion
          ? 0.92
          : 0.7 + Math.sin(time * 0.002 + s.tw) * 0.3;
        ctx.fillStyle = `rgba(255,255,255,${tw})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Comets — bright streaks that arc diagonally across the hero
      // every 4-8 seconds. Adds life without polluting the constellation.
      if (!reduceMotion) {
        if (time - lastCometAt > 4500 + Math.random() * 3500 && comets.length < 2) {
          const fromLeft = Math.random() > 0.5;
          comets.push({
            x: fromLeft ? -20 : w + 20,
            y: Math.random() * h * 0.7 + h * 0.1,
            vx: (fromLeft ? 1 : -1) * (3 + Math.random() * 2),
            vy: 1.4 + Math.random() * 1.2,
            life: 1,
          });
          lastCometAt = time;
        }
        comets = comets.filter((c) => {
          c.x += c.vx;
          c.y += c.vy;
          c.life -= 0.006;
          // Trail
          const tailLen = 80;
          const grad = ctx.createLinearGradient(
            c.x,
            c.y,
            c.x - c.vx * (tailLen / 5),
            c.y - c.vy * (tailLen / 5)
          );
          grad.addColorStop(0, `rgba(180,255,210,${0.9 * c.life})`);
          grad.addColorStop(1, "rgba(180,255,210,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(c.x - c.vx * (tailLen / 5), c.y - c.vy * (tailLen / 5));
          ctx.stroke();
          // Bright head
          ctx.fillStyle = `rgba(220,255,230,${c.life})`;
          ctx.beginPath();
          ctx.arc(c.x, c.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
          return (
            c.life > 0 &&
            c.x > -100 &&
            c.x < w + 100 &&
            c.y > -100 &&
            c.y < h + 100
          );
        });
      }

      if (visible && !reduceMotion) raf = requestAnimationFrame(step);
    };

    resize();
    if (reduceMotion) step(0);
    else raf = requestAnimationFrame(step);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible && !raf && !reduceMotion) {
            raf = requestAnimationFrame(step);
          } else if (!visible && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-carbon-950">
      {/* Quiet aurora behind the constellation — gives the black some
          warmth without competing with the stars. */}
      {/*
        Aurora opacities tuned for mobile + desktop parity. The blobs
        sit at fixed pixel sizes, so on a wider desktop viewport they
        cover less of the screen, while overlapping more on mobile.
        Lower opacities give the same balanced "subtle colour glow"
        feel on both — heavy aurora was washing out the desktop hero.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[5%] h-[36rem] w-[36rem] rounded-full bg-emerald-500/[0.18] blur-[120px] animate-blob-1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-sky-500/[0.14] blur-[120px] animate-blob-2"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[28%] h-[40rem] w-[40rem] rounded-full bg-violet-500/[0.12] blur-[130px] animate-blob-1"
        style={{ animationDelay: "-9s" }}
      />

      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
