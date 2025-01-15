const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        night: "#08070B",
        metal: "#292929",
        gravel: "#4B4B4B",
        boulder: "#787878",
        iron: "#D7D7D7",
        porcelain: "#F2F2F2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        vt323: ["VT323", "monospace"],
        courier: ["Courier Prime", "monospace"],
      },
      fontSize: {
        xxs: '0.65rem'
      }
    },
  },
  plugins: [nextui()],
}