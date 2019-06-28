"use strict";
const gulp = require('gulp');
function wrapper(d, fn) {
    return () => {
        return new Promise((resolve, reject) => {
            d.bind(gulp.series(fn, (done) => {
                done();
                resolve();
            })());
        });
    };
}
module.exports = wrapper;
