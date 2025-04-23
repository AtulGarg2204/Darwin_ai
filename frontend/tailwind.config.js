/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1a1e24', // Custom intermediate shade
          950: '#0d1117', // Darker than gray-900
        },
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}