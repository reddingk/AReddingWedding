var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var del = require('del');

var config = {
  src: {
    appJs:[
      'app/js/**/*.js',
      'app/js/*.js'
    ],
    appLess: [
      'app/less/**/*.less'
    ],
    libsJs: [
      'app/libs/jquery/dist/jquery.min.js',
      'app/libs/bootstrap/dist/js/bootstrap.min.js',
      'app/libs/angular/angular.min.js',
      'app/libs/angular-route/angular-route.min.js',
      'app/libs/angular-material/angular-material.min.js',
      'app/libs/angular-animate/angular-animate.min.js',
      'app/libs/angular-aria/angular-aria.min.js',
      'app/libs/angular-messages/angular-messages.min.js',
      'app/libs/angular-ui-router/release/angular-ui-router.min.js',
      'app/libs/angular-bootstrap/ui-bootstrap.min.js',
      'app/libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/libs/randomcolor/randomColor.js',
      'app/libs/moment/min/moment.min.js',
      'app/libs/angular-ui-calendar/src/calendar.js',
      'app/libs/fullcalendar/dist/fullcalendar.min.js',
      'app/libs/fullcalendar/dist/gcal.js',
      'app/libs/angular-timeline/dist/angular-timeline.js',
      'app/libs/angular-scroll/angular-scroll.min.js',
      'app/libs/ng-parallax/angular-parallax.min.js',
      'app/libs/bookBlock/js/modernizr.custom.js',
      'app/libs/bookBlock/js/jquery.bookBlock.js',
      'app/libs/bookBlock/js/jquerypp.custom.js'/*,
      'app/libs/scattered-polaroids/js/modernizr.min.js',
      'app/libs/scattered-polaroids/js/classie.js',
      'app/libs/scattered-polaroids/js/photostack.js'*/
    ],
    libsCSS: [
      'app/libs/angular-material/angular-material.min.css',
      'app/libs/bootstrap/dist/css/bootstrap.min.css',
      'app/libs/font-awesome/css/font-awesome.min.css',
      'app/libs/animate.css/animate.min.css',
      'app/libs/angular-bootstrap/ui-bootstrap-csp.css',
      'app/libs/fullcalendar/dist/fullcalendar.min.css',
      'app/libs/angular-timeline/dist/angular-timeline-bootstrap.css',
      'app/libs/angular-timeline/dist/angular-timeline-animations.css',
      'app/libs/angular-timeline/dist/angular-timeline.css',
      'app/libs/bookBlock/css/bookBlock.css'/*,
      'app/libs/scattered-polaroids/css/component.css',
      'app/libs/scattered-polaroids/css/normalize.css'*/
    ]
  },
  dest:{
    appJs:'public/js',
    appCSS:'public/css'
  }
};

gulp.task('clean', function(){
  var files = [].concat(
		config.dest.appJs,
		config.dest.appCSS
	);

  return del.sync(files, {force: true });
});

gulp.task('app-js', function(){
  // Bundle all JS files into one files

  return gulp.src(config.src.appJs)
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest(config.dest.appJs));
});

gulp.task('app-less', function(){
  // Build all Less files into one min CSS
  return gulp.src(config.src.appLess)
      .pipe(concat('styles.min.css'))
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest(config.dest.appCSS));
});

gulp.task('lib-js', function(){
  // Bundle all JS Library files into one files

  return gulp.src(config.src.libsJs)
      .pipe(concat('libs.min.js'))
      .pipe(gulp.dest(config.dest.appJs));
});
gulp.task('lib-css', function(){
  // Bundle all JS Library files into one files

  return gulp.src(config.src.libsCSS)
      .pipe(concat('libs.min.css'))
      .pipe(gulp.dest(config.dest.appCSS));
});

gulp.task('build', function(done){
  runSequence('clean', ['app-js', 'app-less', 'lib-js', 'lib-css'], done);
});

gulp.task('default', ['build'], function () { });
