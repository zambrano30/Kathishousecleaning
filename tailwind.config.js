/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'navy': '#1B3A5C',
        'cyan': '#77CBDA',
        'cyan-light': '#B3EBF2',
        'bg-light': '#EEF9FB',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
