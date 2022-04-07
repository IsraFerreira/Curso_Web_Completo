function arredondamento(x){
    valor = x.toFixed(2)
    return console.log(`R$ ${valor.toString().replace(".",",")}`)
}

arredondamento(0.30000000000000000000000000000000000004)