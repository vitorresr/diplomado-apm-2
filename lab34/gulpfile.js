/*
* Dependencias
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');



 /*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-js', function(){
	gulp.src('source/js/*.js')
		.pipe(concat('lab34.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('source/min/'))
});


gulp.task('concat-css', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('lab34.css'))
        .pipe(gulp.dest('source/css/'));
});


gulp.task('concat-files', ['concat-js','concat-css'], function(){
  return gulp.src('source/css/lab34.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('source/min/'));
});