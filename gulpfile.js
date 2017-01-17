var gulp = require('gulp');
var replace = require('gulp-replace');
var clean = require('gulp-clean');

gulp.task('clean-destination', function() {
  return gulp.src('docs/', { read: false })
    .pipe(clean());
});

gulp.task('copy-html', ['clean-destination'], function() {
  return gulp.src('build/unbundled/**/*.html')
    .pipe(replace(/"[^"]*bower_components\/([^"]+)"/g, '//unpkg.com/$1'))
    .pipe(gulp.dest('docs/'));
});

gulp.task('copy-non-html', ['copy-html'], function() {
  return gulp.src([
      'build/unbundled/**/*',
      '!**/*.html',
      '!**/bower.json',
      './manifest.json'])
    .pipe(gulp.dest('docs/'));
});

gulp.task('update-docs', ['copy-non-html']);
