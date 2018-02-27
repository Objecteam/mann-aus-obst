const gulp = require('gulp') ;
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')


gulp.task('css', function () {
    return gulp.src('css/main.css')
    .pipe(postcss([
        tailwindcss('./css/tailwind.js'),
    ]))
    .pipe(gulp.dest('static/css/'));
});