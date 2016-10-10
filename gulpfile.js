var gulp = require('gulp');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var path = require('path');

gulp.task('start', ['inject'], function() {
  nodemon({
    script: 'bin/www',
    ext: 'js html',
    env: {
    'NODE_ENV': 'development',
    'DEBUG': 'xamarin-app:*'
   }
 });
});

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
