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
      },
      screens: {
        "max-mobile": "540px",
        // => @media (max-width: 568px) { ... }

        mobile: "540px",
        // => @media (min-width: 568px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "18k": "1800px",
        // => @media (min-width: 1800px) { ... }
      },
    }
  },
  plugins: [],
};
