const gulp = require('gulp');

function wrapper(fn, listener) {
  return () => {
    gulp.once('error', listener);

    return new Promise((resolve, reject) => {
      gulp.series(fn, (done) => {
        done();
        resolve();
      })();
    }).finally(() => {
      gulp.removeListener('error', listener);
    });
  };
}

export = wrapper;
