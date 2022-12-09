/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#B48C0A',
        'inactive': '#C2B8B6',
        'secgray': '#6D7278',
        'loginborder': '#CEBCAF',
        'mainbg': '#F6F4F4',
        'inactivebg': '#F6F4F4',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
    base: false,
  }
}