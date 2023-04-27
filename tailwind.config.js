/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      nunito_sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#1f1f1f",
        "brand-orange": "#f16035",
        "brand-gray": "#eaeaea",
        "brand-gray-50": "#e5e5e5",
        "brand-gray-100": "#e2e2e2",
        "brand-gray-200": "#bababa",
        "brand-gray-300": "#b9b9b9",
        "brand-gray-400": "#d3d2d2",
        "brand-gray-500": "#565656",
        "brand-gray-900": "#999999",
        "brand-green": "#59a935",
        "brand-green-50": "#f3fbf0",
      },
      screens: {
        "2xl": "1410px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
