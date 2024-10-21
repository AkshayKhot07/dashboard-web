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
        background: {
          100: "#FFFFFF",
          200: "#F4F7FE",
          300: "#E3E4F5",
        },
        text: {
          100:"#2B3674",
          200:"#707EAE",
          300:"#8F9BBA"
        },
          purple: {
            100:"#4434DD",
            200:"#8076EE"
          }
      },

      boxShadow: {
        top: "0px -7px 15px -3px rgba(0,0,0,0.1);",
        "top-bottom":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "top-bottom-light":
          "0 -2px 4px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
