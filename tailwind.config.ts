/** @type {import('tailwindcss').Config} */

export default {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'mex`Aa' or 'class'
  theme: {
    screens: {
      xs: '768px',
      sm: '976px',
      md: '1200px',
    },
    colors: {
      'white': '#FFFFFF',
      'primary': '#4AB169',
      'secondary': '#FFDF82',
      'gray': {
        100: '#414141',
        200: '#666666',
        300: '#999999',
        400: '#E0E0E0',
      },
      background: '#FFFFF6'
    },
    fontSize: {
      'xxxl': ['36px', {
        fontWeight: '400',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'xxl': ['32px', {
        fontWeight: '400',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'xl': ['24px', {
        fontWeight: '400',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'lg': ['20px', {
        fontWeight: '400',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'md-m': ['16px', {
        fontWeight: '500',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'md': ['16px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
      'sm': ['14px', {
        fontWeight: '400',
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
      }],
    },
    extend: {
      borderRadius: {
        'sm': '5px',
        'md': '10px',
        'lg': '20px',
        'xl': '100%'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

