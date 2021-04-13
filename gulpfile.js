const gulp = require("gulp"),
    sass = require("gulp-sass");

const folder = {
    src: "src/scss/", // source files
    dist: "dist/css/", // build files
};
const buildCss = () => {
    return gulp
        .src([folder.src + "/master.scss"])
        .pipe(sass()) // scss to css
        .pipe(gulp.dest(folder.dist));
};
const watchFiles = () => {
    gulp.watch(folder.src + "**/*", gulp.series(buildCss));
};
gulp.task("watch", gulp.parallel(watchFiles));
gulp.task("default", gulp.series(buildCss, "watch"), function (done) {
    done();
});
