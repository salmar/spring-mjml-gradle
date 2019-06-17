const gulp = require('gulp');
const mjml = require('gulp-mjml');

const srcMjml = './src/main/resources/mjml/**/*.mjml';
const dstMjml = './src/main/resources/static/';


gulp.task('mjmlToHtml', function () {
    return gulp.src([srcMjml])
        .pipe(mjml())
        .pipe(gulp.dest(dstMjml))
});

gulp.task('default', gulp.series(['mjmlToHtml']))