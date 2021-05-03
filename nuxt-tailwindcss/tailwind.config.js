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
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '200': '50rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
