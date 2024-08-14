const { easeInOut } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          "0%,100%": { boxShadow: "0 0 15px rgba[245, 56, 85, 0.6]" },
          "50%": { boxShadow: "0 0 30px rgba[245, 56, 85, 1]" },
        },
      },
      animation: {
        shadowPulse: "shadowPulse 2s easeInOut Infinity",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        "Logo-Font": ["Grey Qo", "cursive"],
      },
    },
  },
  plugins: [],
};
