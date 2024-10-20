import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":"rgb(0, 87, 188)",
        // "primaryDark":"rgba(0, 87, 188,.20)",
        // "primaryLight":"#1890ff",
        // "primaryDark": "#F4F6F8",
        // "primaryDark":"rgb(0, 10, 20)",
        // "primary":"#0162c4",
        // "primary":"#2D99FF",
        //  "primaryDark":" #133d01",
        // "primary":"#0c3c01",
        "darkBackground":"#000",
        "lightBackground":"rgb(32, 38, 48)",
        'primaryGray':'#5b6d49'
      }
    },
  },
  plugins: [],
};
export default config;
