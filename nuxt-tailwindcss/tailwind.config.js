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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.600'),
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline',
              }
            },
            img: {
              display: 'inline-block',
            },
            hr: {
              'border-color': theme('colors.gray-400'),
              'margin-top': '2em',
              'margin-bottom': '2em',
            }
          },
        },
      }),
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
