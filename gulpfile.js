const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync =require("browser-sync").create();
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const webp = require('gulp-webp');
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

function webpConvert(){
    return gulp.src('./src/assets/images/png/**/*.*')
        .pipe(webp())
        .pipe(gulp.dest("./public/assets/images/webp/"));
}

function png(){
    return gulp.src('src/assets/images/png/**/*.*')
        .pipe(gulp.dest(["./public/assets/images/png/"]));
}

exports.style = style;
exports.watch = watch;
exports.bundlejs = bundlejs;
exports.png=png;
exports.webpConvert=webpConvert;

// Image minification

// import gulp from 'gulp';
// import imagemini from 'gulp-imagemin';
 
// gulp.task('miniImg',()=>{
//     return gulp.src("src/assets/Images/**/*.png")
//     .pipe(imagemini())
//     .pipe(gulp.dest("public/assets/Images"))
// })

// build

function buildStyle(){
    return gulp.src("./src/scss/**/*.scss")
            .pipe(sass().on("error",sass.logError))
            .pipe(cleanCss())
            .pipe(gulp.dest("./public/css"))
            .pipe(browserSync.stream());
}

function buildJs(){
    return gulp.src("./src/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./public/script"))
}

function buildHtml(){
    return gulp.src("./src/**/*.html")
    .pipe(gulp.dest("./public/"))
}

function buildFont(){
    return gulp.src("./src/assets/fonts/**/*")
    .pipe(gulp.dest("./public/assets/fonts/"))
}




exports.build=build;
exports.buildHtml=buildHtml;
exports.buildJs=buildJs;
exports.buildStyle=buildStyle;
exports.buildFont=buildFont;