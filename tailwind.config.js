const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.html',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
