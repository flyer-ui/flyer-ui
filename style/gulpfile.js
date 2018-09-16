'use strict'
let gulp = require('gulp')
let sass = require('gulp-sass')
let autoprefixer = require('gulp-autoprefixer')
let cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
	return gulp.src('./*.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('../dist/style'))
})

gulp.task('default', ['compile'])
