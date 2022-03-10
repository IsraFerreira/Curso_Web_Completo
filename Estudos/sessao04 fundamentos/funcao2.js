// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(3, 2))


const mostrar = a => console.log(a)
mostrar('Legaaaal!!!!')





const quadrado = a => a * a
console.log(quadrado(10))