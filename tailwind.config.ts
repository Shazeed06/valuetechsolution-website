import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ab9a2',
        secondary: '#fb72cc',
        tertiary: '#fea800',
        bodyBg: '#efebe5',
        darkBg: '#141414',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sourceSerif: ['Source Serif 4', 'Georgia', 'serif'],
        sans: [
          "'Inter'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
