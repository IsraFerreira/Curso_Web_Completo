// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function media(x){
    let total = x.length
    let soma = 0
    for(let i = 0; i < x.length; i++){
        soma += x[i]
    }
    let mediaTotal = soma / total
    return console.log(`A média é: ${mediaTotal}`)
}

media(vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])