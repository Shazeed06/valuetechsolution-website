import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium black & white system. Keys (cream/olive/brand/accent/ink)
        // are remapped to neutral grays so legacy classes flip cleanly.
        snow: {
          0: "#ffffff",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#dcdcdc",
        },
        carbon: {
          50: "#e5e5e5",
          100: "#bfbfbf",
          200: "#8a8a8a",
          300: "#5e5e5e",
          400: "#3a3a3a",
          500: "#262626",
          600: "#1a1a1a",
          700: "#111111",
          800: "#0a0a0a",
          900: "#050505",
          950: "#000000",
        },
        cream: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#ebebeb",
        },
        olive: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#171717",
          900: "#0a0a0a",
          950: "#000000",
        },
        brand: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#404040",
          600: "#262626",
          700: "#171717",
          800: "#0a0a0a",
          900: "#050505",
          950: "#000000",
        },
        accent: {
          300: "#a3a3a3",
          400: "#737373",
          500: "#404040",
          600: "#171717",
        },
        ink: {
          900: "#ffffff",
          800: "#fafafa",
          700: "#f5f5f5",
          600: "#ebebeb",
        },
      },
      fontFamily: {
        sans: [
          "'Cabinet Grotesk'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "'Cabinet Grotesk'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.07), transparent 60%)",
        "mesh-light":
          "radial-gradient(at 20% 10%, rgba(0,0,0,0.10) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,0,0,0.08) 0px, transparent 50%), radial-gradient(at 0% 60%, rgba(0,0,0,0.06) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 20% 10%, rgba(255,255,255,0.10) 0px, transparent 50%), radial-gradient(at 80% 30%, rgba(255,255,255,0.08) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(255,255,255,0.06) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 24px 48px -16px rgba(0,0,0,0.35)",
        soft: "0 18px 60px -20px rgba(0,0,0,0.18)",
        ring: "0 1px 0 rgba(0,0,0,0.04), 0 24px 50px -24px rgba(0,0,0,0.18)",
        depth:
          "0 1px 0 rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06), 0 8px 24px -8px rgba(0,0,0,0.12), 0 32px 64px -24px rgba(0,0,0,0.18)",
        innerlite: "inset 0 1px 0 rgba(255,255,255,0.5)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        marquee: "marquee 30s linear infinite",
        "blob-1": "blob 22s ease-in-out infinite",
        "blob-2": "blob 28s ease-in-out infinite reverse",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
