/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'orange-palette':'#FC7300',
        'lima-palette':'#BFDB38',
        'green-palette':'#1F8A70',
        'blue-palette':'#00425A'
      }

    },
  },
  plugins: [],
}
