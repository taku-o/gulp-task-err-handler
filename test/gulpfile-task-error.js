const gulp = require('gulp');
const errhandler = require('../handler');

gulp.task('gulp', (cb) => {
  console.log('gulp');
  throw new Error('error from task "gulp"');
});

const domain = require('domain');
var d = domain.create();
d.on('error', (e) => {
  console.log('catch error');
});

gulp.task('run', errhandler(d, gulp.task('gulp')));

