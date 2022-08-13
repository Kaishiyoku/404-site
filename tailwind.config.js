const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
