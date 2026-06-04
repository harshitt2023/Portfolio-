import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#07090f",
        surface: "#0d1117",
        card: "#111820",
        cyan: "#00e5ff",
        violet: "#9d6fff",
        green: "#00ff88",
        primary: "#eef2f7",
        muted: "#4a5f72",
        mid: "#7a8fa0",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        cyan: "0 0 32px rgba(0,229,255,.14)",
        violet: "0 0 32px rgba(157,111,255,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
