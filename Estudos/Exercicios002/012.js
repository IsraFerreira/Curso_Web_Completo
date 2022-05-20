function somarNumeros(array){
    let resultado = []
    let soma = 0
    for(let i = 0; i < array.length; i ++){
        soma += array[i]
    }
    resultado.push(soma)
    return console.log(resultado)
}

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60