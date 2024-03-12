import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundColor: {
        white: "#ffffff",
      },
    },
    colors: {
      "athens-light": "#F7E3E4",
      "athens-dark": "#8A0F1B",
      "athend-blue": "#1662F3",
      athens: "#D5172A",
      slate: "#1A2736",
      "slate-dark-2": "#1E1E1F",
      "dark-blue": "#485C72",
      "gray-border": "#E6EAEF",
      "light-gray": "#D0D1D2",
      "light-blue": "#E0E6F3",
      "slate-light": "#FAFAFA",
      "slate-medium": "#485C72",
      "slate-dark": "#030507",
      "gray-medium": "#D4DBE3",
      "gray-light": "#F6F7F9",
      "gray-blue-light": "#F6F7F9",
      "neutral-blue": "#F5F5F5",
      "grayish-pink": "#FCF3F3",
      "gray-blue": "#91A0B0",
      "dark-red": "#DF6267",
      "dark-green": "#112C1C",
      "light-green": "#F3FCF3",
      "slate-yellow": "#FFF6CC",
      "pale-pink": "#E9A5A7",
      yellow: "#B8980A",
      "white-yellow": "#FFF6CC",
      "neutral-blue-2": "#F4F4F4",
      alabaster: "#FCF3F3",
      blue: "#5F7EB9",
      black: colors.black,
      white: colors.white,
      green: "#078338",
      "medium-green": "#229B52",
      "background-green": "#E4F7E3",
      overlay: "rgba(0, 0, 0, 0.80)",
      "gray-neutral-100": "#5E7187",
      "overlay-light": "rgba(0, 0, 0, 0.30)",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
