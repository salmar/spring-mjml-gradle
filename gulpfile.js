const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml')
const rename = require('gulp-rename');

const srcMjml = './src/main/resources/mjml/**/*.mjml';
const dstMjml = './src/main/resources/templates/';


gulp.task('mjmlToHtml', function () {
    return gulp.src([srcMjml])
        .pipe(mjml(mjmlEngine, {beautify: true}))
        .pipe(rename(function(path) {
        	path.extname = '.ms';
        }))
        .pipe(gulp.dest(dstMjml))
});

gulp.task('default', gulp.series(['mjmlToHtml']))