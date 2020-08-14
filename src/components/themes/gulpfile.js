'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const path = require('path')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const libPath = path.resolve(process.cwd(), '../../../lib')
console.log('libPath', libPath)
gulp.task('compile', gulp.series(function () {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(libPath, 'themes')))
}))

gulp.task('copyfont', gulp.series(function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(libPath, 'themes/fonts')))
}))

gulp.task('build', gulp.series(gulp.parallel('compile', 'copyfont')))
