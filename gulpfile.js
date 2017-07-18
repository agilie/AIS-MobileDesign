const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const concat = require('gulp-concat');

gulp.task('vet', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint({esversion: 6}))
        .pipe(jshint.reporter('default'))
        .pipe(jscs())
        .pipe(jscs.reporter());
});