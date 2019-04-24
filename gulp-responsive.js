const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

exports.default = function () {
   return gulp.src('src/img/*.jpg')
     .pipe($.responsive({
       '*': [{
            width: 300,
            rename: { suffix: '-sm' }
         },
         {
            width: 600,
            rename: { suffix: '-md' }
         },
         {
            width: 1200,
            rename: { suffix: '-lg' }
         },
         { rename: { suffix: '-xl' } 
      }],
     }, {
       format: 'jpg',
       quality: 70,
       progressive: true,
       withMetadata: false,
       stats: true
     }))
     .pipe(gulp.dest('public/img'));
 };
