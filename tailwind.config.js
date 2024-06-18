/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'White': 'hsl(0, 0%, 100%)',
      'Light-Gray': 'hsl(212, 45%, 89%)',
      'Grayish-Blue': 'hsl(220, 15%, 55%)',
      'Dark-Blue': 'hsl(218, 44%, 22%)'
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}