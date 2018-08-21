var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul') //my change
var fs = require('fs');

gulp.task('default', function () {
    gulp.src('tests/**/*.js')
        .pipe(mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
            mochaFile: './test-results.xml' //my change
          }
        }))
        .pipe(istanbul.writeReports({    // my change
          reporters: ['cobertura', 'html'] 
        }));
});
