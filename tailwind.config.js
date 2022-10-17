/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#0F0F0F',
      'white': '#FFFFFF',
      'orange': '#ED6A5A',
      'grey': '#788585',
      'blue': '#2E86AB',
    },
    extend: {
    },
  },
  plugins: [],
}