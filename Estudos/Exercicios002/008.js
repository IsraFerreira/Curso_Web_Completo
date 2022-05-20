function receberPrimeiroEUltimoElemento(array){
    let inicial = ''
    let ultimo = ''
    let resultado = []
    for(let i = 0; i < array.length; i++){
        if(array[0]){
            inicial = array[0]
        }
        ultimo = array[i]
    }
    resultado.push(inicial)
    resultado.push(ultimo)
    return console.log(resultado)
}

receberPrimeiroEUltimoElemento([7, 14, "olá"])
receberPrimeiroEUltimoElemento([-100, "Aplicativo", 16])

function teste01(array){
    let inicial = 0
    let final = array.length - 1
    const primeiroElemento = array[inicial]
    const ultimoElemento = array[final]

    return console.log(`[${primeiroElemento}, ${ultimoElemento}]`)
}

teste01([7, 14, "olá"])
teste01([-100, "Aplicativo", 16])