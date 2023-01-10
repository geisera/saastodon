/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Neko', ...defaultTheme.fontFamily.sans],
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
