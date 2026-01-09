import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Backgrounds
        navy: {
          DEFAULT: "#0a1628",
          light: "#0d1b2a",
          dark: "#050d17",
        },
        richBlack: "#1b1b1b",
        // Gold Accents - matching laviefl.com brand (beige-gold tone)
        gold: {
          DEFAULT: "#C5B082",
          light: "#D4C4A8",
          dark: "#A89468",
          muted: "#B5A078",
        },
        // Text Colors
        ivory: {
          DEFAULT: "#f5f5dc",
          light: "#faf9f6",
        },
      },
      fontFamily: {
        display: ["var(--font-hatficeld)", "serif"],
        sans: ["var(--font-raleway)", "sans-serif"],
        accent: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
        "extra-wide": "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s infinite",
        "slow-pulse": "slowPulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        slowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C5B082 0%, #D4C4A8 50%, #A89468 100%)",
        "navy-gradient":
          "linear-gradient(180deg, #0a1628 0%, #0d1b2a 50%, #1b1b1b 100%)",
        "radial-gold":
          "radial-gradient(circle at center, rgba(197, 176, 130, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(197, 176, 130, 0.3)",
        "gold-lg": "0 0 40px rgba(197, 176, 130, 0.4)",
        elegant: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
