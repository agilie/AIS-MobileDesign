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

gulp.task('build_js', function() {
    return gulp.src(['app/**/*.module.js', 'app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watcher', function() {
    return gulp.watch('app/**/*.js', ['build_js']);
});