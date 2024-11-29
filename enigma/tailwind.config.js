/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'big-xl': '45rem',
      },

      fontFamily: {
        'calcio': ['Calcio', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
