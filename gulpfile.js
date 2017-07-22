const gulp = require('gulp');
const gls = require('gulp-live-server');
const sass = require('gulp-sass');
const imageMin = require('gulp-imagemin');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', function() {
  gulp.src('src/assets/img/*')
      .pipe(imageMin())
      .pipe(gulp.dest('dist/assets/img'))
});

gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCss())
      .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function() {
  gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'src/js/*'
      ])
      .pipe(uglify())
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('dist/js'))
});

uglify().on('error', function(err) {
  gutil.log(gutil.colors.red('[Error]'), err.toString());
  this.emit('end');
})

gulp.task('fonts', function() {
  gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['copyHtml', 'imageMin', 'sass', 'scripts', 'fonts']);

gulp.task('server', function() {
  let server = gls.static('dist', 8888);
  server.start();

  gulp.watch(['src/*.html', 'src/js/*.js', 'src/scss/*', 'src/scss/components/*', 'src/scss/elements/*', 'src/scss/generic/*', 'src/scss/settings/*'], ['default'], function(file) {
    server.notify.apply(server, [file]);
  });
});
