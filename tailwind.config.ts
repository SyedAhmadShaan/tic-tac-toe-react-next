import { Lilita_One } from "next/font/google";
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
        primary: "#FFC700",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        quaternary: "#FFC700",
        quinary: "#000000",
        senary: "#FFFFFF",
        septenary: "#FFC700",
      },
      fontFamily: {
        Lilita_One: ["var(--font-lilita-one)"],
        secondary: ["Roboto", "sans-serif"],
      },
      // that is animation class
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      // that is actual animation
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
