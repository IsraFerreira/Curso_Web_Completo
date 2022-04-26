// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function leitura(x) {
    let qtdPares = 0
    let qtdImpares = 0

    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    return console.log(`Pares: ${qtdPares}
Impares: ${qtdImpares}`)
}



leitura(vetor = [1, 2, 3])