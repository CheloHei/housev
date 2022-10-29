/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [ require('flowbite/plugin')],
}
