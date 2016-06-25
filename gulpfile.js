var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , rename = require('gulp-rename')
  ;

gulp.task('build-js', function() {
  return gulp.src('src/js/App.jsx')
    .pipe(browserify({
      transform: ['babelify'],
      extensions: ['.jsx']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.jsx', ['build-js']);
  gulp.watch('src/js/*.jsx', ['build-js']);
  gulp.watch('src/index.html', ['build-html']);
});

gulp.task('build', ['build-js', 'build-html']);
gulp.task('default', ['build', 'watch']);
