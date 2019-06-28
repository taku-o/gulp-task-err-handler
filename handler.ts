const gulp = require('gulp');
const domain = require('domain');

function wrapper(fn, listener) {
  return () => {
    var d = domain.create();
    d.on('error', listener);

    return new Promise((resolve, reject) => {
      d.bind(
        gulp.series(fn, (done) => {
console.log('--- call gulp.series done');
          done();
          resolve();
        })()
      );
    });
  }
}

export = wrapper;
