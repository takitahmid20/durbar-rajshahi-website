/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dr-purple': '#2D1B69',
        'dr-orange': '#FF4D00',
        'dr-yellow': '#FFD700',
        'dr-red': '#FF0000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to right, rgba(45, 27, 105, 0.9), rgba(255, 77, 0, 0.9))",
      },
    },
  },
  plugins: [],
}
