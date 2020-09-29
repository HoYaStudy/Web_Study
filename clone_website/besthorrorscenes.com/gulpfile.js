const gulp = require("gulp");
const gsass = require("gulp-sass");
const gautoprefixer = require("gulp-autoprefixer");
const gcleancss = require("gulp-clean-css");
const gimage = require("gulp-image");
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
  image: {
    src: "src/image/*",
    dest: "build/image",
  },
  watch: {
    html: "src/**/*.html",
    css: "src/**/*.scss",
    image: "src/image/*",
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

const image = () =>
  gulp.src(routes.image.src).pipe(gimage()).pipe(gulp.dest(routes.image.dest));

const devServer = () => gulp.src("build").pipe(gserver({ livereload: true }));

const watcher = () => {
  gulp.watch(routes.watch.html, html);
  gulp.watch(routes.watch.css, css);
  gulp.watch(routes.watch.image, image);
};

const setup = gulp.series(removeBuild);

const build = gulp.series(setup, html, css, image);

const dev = gulp.series(build, devServer, watcher);

module.exports = {
  build: build,
  dev: dev,
};
