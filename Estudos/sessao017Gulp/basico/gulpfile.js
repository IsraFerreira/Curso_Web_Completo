const gulp = require('gulp')
// const { series } = require('gulp') //fazer varias tarefas em série

const series = gulp.series 

function copiar(cb){
    console.log('Tarefa de copiar!')
    return cb()
}

module.exports.default = series(copiar)