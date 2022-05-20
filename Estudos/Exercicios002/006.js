// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(conteudo, quantidade) {
    let resultado = []
    for (let i = 0; i < quantidade; i++) {
        resultado.push(conteudo)
    }
    return console.log(resultado)
}

repetir("código", 2)
repetir(7, 3)