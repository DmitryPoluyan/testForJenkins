'use strict';
var gulp   = require( 'gulp' );
var rimraf = require('rimraf');

gulp.task('clean', function (cb) {
    rimraf('views/index.jade', cb);
});

gulp.task('copy:index',['clean'], function () {
    gulp.src([
        'source/index.jade'
    ])
        .pipe(gulp.dest('views/'));
});

gulp.task('build', ['clean', 'copy:index']);