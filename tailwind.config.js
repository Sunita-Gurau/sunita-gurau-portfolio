/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F472B6', // pink-400
          light: '#FCE7F3', // pink-50
          dark: '#BE185D', // pink-800
        },
        secondary: {
          DEFAULT: '#F9A8D4', // pink-300
          light: '#FDF2F8', // pink-100
          dark: '#DB2777', // pink-600
        },
      },
    },
  },
  plugins: [],
}
