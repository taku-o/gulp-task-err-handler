const gulp = require('gulp');
const errhandler = require('../handler');

gulp.task('hello', (cb) => {
  console.log('hello');
  return cb();
});

gulp.task('world', (cb) => {
  console.log('world');
  return cb();
});

gulp.task('gulp', (cb) => {
  console.log('gulp');
  return cb();
});

gulp.task('run', errhandler(
  gulp.series('hello', 'world', 'gulp'),
  (err) => {
    console.log('--- catch error');
  }
));

