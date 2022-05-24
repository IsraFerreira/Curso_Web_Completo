const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// const moduloA2 = require('D:\Arquivos de Programa RFB\ProjetosGitHub\Curso_Web_Completo\Estudos\sessao009Node\moduloA.js')
// console.log(moduloA2.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
const { endsWith } = require('lodash')
http.createServer((req, res) => {
    res.write('Bom dia! Tudo bem?')
    res.end()
}).listen(8080)

const c = require('./pastaC')
console.log(c.ola2)

