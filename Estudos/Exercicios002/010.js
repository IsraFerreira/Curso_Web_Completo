// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:


function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }

    return console.log(resultado)
}


objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})    