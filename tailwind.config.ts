import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: "#201B55", // True Logo Navy
          light: "#f8fafc",
          green: "#A9E8CB", // True Logo Mint
          neon: "#18c991", // Extra glow if needed
          blue: "#1D71B8" // True Logo Blue
        }
      }
    },
  },
  plugins: [],
};
export default config;
