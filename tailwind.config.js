
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', serif",
        inter: "'Inter', serif"
      }
    },
  },
  plugins: [
    require('daisyui'),

  ],

  daisyui: {
    themes: ["light", "black"],
  },
}

