import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  theme?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-8 h-8", theme = "auto" }: { className?: string; theme?: "dark" | "light" | "auto" }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Modern high-tech gradient */}
        <linearGradient id="vtArrowGrad" x1="8" y1="36" x2="38" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1ab9a2" />
          <stop offset="60%" stopColor="#1dd3b9" />
          <stop offset="100%" stopColor="#25f5d8" />
        </linearGradient>
        <linearGradient id="vtVGradDark" x1="6" y1="10" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>
        <linearGradient id="vtVGradLight" x1="6" y1="10" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
      </defs>

      {/* Rounded squircle backdrop badge for high-end app identity */}
      <rect
        x="2"
        y="2"
        width="40"
        height="40"
        rx="12"
        className={theme === "light" ? "fill-white/10 stroke-white/20" : "fill-[#141414] stroke-black/5"}
        strokeWidth="1"
      />

      {/* Stylized 'V' Left Arm & Apex */}
      <path
        d="M10 12H16.8L21.2 26.5L18.4 27.5L10 12Z"
        fill={theme === "light" ? "url(#vtVGradLight)" : "#ffffff"}
      />
      
      {/* Stylized 'V' Right Base */}
      <path
        d="M20 29.5L16.2 33H22L25 25L21.5 24.5L20 29.5Z"
        fill={theme === "light" ? "url(#vtVGradLight)" : "#ffffff"}
      />

      {/* Soaring Kinetic Arrow cutting through the V to the top-right */}
      <path
        d="M9 28C14.5 25.5 20.5 20 27.5 12.5L24 10H34V20L30.5 16.5C24.5 23 18 28.5 9 28Z"
        fill="url(#vtArrowGrad)"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  iconOnly = false,
  theme = "auto",
  size = "md",
}: LogoProps) {
  const sizeMap = {
    sm: {
      icon: "w-7 h-7",
      title: "text-base",
      sub: "text-[8px] tracking-[0.2em]",
      gap: "gap-2",
    },
    md: {
      icon: "w-9 h-9",
      title: "text-lg sm:text-xl",
      sub: "text-[9px] tracking-[0.22em]",
      gap: "gap-2.5",
    },
    lg: {
      icon: "w-11 h-11",
      title: "text-2xl sm:text-3xl",
      sub: "text-[10px] tracking-[0.25em]",
      gap: "gap-3",
    },
  };

  const s = sizeMap[size];
  const isLight = theme === "light";

  return (
    <div className={`inline-flex items-center ${s.gap} group select-none ${className}`}>
      {/* Icon */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoIcon className={s.icon} theme={theme} />
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center">
            <span
              className={`font-montserrat font-black tracking-tight ${s.title} ${
                isLight ? "text-white" : "text-[#141414]"
              } transition-colors group-hover:text-primary`}
            >
              VALUE TECH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary ml-1 group-hover:scale-125 transition-transform" />
          </div>
          <span
            className={`font-montserrat font-bold uppercase ${s.sub} mt-1 ${
              isLight ? "text-white/60" : "text-[#7d7b77]"
            }`}
          >
            SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
}
