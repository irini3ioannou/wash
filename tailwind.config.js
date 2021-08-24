module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        offwhite: {
          light: '#ede6e4',
          DEFAULT: '#dfd7d4',
          dark: '#c9bfbb',
        },
        red: {
          light: '#eb1e17',
          DEFAULT: '#eb1e17',
          dark: 'rgb(190, 66, 66)',
        },
      },
    },

    variants: {
      extend: {},
    },
  },
    plugins: [],



}
