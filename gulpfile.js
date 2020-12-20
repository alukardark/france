var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

gulp.task('css', function() {
	gulp.src('css/*.css')
		.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('js/common.js')
		.pipe(connect.reload());
});

gulp.task('sass', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css']);
	gulp.watch('*.html', ['html']);
	gulp.watch('js/common.js', ['js']);
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'connect', 'watch']);