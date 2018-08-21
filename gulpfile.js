var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul') //my change
var fs = require('fs');

gulp.task('default', function () {
   // gulp.src('tests/**/*.js')
    // Covering files
     // .pipe(istanbul())
    // Force `require` to return covered files
      //.pipe(istanbul.hookRequire());
    
    gulp.src('tests/**/*.js')
        .pipe(mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
            mochaFile: './TEST-RESULTS.xml'
          }
        }))
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .pipe(istanbul.writeReports({    // my change
          dir: './coverage',
          reporters: ['cobertura', 'html', 'json'] 
        }));
});
