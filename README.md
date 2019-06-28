# gulp-task-err-handler

## description
gulp4.series, gulp4.parallel, gulp4.task error handling gulp-task.

catch error in gulp4.series, gulp4.parallel, gulp4.task,
and call error handling function.

## install
```sh
npm install --save-dev gulp-task-error-handler
```

## sample code (gulp4.series)
```javascript
const gulp = require('gulp');
const handler = require('gulp-task-error-handler');

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

// wrapping gulp task
// if error will be thrown, error handling code is called.
gulp.task('run', handler(gulp.series('hello', 'world', 'gulp')),
  (err) => {
    console.log('catch error');
  }
);
```

## sample code (gulp4.parallel, gulp4.task)
wrapping with 'gulp-task-error-handler'.

```javascript
gulp.task('run', handler(gulp.parallel('hello', 'world', 'gulp')),
  (err) => {
    console.log('catch error');
  }
);
```

```javascript
gulp.task('run', handler(gulp.task('gulp')),
  (err) => {
    console.log('catch error');
  }
);
```


