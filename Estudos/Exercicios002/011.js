function receberSomenteOsParesDeIndicesPares(array){
    let resultado = []
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){
            if(array[i] % 2 == 0){
                resultado.push(array[i])
            }
        }
    }
    return console.log(resultado)
}



receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornarĂ¡ []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornarĂ¡ [10, 22]