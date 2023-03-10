/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans]
      },

      backgroundImage: {
        'bg-imagen': " url('./assets/bg-chat.png') "
      }
    }
  },
  plugins: []
}
