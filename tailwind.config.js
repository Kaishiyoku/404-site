const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        primary: '#633F73',
        'primary-alternative': '#80658C',
        'primary-light': '#e2d7e4',
        secondary: '#91A663',
        'secondary-light': '#e8f3cf',
        tertiary: '#8E4B6D',
        'tertiary-light': '#f4d9e7',
        quaternary: '#3f7366',
        'quaternary-alternative': '#658c82',
        'quaternary-light': '#d5e3e0',
      },
      fontFamily: {
        'sans': ['Concourse', 'sans-serif'],
      },
      aspectRatio: {
        none: 0,
        square: [1, 1],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
};
