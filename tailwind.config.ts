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
        primary: {
          10: "hsl(35, 77%, 62%)", // soft orange
          20: "hsl(5, 85%, 63%)", // soft red
        },
        neutral: {
          10: "hsl(36, 100%, 99%)", // Off-white
          20: "hsl(233, 8%, 79%)", // grayish blue
          30: "hsl(236, 13%, 42%)", // dark grayish blue
          40: "hsl(240, 100%, 5%)", // very dark blue
        },
      },
    },
  },
  plugins: [],
};
export default config;
