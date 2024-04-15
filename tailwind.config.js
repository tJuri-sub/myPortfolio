/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        "portfolio-primary": "#202020",
        "portfolio-secondary": "#FFFFFF",
        "portfolio-accent": "#E86F8C",
        "portfolio-glass": "#4F4F4F",
        "portfolio-glass-stroke": "#383838",
        "portfolio-gray": "#898989",
        "portfolio-lightgray": "#6D6D6D",
        "portfolio-black": "#1A1A1A",
        "portfolio-highlight": "#9E8EFF",
      },
      fontFamily: {
        global: ["Outfit"],
      },
      spacing: {
        trans: "4px",
      },
    },
  },
  plugins: [],
};
