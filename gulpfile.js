var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
   console.log('Gulp task is started');
});

gulp.task('html', function () {
   console.log("Trying new gulp task");
});

gulp.task('styles', function () {
   console.log("SASS or PostCSS tasks");
});

gulp.task('watch', function () {

   watch('./app/index.html', function () {
      gulp.start('html');
   });

   watch('./app/assets/styles/**/*.css', function () {
      gulp.start('styles');
   });
});