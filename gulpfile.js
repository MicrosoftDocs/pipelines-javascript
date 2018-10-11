const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul')

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
