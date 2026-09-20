import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ─── GUD Agency exact container widths ────────────────────────────
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: {
        sm:  "575px",
        md:  "767px",
        lg:  "991px",
        xl:  "1199px",
        "2xl": "1365px",
        "3xl": "2000px",
      },
    },
    // ─── GUD Agency exact breakpoints ─────────────────────────────────
    screens: {
      sm:  "575px",
      md:  "767px",
      lg:  "991px",
      xl:  "1199px",
      "2xl": "1365px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        // ── Core accent palette (GUD exact values) ──────────────────
        primary:   "#1ab9a2",   // --color-primary
        secondary: "#fb72cc",   // --color-secondary
        tertiary:  "#fea800",   // --color-tertiary

        // ── Dark backgrounds ────────────────────────────────────────
        "body-bg":    "#141414",   // --color-body-bg (GUD dark bg)
        "black-1":    "#141414",   // --color-black-1
        "black-1000": "#191919",   // --color-black-1000
        "black-1200": "#151515",   // --color-black-1200
        "red-1200":   "#d52a2a",   // --color-red-1200

        // ── Warm beige page bg + surfaces ───────────────────────────
        bodyBg:      "#efebe5",    // actual page background
        "gray-10":   "#e7e2dc",    // GUD custom gray-10
        "gray-20":   "#f7f2ea",    // GUD custom gray-20

        // ── Override Tailwind gray-50 to GUD's muted text colour ────
        gray: {
          50:  "#7d7b77",  // GUD uses this as muted text
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },

      fontFamily: {
        montserrat:  ["Montserrat", "Montserrat Fallback", "sans-serif"],
        annie:       ["Annie Use Your Telescope", "Annie Use Your Telescope Fallback", "cursive"],
        sourceSerif: ['"Source Serif 4"', '"Source Serif 4 Fallback"', "Georgia", "serif"],
        sans:        ["Inter", "Inter Fallback", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        "size-30":  "30px",   // --text-size-30
        "size-50":  "50px",   // --text-size-50
        "size-120": "120px",  // --text-size-120
      },

      borderRadius: {
        "5xl": "50px",        // --radius-5xl (GUD's big pill)
        "t-70": "70px",       // rounded-t-[70px] used heavily
      },

      maxWidth: {
        container:   "1136px",  // GUD container max width
        "1136":      "1136px",
        "1360":      "1360px",
        "1192":      "1192px",
        "950":       "950px",
        "886":       "886px",
        "780":       "780px",
        "703":       "703px",
        "651":       "651px",
        "600":       "600px",
        "542":       "542px",
        "488":       "488px",
        "385":       "385px",
        "320":       "320px",
        "293":       "293px",
        "273":       "273px",
        "240":       "240px",
        "220":       "220px",
        "210":       "210px",
        "200":       "200px",
        "180":       "180px",
        "140":       "140px",
      },

      animation: {
        marquee:       "marquee 30s linear infinite",
        marquee2:      "marquee2 50s linear infinite",
        "float-slow":  "float 8s ease-in-out infinite",
        "spin-slow":   "spin 20s linear infinite",
        "blob-1":      "blob 22s ease-in-out infinite",
        "blob-2":      "blob 28s ease-in-out infinite reverse",
        "bounce-simple": "bounceSimple 0.7s ease-in-out",
      },

      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%":   { left: "-100%" },
          "100%": { left: "0" },
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
        bounceSimple: {
          "0%":   { transform: "translateY(0)" },
          "25%":  { transform: "translateY(-55px)" },
          "45%":  { transform: "translateY(-35px)" },
          "60%":  { transform: "translateY(-45px)" },
          "75%":  { transform: "translateY(-40px)" },
          "90%":  { transform: "translateY(-45px)" },
          "100%": { transform: "translateY(-45px)" },
        },
      },

      boxShadow: {
        "glow-primary":   "0 0 30px rgba(26,185,162,0.3)",
        "glow-secondary": "0 0 30px rgba(251,114,204,0.3)",
        "glow-tertiary":  "0 0 30px rgba(254,168,0,0.3)",
        soft: "0 18px 60px -20px rgba(0,0,0,0.18)",
        lg:   "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)",
      },

      letterSpacing: {
        tight:   "-0.025em",
        tighter: "-0.05em",
        "gd-tight":  "-0.04em",   // GUD body letter spacing
        "gd-large":  "-0.08em",   // GUD large headings
      },
    },
  },
  plugins: [],
};
export default config;
