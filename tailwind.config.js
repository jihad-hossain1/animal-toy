

/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");
// const fontFamily = {
//   sans: ["Open Sans", "sans-serif"],
//   poppin: ["Poppins", "sans-serif"],
//   kanit: ["Kanit", "sans-serif"],
// };
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      poppin: ['Poppins', 'sans-serif'],
      kanit: ['Kanit', 'sans-serif'],
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
});

