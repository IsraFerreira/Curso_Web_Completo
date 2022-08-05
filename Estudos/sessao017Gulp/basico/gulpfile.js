const gulp = require('gulp')
const {series, parallel} = require('gulp')
// const { series } = require('gulp') //fazer varias tarefas em série

// const series = gulp.series 

const antes1 = cb => {
    console.log('Tareja Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tareja Antes 2!')
    return cb()
}

function copiar(cb){
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //seleciona arquivos como insumo (entrada) no workflow

    gulp.src('pastaA/**/*.txt') //qualquer arquivo na pastaA que tenha .txt via
        .pipe(gulp.dest('pastaB')) //faz transformação
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPetroEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
 
    return cb()
}

const fim = cb => {
    console.log('Tareja Fim!')
    return cb()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim)