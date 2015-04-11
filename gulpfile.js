var gulp = require('gulp');
var typescript = require('gulp-typescript');
var rimraf = require('rimraf');

gulp.task('ts', function() {
    'use strict';
    gulp.src('./src/**/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('./dest/js'));
});

gulp.task('clean', function (cb) {
    rimraf('./dest', cb);
});

gulp.task('default', function() {

});
