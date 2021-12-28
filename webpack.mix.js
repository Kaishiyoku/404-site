const mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'dist/css', [
        require('tailwindcss'),
    ])
    .js('src/js/app.js', 'dist/js/app.js')
    .copy('src/index.html', 'dist/index.html')
    .copy('src/index_secondary.html', 'dist/index_secondary.html')
    .copy('src/index_tertiary.html', 'dist/index_tertiary.html')
    .copy('src/index_quaternary.html', 'dist/index_quaternary.html');

if (!mix.inProduction()) {
    mix.disableSuccessNotifications();
}