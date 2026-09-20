import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── GUD Agency Exact Color Palette ───────────────────────────────
        primary:    "#1ab9a2", // teal / mint
        secondary:  "#fb72cc", // pink / magenta
        tertiary:   "#fea800", // amber / yellow
        // Page backgrounds
        bodyBg:     "#efebe5", // warm beige (light sections)
        "body-bg":  "#efebe5",
        // Dark backgrounds
        darkBg:     "#141414",
        "black-1":  "#141414",
        "black-1000": "#191919",
        "black-1200": "#151515",
        // Warm neutral borders / surfaces
        "beige-100": "#f7f2ea",
        "beige-200": "#ece9e1",
        "beige-300": "#d8d3ce",
        "beige-400": "#c4bdb5",
        // Muted text
        "muted":    "#7d7b77",
        // Error
        "red-1200": "#d52a2a",
      },
      fontFamily: {
        montserrat:  ["Montserrat", "sans-serif"],
        sourceSerif: ["'Source Serif 4'", "Georgia", "serif"],
        annie:       ["'Annie Use Your Telescope'", "cursive"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "size-30":  "30px",
        "size-50":  "50px",
        "size-120": "120px",
      },
      borderRadius: {
        "5xl": "50px",
      },
      animation: {
        marquee:       "marquee 30s linear infinite",
        "float-slow":  "float 8s ease-in-out infinite",
        "spin-slow":   "spin 20s linear infinite",
        "blob-1":      "blob 22s ease-in-out infinite",
        "blob-2":      "blob 28s ease-in-out infinite reverse",
        pulse:         "pulse 2s cubic-bezier(.4,0,.6,1) infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(40px,-30px) scale(1.05)" },
          "66%":     { transform: "translate(-30px,30px) scale(0.95)" },
        },
      },
      boxShadow: {
        "glow-primary":   "0 0 30px rgba(26,185,162,0.3)",
        "glow-secondary": "0 0 30px rgba(251,114,204,0.3)",
        "glow-tertiary":  "0 0 30px rgba(254,168,0,0.3)",
        soft: "0 18px 60px -20px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
