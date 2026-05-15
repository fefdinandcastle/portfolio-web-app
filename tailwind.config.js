/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f4f0',
        ink: '#111111',
        brand: {
          purple: '#7c6af7',
          'light-purple': '#c4bbff',
          red: '#e63946',
          yellow: '#ffd60a',
          teal: '#06d6a0',
          orange: '#ff9500',
        },
      },
      boxShadow: {
        'brutal-xs': '1px 1px 0 #111111',
        'brutal-sm': '2px 2px 0 #111111',
        'brutal':    '3px 3px 0 #111111',
        'brutal-md': '4px 4px 0 #111111',
        'brutal-lg': '5px 5px 0 #111111',
      },
    },
  },
  plugins: [],
}
