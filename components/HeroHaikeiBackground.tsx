"use client";

import React from "react";

export default function HeroHaikeiBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      {/* ── Ambient Radial Brand Glows ── */}
      <div className="absolute -top-24 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#fea800]/18 via-[#1ab9a2]/12 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-[750px] h-[750px] bg-gradient-to-bl from-[#1ab9a2]/25 via-[#fb72cc]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ── Haikei Signature Pure Vector SVG Layered Waves (High Visibility & Rich Contrast) ── */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          {/* Layer 1: Outer Flowing Wave (Soft Seafoam Transition) */}
          <linearGradient id="hkWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ab9a2" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#1dd3b9" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#127a6b" stopOpacity="0.38" />
          </linearGradient>

          {/* Layer 2: Vibrant Mid-Tone Studio Teal Ribbon */}
          <linearGradient id="hkWaveGrad2" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#25f5d8" stopOpacity="0.40" />
            <stop offset="45%" stopColor="#1ab9a2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0d6154" stopOpacity="0.70" />
          </linearGradient>

          {/* Layer 3: Deep Sculptural Teal Backdrop (Behind Device Showcase) */}
          <linearGradient id="hkWaveGrad3" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#1ab9a2" stopOpacity="0.70" />
            <stop offset="40%" stopColor="#148373" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#094a3f" stopOpacity="0.95" />
          </linearGradient>

          {/* Layer 4: Deepest Silhouette Contour (Rightmost Edge) */}
          <linearGradient id="hkWaveGrad4" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#127a6b" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0a4d42" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#062b25" stopOpacity="1.0" />
          </linearGradient>

          {/* Wave Crest Specular Highlight Stroke */}
          <linearGradient id="hkCrestHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#79fff3" stopOpacity="0.60" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.20" />
          </linearGradient>

          {/* Realistic 3D Layer Shadows (True Haikei Papercut & Wave Depth) */}
          <filter id="hkLayerShadow1" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-10" dy="6" stdDeviation="14" floodColor="#062b25" floodOpacity="0.16" />
          </filter>

          <filter id="hkLayerShadow2" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="-16" dy="10" stdDeviation="20" floodColor="#062b25" floodOpacity="0.22" />
          </filter>

          <filter id="hkLayerShadow3" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="-22" dy="14" stdDeviation="28" floodColor="#062b25" floodOpacity="0.30" />
          </filter>
        </defs>

        {/* ── WAVE 1: Outer Sweeping Curve (Soft Transition) ── */}
        <path
          d="M 520,0 C 400,220 360,460 430,640 C 490,800 570,860 640,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad1)"
          filter="url(#hkLayerShadow1)"
        />

        {/* ── WAVE 2: Signature Middle Ribbon (Vibrant Teal Depth) ── */}
        <path
          d="M 700,0 C 560,240 500,480 580,660 C 650,810 740,865 820,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad2)"
          filter="url(#hkLayerShadow2)"
        />

        {/* Specular Highlight on Wave 2 Ridge */}
        <path
          d="M 700,0 C 560,240 500,480 580,660 C 650,810 740,865 820,900"
          fill="none"
          stroke="url(#hkCrestHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-80"
        />

        {/* ── WAVE 3: Deep Sculptural Layer (Directly Behind Mockup) ── */}
        <path
          d="M 900,0 C 740,260 680,500 760,680 C 830,820 930,870 1020,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad3)"
          filter="url(#hkLayerShadow3)"
        />

        {/* Specular Highlight on Wave 3 Ridge */}
        <path
          d="M 900,0 C 740,260 680,500 760,680 C 830,820 930,870 1020,900"
          fill="none"
          stroke="url(#hkCrestHighlight)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-60"
        />

        {/* ── WAVE 4: Deepest Vibe Silhouette (Far Right Edge) ── */}
        <path
          d="M 1100,0 C 940,280 890,520 970,700 C 1040,830 1140,875 1220,900 L 1440,900 L 1440,0 Z"
          fill="url(#hkWaveGrad4)"
        />

        {/* Fine Contour Fluid Lines for Modern Generative Studio Texture */}
        <path
          d="M 480,0 C 360,240 320,490 400,680 C 460,820 550,875 620,900"
          fill="none"
          stroke="#1ab9a2"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity="0.4"
        />
        <path
          d="M 780,0 C 640,260 590,510 670,700 C 740,840 840,880 920,900"
          fill="none"
          stroke="#79fff3"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
