const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const sassOptions = {
    outputStyle: 'expanded'
};

const input = 'sass/**/*.scss';
const output = 'css/';

gulp.task('sass', function () {
    return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
