var gulp = require('gulp'),
    less = require('gulp-less'),
	uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin');
gulp.task('css', function() {
  gulp.src('less/*.less').pipe(less()).pipe(gulp.dest('css'))
});
gulp.task('script', function() {
    gulp.src('js2/*.js').pipe(uglify()).pipe(gulp.dest('js'))
})
gulp.task('minifycss', function() {
	gulp.src('css/*.css').pipe(minifycss()).pipe(gulp.dest('css'));   
});
gulp.task('img', () =>
    gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('img'))
);
gulp.task('img', function () {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('disc/img'));
});
//gulp.task('testHtmlmin', function () {
//  var options = {
//      removeComments: true,//清除HTML注释
//      collapseWhitespace: true,//压缩HTML
//      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//      minifyJS: true,//压缩页面JS
//      minifyCSS: true//压缩页面CSS
//  };
//  gulp.src('*.html')
//      .pipe(htmlmin(options))
//      .pipe(gulp.dest('css'));
//});
gulp.task('default', function() {
  gulp.watch('less/*.less',['css']);
  gulp.watch('css/*.css',['minifycss']);
  gulp.watch('js2/*.js',['script']);
});