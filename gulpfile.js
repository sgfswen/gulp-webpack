/**
 * Created by lily on 2016/9/7.
 */
var gulp = require("gulp"),
    minifycss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    webpack = require("webpack-stream");

//webpack
gulp.task("webpack_task",function() {
   return gulp.src("source/js/*/*.js")
    .pipe(webpack( require("./webpack.config.js") ))
       .pipe(uglify())
    .pipe(gulp.dest("target/js/webpack_gulp_test"));
});

//自动监听文件改变
gulp.task("auto",function(){
   gulp.watch("source/js/*/*.js",["webpack_task"]);
});

//默认任务
gulp.task("default",["webpack_task","auto"]);