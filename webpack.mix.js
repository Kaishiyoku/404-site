const mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'dist/css', [
    require('tailwindcss'),
]);
