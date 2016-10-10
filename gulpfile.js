var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var path = require('path');

var wiredep = require('wiredep').stream;
var reload = browserSync.reload;

gulp.task('inject', function () {
  var js = [
    './public/**/*.js',
    '!./public/bower_components/**/*.js'
  ];

  var css = [
    './public/**/*.css',
    '!./public/bower_components/**/*.css'
  ];

  var options = {
    ignorePath: 'public',
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'public/bower_components'
  }

  return gulp.src('./public/index.tpl')
    .pipe(inject(gulp.src(js, {read: false}), options))
    .pipe(inject(gulp.src(css, {read: false}), options))
    .pipe(rename('index.html'))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest('./public'));

});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    open: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'frontend-server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('default', ['inject', 'browser-sync'], function () {
  gulp.watch(['public/**/*.html'], reload);
  gulp.watch(['public/**/*.js'], function() {
    gulp.start('inject');
    reload;
  });
  gulp.watch(['public/**/*.css'], function() {
    gulp.start('inject');
    reload;
  });
});
