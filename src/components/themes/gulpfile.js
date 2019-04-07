'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const path = require('path')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const libPath = path.resolve(process.cwd(), '.././../../lib')
console.log(libPath)

gulp.task('compile', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(libPath, 'themes')))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(libPath, 'themes/fonts')))
})

gulp.task('build', ['compile', 'copyfont'])
