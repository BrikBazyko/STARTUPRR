var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function(done) {
  gulp.src("./scss/style.scss")
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest("./css"))
  done();
});
gulp.task('serve', function(done) {
  gulp.watch("./scss/**/*.scss", gulp.series('scss'));
  done();
});

gulp.task('default', gulp.series('serve'));
