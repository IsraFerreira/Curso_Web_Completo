// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorMenor(x){
    let maior = 0
    let menor = 100000000
    for(let i = 0; i < x.length; i++){
        if(x[i] > maior){
            maior = x[i]
        }
        if (x[i] < menor){
            menor = x[i]
        }
    }
    return console.log(`Maior número do vetor = ${maior}
Menor número do vetor = ${menor}`)
}

maiorMenor(vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])
maiorMenor(vetor = [5, 10, 15, 20, 25, 30, 35, 40, 45])
