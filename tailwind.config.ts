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
        primary: "var(--bg-primary)",
        accent: "var(--accent-color)",
        highlight: "var(--highlight-color)",
        main: "var(--text-main)",
      },
      fontFamily: {
        modern: ['Quicksand', 'sans-serif'],
        nostalgia: ['Verdana', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;