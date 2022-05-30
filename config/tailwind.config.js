const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {

      "drakercolor": "#F7FAFC",
      "draklightcolor": "#448AC1",
      "draklightercolor": "#F7FAFC",
      "lightcolor": "#F7FAFC",
      "lightercolor": "#F7FAFC",
    },
    extend: {
    },
  },
  plugins: [],
}