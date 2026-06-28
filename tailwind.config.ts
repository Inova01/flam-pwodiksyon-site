import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#E8541E",
        gold: "#F2A516",
        braise: "#9E2B0E",
        agro: "#1F6F54",
        cream: "#FBF6EE",
        charcoal: "#1A1714",
        ash: "#6B6258"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        flame: "0 24px 70px rgba(232, 84, 30, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
