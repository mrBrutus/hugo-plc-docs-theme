const defaultTheme = require("tailwindcss/defaultTheme");
const themeDir = __dirname + '/../../';

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    rejected: true,
    content: [
      themeDir + 'layouts/**/*.html',
      themeDir + 'content/**/*.html',
      themeDir + 'content/**/*.md',
      themeDir + 'content/**/*.yaml',
      'layouts/**/*.html',
      'content/**/*.html',
      'content/**/*.md',
      'content/**/*.yaml',
      'exampleSite/layouts/**/*.html',
      'exampleSite/content/**/*.html',
      'exampleSite/content/**/*.md',
      'exampleSite/content/**/*.yaml',
    ],
    options: {
      // safelisting is needed in case of dynamic classes (e.g. `pl-{{ mul $someVariable 2 }}` ==> pl-0, pl-2 etc.)
      safelist: [/^pl-/, /^ml-/],
    }
  },
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--color-default-soft)',
        soft: 'var(--color-default-soft)',
        primary: 'var(--color-primary)',
      },

      ringColor: {
        DEFAULT: 'var(--color-default-soft)',
        soft: 'var(--color-default-soft)',
        primary: 'var(--color-primary)',
      },

      colors: {
        background: {
          soft: 'var(--color-background-soft)',
          DEFAULT: 'var(--color-background)',
          inverse: 'var(--color-background-inverse)',
        },

        hljs: {
          DEFAULT: 'var(--color-hljs)',
          transparent: 'var(--color-hljs-transparent)',
        },

        default: {
          soft: 'var(--color-default-soft)',
          light: 'var(--color-default-light)',
          DEFAULT: 'var(--color-default)',
          dark: 'var(--color-default-dark)',
        },

        primary: {
          soft: 'var(--color-primary-soft)',
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          inverse: 'var(--color-primary-inverse)',
        },
      },

      textColor: {
        default: {
          soft: 'var(--color-default-soft)',
          light: 'var(--color-default-light)',
          DEFAULT: 'var(--color-default)',
          dark: 'var(--color-default-dark)',
        },
        primary: {
          soft: 'var(--color-primary-soft)',
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          inverse: 'var(--color-primary-inverse)',
        },
      },

      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
      fontWeights: {
        normal: 'var(--font-weight-normal)',
        display: 'var(--font-weight-display)',
        btn: 'var(--font-weight-btn)',
      },
      borderRadius: {
        none: '0',
        btn: 'var(--rounded-btn)',
      },

      minHeight: {
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },

      spacing: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },

      transitionDuration: {
        '0': '0ms',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-default)',
            borderColor: 'var(--color-default-soft)',

            'h1, h2, h3, h4, h5, h6, strong': {
              color: 'var(--color-default-dark)',
            },
            '[class~=lead]': {
              color: 'var(--color-default)',
            },
            h1: {
              fontWeight: '500',
              // marginBottom: '0'
            },
            blockquote: {
              color: 'var(--color-default-dark)',
              borderLeftColor: 'var(--color-default-soft)',
            },

            'ol > li::before': {
              color: 'var(--color-default-light)',
            },
            'ul > li::before': {
              backgroundColor: 'var(--color-default-soft)',
            },
            hr: {
              borderColor: 'var(--color-default-soft)',
            },
            thead: {
              color: 'var(--color-default-dark)',
              borderBottomColor: 'var(--color-default-soft)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--color-default-soft)',
            },
            a: {
              color: 'var(--color-primary)',
              // textDecoration: false,
              '&:hover': {
                color: 'var(--color-primary-light)',
              },
            },

            'figure figcaption': {
              color: 'var(--color-default-light)',
            },
            
            code: null,
            'code::before': null,
            'code::after': null,
            'pre code': null,

            ':not(pre)>code, a code': {
              color: 'var(--color-primary)',
              fontWeight: '600',
            },

            pre: {
              color: "unset",
              padding: "unset",
              backgroundColor: "transparent"
            },

          },
        },
      }),


      // allow different styling for (pdf) print
      screens: {
        'print': { 'raw': 'print' },
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'even', 'hover'],
    fontWeight: ['hover'],
    textColor: ['hover'],
  },
}
