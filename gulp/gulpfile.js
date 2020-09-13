const gulp = require("gulp");
const gpug = require("gulp-pug");
const gsass = require("gulp-sass");
const gautoprefixer = require("gulp-autoprefixer");
const gcleancss = require("gulp-clean-css");
const gbro = require("gulp-bro");
const babelify = require("babelify");
const guglify = require("gulp-uglify");
const gimage = require("gulp-image");
const fs = require("fs");
const gserver = require("gulp-webserver");

gsass.compiler = require("node-sass");

const routes = {
  html: {
    src: "src/*.pug",
    dest: "build",
  },
  css: {
    src: "src/scss/styles.scss",
    dest: "build/css",
  },
  javascript: {
    src: "src/js/main.js",
    dest: "build/js",
  },
  image: {
    src: "src/img/*",
    dest: "build/img",
  },
  watch: {
    html: "src/**/*.pug",
    css: "src/**/*.scss",
    javascript: "src/js/**/*.js",
    image: "src/img/*",
  },
};

const removeBuild = (cb) => {
  fs.existsSync("build") && fs.rmdirSync("build", { recursive: true });
  cb();
};

const html = () =>
  gulp.src(routes.html.src).pipe(gpug()).pipe(gulp.dest(routes.html.dest));

const css = () =>
  gulp
    .src(routes.css.src)
    .pipe(gsass().on("error", gsass.logError))
    .pipe(gautoprefixer())
    .pipe(gcleancss())
    .pipe(gulp.dest(routes.css.dest));

const javascript = () =>
  gulp
    .src(routes.javascript.src)
    .pipe(
      gbro({
        transform: [babelify.configure({ presets: ["@babel/preset-env"] })],
      })
    )
    .pipe(guglify())
    .pipe(gulp.dest(routes.javascript.dest));

const image = () =>
  gulp.src(routes.image.src).pipe(gimage()).pipe(gulp.dest(routes.image.dest));

const devServer = () => gulp.src("build").pipe(gserver({ livereload: true }));

const watcher = () => {
  gulp.watch(routes.watch.html, html);
  gulp.watch(routes.watch.css, css);
  gulp.watch(routes.watch.javascript, javascript);
  gulp.watch(routes.watch.image, image);
};

const setup = gulp.series(removeBuild);

const build = gulp.series(setup, html, css, javascript, image);

const dev = gulp.series(build, devServer, watcher);

module.exports = {
  build: build,
  dev: dev,
};
