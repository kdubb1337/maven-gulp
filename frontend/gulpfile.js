var del = 			require('del');
var gulp = 			require('gulp');
var concat = 		require('gulp-concat');
var minifyCss = 	require('gulp-minify-css');
var minifyHtml = 	require('gulp-minify-html');
var rename = 		require('gulp-rename');
var rev = 			require('gulp-rev');
var uglify = 		require('gulp-uglify');
var usemin = 		require('gulp-usemin');
var wiredep = 		require('wiredep').stream;


var SRC = 'app/';
var DIST = 'dist/';

gulp.task('clean:dist', function () {
  return del([
    //  we use a globbing pattern to match everything inside the `destination` folder
    DIST + '**',
  ]);
});

gulp.task('usemin', function() {
	gulp.src(['./index.html', './signin2.html'])
		.pipe(usemin({
			css: [minifyCss(), 'concat'],
			html: [minifyHtml({empty: true})],
			js: [uglify(), rev()],
			js2: [uglify(), rev()]
		}))
		.pipe(gulp.dest(DIST));
});

gulp.task('build', [
	'clean:dist', 'usemin'
]);