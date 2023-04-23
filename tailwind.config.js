/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      nunito_sans: ["Nunito Sans", "sans-serif"], 
    },
    extend: {
      colors: {
        "dark": "#1f1f1f",  
        "brand-orange": "#f16035",  
        "brand-gray": "#eaeaea",  
        "brand-gray-100": "#e2e2e2",  
        "brand-gray-200": "#bababa",  
      }, 
      screens: {
        '2xl': '1410px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
