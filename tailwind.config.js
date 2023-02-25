/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0F17',
        secondary: "#F59E0C",
        tertiary: '#101827',
      },
      boxShadow: {
        nav: '0px -10px 20px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
