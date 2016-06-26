var gulp       = require('gulp')
  , browserify = require('gulp-browserify')
  , rename     = require('gulp-rename')
  , sass       = require('gulp-sass')
  ;

gulp.task('build-js', function() {
  return gulp.src('src/js/App.jsx')
    .pipe(browserify({
      transform: ['babelify'],
      extensions: ['.js', '.jsx']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('./'));
});

gulp.task('build-sass', function() {
  return gulp.src('src/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.jsx', ['build-js']);
  gulp.watch('src/js/**/*.js', ['build-js']);
  gulp.watch('src/js/*.jsx', ['build-js']);
  gulp.watch('src/index.html', ['build-html']);
  gulp.watch('src/stylesheets/**/*.scss', ['build-sass']);
  gulp.watch('src/stylesheets/*.scss', ['build-sass']);
});

gulp.task('build', ['build-js', 'build-html', 'build-sass']);
gulp.task('default', ['build', 'watch']);
