const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const runSequence = require('run-sequence');

const $ = require('gulp-load-plugins')();

gulp.task('build', function(done) {
    runSequence(['clean', 'vet'], 'build_js', 'watcher', done);
});

gulp.task('cool-build', ['copy-templates'], function() {

    const source = gulp.src(['app/**/*.module.js', 'app/**/*.js', 'app/**/*.css'], {read: false});

    return gulp.src('index.html')

        .pipe($.inject(source))
        .pipe($.wiredep())
        .pipe($.useref())

        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-templates', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('clean', function (callback) {
    del(['dist']).then(() => { callback() });
});

gulp.task('vet', function() {
    return gulp.src('app/**/*.js')
        .pipe($.jshint({esversion: 6}))
        .pipe($.jshint.reporter('default'))
        .pipe($.jscs())
        .pipe($.jscs.reporter());
});

gulp.task('build_js', function() {
    return gulp.src(['app/**/*.module.js', 'app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watcher', function() {
    return gulp.watch('app/**/*.js', ['build_js']);
});