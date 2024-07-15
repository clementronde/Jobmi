import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Gilroy', 'sans-serif'],
        oddlini: ['Oddlini', 'sans-serif'],
        september: ['September Mornings', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        Montserrat: ["Montserrat", "sans-serif"],
        crusivefont:["Font"]
      },
      colors: {
        'violet': '#6500FF',
        'purple-600': '#6b46c1',
        'blue-dark': '#14213d',
        'light-purple': '#a29bfe',
      }
    },
  },
  plugins: [],
};
export default config;
