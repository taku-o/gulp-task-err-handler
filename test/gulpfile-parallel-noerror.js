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

const domain = require('domain');
var d = domain.create();
d.on('error', (e) => {
  console.log('catch error');
});

gulp.task('run', errhandler(d, gulp.parallel('hello', 'world', 'gulp')));

