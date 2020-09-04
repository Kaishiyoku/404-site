const mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'dist/css', [
        require('tailwindcss'),
    ])
    .sass('src/scss/concourse.scss', 'dist/css')
    .js('src/js/app.js', 'dist/js/app.js')
    .copy('src/img', 'dist/img')
    .copy('src/fonts', 'dist/fonts')
    .copy('src/index.html', 'dist/index.html')
    .copy('src/index_secondary.html', 'dist/index_secondary.html')
    .copy('src/index_tertiary.html', 'dist/index_tertiary.html')
    .options({
        processCssUrls: false
    });
