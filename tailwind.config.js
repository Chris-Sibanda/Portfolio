/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      indigo: colors.indigo,
      green: colors.green,
      teal: colors.teal,
      lightBlue: colors.sky,
      warmGray: colors.stone,
      trueGray: colors.neutral,
      coolGray: colors.gray,
      blueGray: colors.slate,
    },
  },
  plugins: [],
};
