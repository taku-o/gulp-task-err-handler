const gulp = require('gulp');
const errhandler = require('../handler');

gulp.task('gulp', (cb) => {
  console.log('gulp');
  return cb();
});

gulp.task('run', errhandler(
  gulp.task('gulp'),
  (err) => {
    console.log('--- catch error');
  }
));

