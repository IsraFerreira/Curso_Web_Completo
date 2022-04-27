// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function negativos(x){
    let numNegativo = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] < 0){
            numNegativo ++
        }
    }
    return console.log(`Numeros negativos: ${numNegativo}`)
}

negativos(vetor = [-5, -10, 2, 4, 8, -3])