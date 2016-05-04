var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	browserSync = require('browser-sync');

gulp.task("build-img",function(){
	gulp.src("src/static/images/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("src/static/images/"));

});


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});	