import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0E1B45",
        teal: "#4BC4CB",
        "teal-dark": "#0C6B72",
        "teal-light": "#9DD8DC",
        bg: "#F2F4F8",
        muted: "#6B7280",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
