"use client";

import React from "react";

export default function HeroHaikeiBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 select-none"
      aria-hidden="true"
    >
      {/* ── Ambient Radial Brand Glows ── */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#fea800]/12 via-[#1ab9a2]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-[#1ab9a2]/15 via-[#fb72cc]/10 to-transparent rounded-full blur-3xl" />

      {/* ── Haikei Signature Pure Vector SVG Layered Waves ── */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-90 transition-opacity duration-700"
      >
        <defs>
          {/* Layer 1: Soft Translucent Seafoam & Warm Base Transition */}
          <linearGradient id="hkWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ab9a2" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#1dd3b9" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#127a6b" stopOpacity="0.22" />
          </linearGradient>

          {/* Layer 2: Vibrant Mid-Tone Studio Teal Ribbon */}
          <linearGradient id="hkWaveGrad2" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#1dd3b9" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#1ab9a2" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#0d6154" stopOpacity="0.44" />
          </linearGradient>

          {/* Layer 3: Deep Sculptural Teal Backdrop (Behind Showcase) */}
          <linearGradient id="hkWaveGrad3" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#1ab9a2" stopOpacity="0.40" />
            <stop offset="40%" stopColor="#148373" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#094a3f" stopOpacity="0.70" />
          </linearGradient>

          {/* Layer 4: Deepest Accent Vibe Silhouette */}
          <linearGradient id="hkWaveGrad4" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#127a6b" stopOpacity="0.60" />
            <stop offset="60%" stopColor="#0a4d42" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#062b25" stopOpacity="0.92" />
          </linearGradient>

          {/* Wave Crest Specular Highlight Stroke */}
          <linearGradient id="hkCrestHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#79fff3" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>

          {/* Realistic 3D Layer Shadows (Emulating Haikei Papercut & Wave Depth) */}
          <filter id="hkLayerShadow1" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="-10" dy="6" stdDeviation="16" floodColor="#062b25" floodOpacity="0.12" />
          </filter>

          <filter id="hkLayerShadow2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-16" dy="10" stdDeviation="24" floodColor="#062b25" floodOpacity="0.18" />
          </filter>

          <filter id="hkLayerShadow3" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="-22" dy="14" stdDeviation="32" floodColor="#062b25" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ── WAVE 1: Outer Sweeping Curve (Soft Transition) ── */}
        <path
          d="M 500,0 C 380,220 340,460 410,640 C 470,800 550,860 620,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad1)"
          filter="url(#hkLayerShadow1)"
        />

        {/* ── WAVE 2: Signature Middle Ribbon (Vibrant Teal Depth) ── */}
        <path
          d="M 680,0 C 540,240 480,480 560,660 C 630,810 720,865 800,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad2)"
          filter="url(#hkLayerShadow2)"
        />

        {/* Subtle Specular Stroke on Wave 2 Ridge */}
        <path
          d="M 680,0 C 540,240 480,480 560,660 C 630,810 720,865 800,900"
          fill="none"
          stroke="url(#hkCrestHighlight)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-70"
        />

        {/* ── WAVE 3: Deep Sculptural Layer (Directly Behind Mockup) ── */}
        <path
          d="M 880,0 C 720,260 660,500 740,680 C 810,820 910,870 1000,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad3)"
          filter="url(#hkLayerShadow3)"
        />

        {/* Subtle Specular Stroke on Wave 3 Ridge */}
        <path
          d="M 880,0 C 720,260 660,500 740,680 C 810,820 910,870 1000,900"
          fill="none"
          stroke="url(#hkCrestHighlight)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-50"
        />

        {/* ── WAVE 4: Deepest Vibe Silhouette (Far Right Edge) ── */}
        <path
          d="M 1080,0 C 920,280 870,520 950,700 C 1020,830 1120,875 1200,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad4)"
        />

        {/* Fine Contour Fluid Lines for Modern Generative Studio Texture */}
        <path
          d="M 460,0 C 340,240 300,490 380,680 C 440,820 530,875 600,900"
          fill="none"
          stroke="#1ab9a2"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />
        <path
          d="M 760,0 C 620,260 570,510 650,700 C 720,840 820,880 900,900"
          fill="none"
          stroke="#79fff3"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.3"
        />
      </svg>

      {/* ── Haikei Signature Floating Disc Accent (Top-Left Composition) ── */}
      <div className="hidden sm:flex absolute top-28 left-8 sm:left-12 lg:left-16 items-center gap-3 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/90 shadow-sm opacity-90 transition-transform duration-500 hover:scale-105">
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[11px] font-bold text-[#141414] tracking-tight">
          Next.js 16 Web Studio
        </span>
      </div>
    </div>
  );
}
