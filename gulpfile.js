var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	browserSync = require('browser-sync');

gulp.task("build-img",function(){
	gulp.src("static/images/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("static/images/"));

});


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./**/*').on('change', browserSync.reload);
});	