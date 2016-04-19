var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');

/**
 * Compiles sass into prefixed, minified CSS.
 */
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(livereload());
});
