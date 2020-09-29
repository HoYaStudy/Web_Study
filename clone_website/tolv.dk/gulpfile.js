const gulp = require("gulp");
const gsass = require("gulp-sass");
const gautoprefixer = require("gulp-autoprefixer");
const gcleancss = require("gulp-clean-css");
const fs = require("fs");
const gserver = require("gulp-webserver");

gsass.compiler = require("node-sass");

const routes = {
  html: {
    src: "src/*.html",
    dest: "build",
  },
  css: {
    src: "src/scss/styles.scss",
    dest: "build/css",
  },
  watch: {
    html: "src/**/*.html",
    css: "src/**/*.scss",
  },
};

const removeBuild = (cb) => {
  fs.existsSync("build") && fs.rmdirSync("build", { recursive: true });
  cb();
};

const html = () => gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));

const css = () =>
  gulp
    .src(routes.css.src)
    .pipe(gsass().on("error", gsass.logError))
    .pipe(gautoprefixer())
    .pipe(gcleancss())
    .pipe(gulp.dest(routes.css.dest));

const devServer = () => gulp.src("build").pipe(gserver({ livereload: true }));

const watcher = () => {
  gulp.watch(routes.watch.html, html);
  gulp.watch(routes.watch.css, css);
};

const setup = gulp.series(removeBuild);

const build = gulp.series(setup, html, css);

const dev = gulp.series(build, devServer, watcher);

module.exports = {
  build: build,
  dev: dev,
};
