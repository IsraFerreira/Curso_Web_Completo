const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') // /** (qualquer subpasta dentro de SRC) /* - qualquer arquivo
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) //pega o código e converte para ser mimificado (uma linha so e sem espaços)
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build')) 
    

}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)