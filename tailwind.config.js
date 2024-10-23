/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#150B2B",
        "desc": "#150B2BB3",
        "forBtn": "#0BE58A",
        "subTitle": "#282828"
      }
    },
  },
  plugins: [daisyui],
}