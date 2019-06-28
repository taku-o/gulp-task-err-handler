# gulp-task-err-handler

## description
gulp4.series, gulp4.parallel, gulp4.task error handling gulp-task.  
  
catching error in gulp4.series, gulp4.parallel, gulp4.task tasks,  
and call error handling function.  

## install
```sh
npm install --save-dev gulp-task-error-handler
```

## sample code
### handle gulp4.series error
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
gulp.task('run', handler(gulp.series('hello', 'world', 'gulp'),
  (err) => {
    console.log('catch error');
  })
);
```

### handle gulp4.parallel, gulp4.task error
wrapping with 'gulp-task-error-handler'.

```javascript
gulp.task('run', handler(gulp.parallel('hello', 'world', 'gulp'),
  (err) => {
    console.log('catch error');
  })
);
```

```javascript
gulp.task('run', handler(gulp.task('gulp'),
  (err) => {
    console.log('catch error');
  })
);
```

## replace gulp3 "run-sequence" with "gulp-task-error-handler".
- gulp3 run-sequence
```javascript
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('package', (cb) => {
  runSequence('tsc-debug', '_rm-package', '_package-debug', '_unpacked', '_notify', '_kill', (err) => {
    if (err) {
      gulp.start('_notifyError');
    }
    cb(err);
  });
});
```

- replace with "gulp-task-error-handler" sample.
```javascript
const gulp = require('gulp');
const handler = require('gulp-task-error-handler');

gulp.task('package',
  handler(gulp.series('tsc-debug', '_rm-package', '_package-debug', '_unpacked', '_notify', '_kill'), (err) => {
    gulp.task('_notifyError')();
  })
);
```


