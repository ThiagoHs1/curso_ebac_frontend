const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimeJavascrit () {
    return gulp.src('./source/scripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));

}

function CompiladorSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
}

function ComprimeImagem () {
    return gulp.src('./source/images/*.')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.CompilaSass = CompiladorSass;
exports.CompilaImagem = ComprimeImagem;
exports.Javascript = comprimeJavascrit;
