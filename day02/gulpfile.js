const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

function runeslint() {
  return src(["es6/**/*.js", "public/es6/**/*.js"])
      .pipe(eslint())
      .pipe(eslint.format())
}

function minifyServerCode() {
  return src('es6/**/*.js')
      .pipe(babel())
      .pipe(dest("dist"))
}

function minifyBrowserCode() {
  return src("public/es6/**/*.js")
      .pipe(babel())
      .pipe(dest("public/dist"))
}

exports.default = series(runeslint, minifyServerCode, minifyBrowserCode)
