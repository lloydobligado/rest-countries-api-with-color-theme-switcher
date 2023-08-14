/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'light': '0px 0px 15px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'bg-light-primary': 'rgb(var(--bg-light-primary))', //fff
        'color-dark-primary': 'rgb(var(--color-dark-primary))', //000
        'color-dark-secondary': 'rgb(var(--color-dark-secondary))', //121214
        'bg-dark-primary': 'rgb(var(--bg-dark-primary))', //
        'bg-dark-secondary': 'rgb(var(--bg-dark-secondary))',
        'color-light-secondary': 'rgb(var(--color-light-secondary))',
      }
    }
  },
  plugins: [],
};
