const mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'dist/css', [
        require('tailwindcss'),
    ])
    .sass('src/scss/concourse.scss', 'dist/css')
    .js('src/js/app.js', 'dist/js/app.js')
    .copy('src/img', 'dist/img')
    .copy('src/fonts', 'dist/fonts')
    .copy('src/index.html', 'dist/index.html')
    .options({
        processCssUrls: false
    });
