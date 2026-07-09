import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: "#D97B66",      // Primary CTA, accent links (muted terracotta)
          primary: "#8FA876",     // Secondary accent, badges, eyebrow (sage green)
          primaryDark: "#5C6E4A", // Deep sage for hover states or dark sections
          text: "#3A3A35",        // Body text, dark sections, footer (soft charcoal)
          gold: "#F5C518",        // Star ratings, premium touches
        },
        neutral: {
          bg: "#FAF7F0",          // Primary page background (warm off-white)
          bgAlt: "#EEF0E6",       // Section alternator, card backgrounds (light sage tint)
          mid: "#7A7A72",         // Muted body text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(26, 26, 26, 0.10)",
        card: "0 4px 24px rgba(26, 26, 26, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
