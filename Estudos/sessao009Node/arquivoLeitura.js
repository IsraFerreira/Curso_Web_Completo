const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Forma síncrona - pode travar esperando ler o arquivo completo para a proxima requisicao 
const conteudo = fs.readFileSync(caminho,  'UTF-8')
console.log(conteudo)

// assíncrona 
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})