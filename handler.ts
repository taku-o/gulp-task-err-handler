const gulp = require('gulp');

function wrapper(d: NodeJS.Domain, fn) {
  return () => {
    return new Promise((resolve, reject) => {
      d.bind(
        gulp.series(fn, (done) => {
          done();
          resolve();
        })()
      );
    });
  };
}

export = wrapper;
