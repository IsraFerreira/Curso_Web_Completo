// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function numeros(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number"){
            resultado.push(array[i])
        }
    }
    return console.log(resultado)
}



numeros([3, 5, 10, "Olá", "Principal"])
numeros(["teste", "a", 2, "b", 10, 15])