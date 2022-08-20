const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync =require("browser-sync").create();
// const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
// css

function style(){
    return gulp.src("./src/scss/**/*.scss")
            .pipe(sass().on("error",sass.logError))
            // .pipe(cleanCss())
            .pipe(gulp.dest("./src/css"))
            .pipe(browserSync.stream());
}

function bundlejs(){
    return gulp.src("./src/js/**/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./src/script"))
}

function watch(){
    browserSync.init({
        server:{
            baseDir:"./src"
        }
    })
    gulp.watch("./src/scss/**/*.scss",style);
    gulp.watch("./src/*.html").on("change",browserSync.reload);
    gulp.watch("./src/js/**/*.js",bundlejs);
}


exports.style = style;
exports.watch = watch;
exports.bundlejs = bundlejs;

// Image minification


// import gulp from 'gulp';
// import imagemini from 'gulp-imagemin';
 
// gulp.task('miniImg',()=>{
//     return gulp.src("src/assets/Images/**/*")
//     .pipe(imagemini())
//     .pipe(gulp.dest("public/assets/Images"))
// })