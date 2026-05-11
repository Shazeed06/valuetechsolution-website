"use client";

import { useEffect, useRef } from "react";

/**
 * Hero backdrop — an animated agent-network visualisation layered over
 * a slow aurora gradient mesh.
 *
 * Why canvas, not Three.js:
 *  • The old HeroScene3D pulled ~150KB of WebGL for a static-feeling
 *    node graph. This file is ~6KB, animates more dynamically, and
 *    actually tells the brand story (data flowing between agents).
 *
 * Performance notes:
 *  • Deterministic Mulberry32 PRNG seeded with the same value every
 *    mount, so the node positions don't shift between renders.
 *  • Mobile-aware: fewer nodes and a shorter connect-distance at
 *    narrow widths.
 *  • IntersectionObserver pauses the rAF loop the moment the user
 *    scrolls the hero off-screen — no battery drain elsewhere.
 *  • Respects prefers-reduced-motion: renders a single static frame
 *    instead of animating.
 *  • Devicepixelratio-aware so the lines stay crisp on retina.
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

    type Node = { x: number; y: number; r: number; phase: number };
    type Edge = { a: number; b: number; length: number };
    type Packet = {
      edgeIdx: number;
      t: number;
      speed: number;
      hue: number;
    };

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let packets: Packet[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let raf = 0;
    let visible = true;

    // Mulberry32 — deterministic so layout doesn't flicker on remount
    function makeRng(seed: number) {
      let t = seed >>> 0;
      return () => {
        t = (t + 0x6d2b79f5) >>> 0;
        let x = Math.imul(t ^ (t >>> 15), t | 1);
        x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
        return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
      };
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    }

    function buildGraph() {
      const rand = makeRng(0xdeadbeef);
      const narrow = w < 720;
      const count = narrow ? 16 : 28;
      const range = narrow ? 190 : 240;

      nodes = [];
      // Push some structure — bias the layout so the right side of the
      // hero (where text is lighter) keeps a denser cluster. Looks more
      // intentional than pure noise.
      for (let i = 0; i < count; i++) {
        const xPull = 0.35 + rand() * 0.6;
        nodes.push({
          x: w * xPull,
          y: h * (0.1 + rand() * 0.85),
          r: 1.3 + rand() * 1.8,
          phase: rand() * Math.PI * 2,
        });
      }

      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < range) edges.push({ a: i, b: j, length: d });
        }
      }

      packets = [];
      const packetCount = Math.min(
        narrow ? 10 : 18,
        Math.max(4, Math.floor(edges.length * 0.25))
      );
      for (let i = 0; i < packetCount; i++) {
        packets.push({
          edgeIdx: Math.floor(rand() * edges.length),
          t: rand(),
          speed: 0.0014 + rand() * 0.0028,
          hue: rand() > 0.5 ? 152 : 198, // emerald-ish or sky-ish
        });
      }
    }

    function step(time: number) {
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);

      // Edges — fade by length so short ones look stronger
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const alpha = 0.04 + 0.06 * (1 - e.length / 260);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Packets — travel along edges with a glowing trail
      for (const p of packets) {
        if (!reduceMotion) p.t += p.speed;
        if (p.t >= 1) {
          p.t = 0;
          // hop to a different edge so packets visually traverse the
          // graph rather than ping-ponging on one line
          const next = Math.floor(Math.random() * edges.length);
          p.edgeIdx = next;
        }
        const e = edges[p.edgeIdx];
        if (!e) continue;
        const a = nodes[e.a];
        const b = nodes[e.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 16);
        glow.addColorStop(0, `hsla(${p.hue}, 85%, 70%, 0.85)`);
        glow.addColorStop(1, `hsla(${p.hue}, 85%, 70%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 95%, 80%, 1)`;
        ctx.beginPath();
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nodes with subtle pulse + cursor halo
      for (const n of nodes) {
        const pulse = reduceMotion
          ? 1
          : 0.85 + Math.sin(t * 1.4 + n.phase) * 0.18;
        const d = Math.hypot(n.x - mouseX, n.y - mouseY);
        const near = Math.max(0, 1 - d / 200);
        const r = n.r * pulse * (1 + near * 1.4);
        const baseAlpha = 0.35 + near * 0.55;

        ctx.fillStyle = `rgba(255,255,255,${baseAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (near > 0.18) {
          const h = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 8);
          h.addColorStop(0, `rgba(110,225,200,${near * 0.35})`);
          h.addColorStop(1, "rgba(110,225,200,0)");
          ctx.fillStyle = h;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (visible && !reduceMotion) raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }
    function onLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    resize();
    if (reduceMotion) {
      // single static frame
      step(0);
    } else {
      raf = requestAnimationFrame(step);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

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
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-carbon-950">
      {/* Aurora gradient mesh — three soft drifting blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-20%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-emerald-500/[0.12] blur-[120px] animate-blob-1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-15%] h-[36rem] w-[36rem] rounded-full bg-sky-500/[0.10] blur-[140px] animate-blob-2"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[30%] h-[44rem] w-[44rem] rounded-full bg-violet-500/[0.08] blur-[150px] animate-blob-1"
        style={{ animationDelay: "-9s" }}
      />

      {/* Crisp grid for engineering vibe */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 100% 80% at center, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at center, black 30%, transparent 90%)",
        }}
      />

      {/* Live network canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />

      {/* Subtle vignette so text always reads */}
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
