var watch_scss_path = './',
    main_scss_path = './',
    bs_path = ''

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var gutil = require("gulp-util");
var rename = require("gulp-rename");

//Sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');

//sass and js sourcemaps
var sourcemaps = require('gulp-sourcemaps'); 

/**
 * Config options
 * @type {}
 */
var sassdocOptions = {
  dest: './docs/',
  package: {
    title: 'Mazorca',
    name: 'Mazorca',
    version: '1.5.3',
    license: 'GNU',
    homepage: 'github.com/el-cultivo/mazorca',
    description: 'Scss Framework'
  }
};

gulp.task('sass', function(){
  return gulp.src(main_scss_path + 'mazorca.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .pipe(rename("compiled.css"))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('sassdoc', function () {
  return gulp
    .src(main_scss_path + './core/**/*.scss')
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

gulp.task('browser-sync', function() {
  browserSync.init(['./style.css'],{ //files to inject
     proxy: "localhost:8888" + bs_path
  });
});


gulp.task('watch', [/*'browser-sync',*/ 'sass', 'sassdoc'/*, 'webpack'*/], function() {
  gulp.watch(watch_scss_path + '/**/*.scss', ['sass']); 
  gulp.watch(watch_scss_path + '/**/*.scss', ['sassdoc']); 
});







