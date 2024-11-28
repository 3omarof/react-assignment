/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myColor: {
          50: "#c0c5cb",
          100: "#abb2b9",
          200: "#969fa8",
          300: "#808b96",
          400: "#6b7885",
          500: "#566573",
          600: "#415162",
          700: "#2c3e50",
          800: "#2c3e50",
          900: "#283848",
          950: "#070A0D",
        },
        secColor:{
          50: "#baebe1",
          100: "#a3e4d7",
          200: "#8ddece",
          300: "#76d7c4",
          400: "#5fd0ba",
          500: "#48c9b0",
          600: "#31c3a6",
          700: "#1abc9c",
          800: "#17a98c",
          900: "#15967d",
          950: "#12846d",
        }
      },
      screens: {
       
          "2xl": "1320px",
      
      },
    },
  },
  plugins: [],
};
