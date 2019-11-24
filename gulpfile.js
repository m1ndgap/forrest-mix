"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var concat = require("gulp-concat");
var server = require("browser-sync").create();

gulp.task("css", function () {
    return gulp.src("source/sass/style.sass")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(server.stream());
});

gulp.task("html", function() {
    return gulp.src("source/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("js", function() {
    return gulp.src("source/js/*.js")
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dist/js/"))
});

gulp.task("js-vendor", function() {
    return gulp.src("source/js/vendor/*.js")
        .pipe(concat("vendors.js"))
        .pipe(gulp.dest("dist/js/"));
});


gulp.task("server", function () {
    server.init({
        server: "dist/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
    gulp.watch("source/*.html", gulp.series("html"));
    gulp.watch("source/js/*.js", gulp.series("js"));
    gulp.watch("source/js/vendor/*.js", gulp.series("js-vendor"));
    gulp.watch("source/*.html").on("change", server.reload);
    gulp.watch("source/js/**/*.js").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "html", "js", "js-vendor", "server"));
