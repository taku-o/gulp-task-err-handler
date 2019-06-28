# gulp-task-err-handler

## description
gulp.series, gulp.paralle error handling gulp-task.

## install
```sh
npm install --save-dev gulp-task-error-handler
```

## sample code
```javascript
const gulp = require('gulp');
const errhandler = require('gulp-task-error-handler');

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
  throw new Error('gulp error');
});

// declare error handling code
const domain = require('domain');
var d = domain.create();
d.on('error', (e) => {
  console.log('catch error');
});

// wrapping gulp task
// if error will be thrown, error handling code is called.
gulp.task('run', errhandler(d, gulp.series('hello', 'world', 'gulp')));
```

