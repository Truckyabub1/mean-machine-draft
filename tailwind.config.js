/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#daa14c',
          goldDark: '#b88234',
          goldLight: '#eab86f',
          dark: '#192324',
          darker: '#12191a',
          surface: '#f5f5f5',
          muted: '#616161',
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
