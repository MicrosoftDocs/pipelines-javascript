var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul')
var fs = require('fs');

gulp.task('default', function () {
    gulp.src('tests/**/*.js')
        .pipe(mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
            mochaFile: './TEST-RESULTS.xml'
          }
        }))
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['cobertura', 'html'] 
        }));
});
