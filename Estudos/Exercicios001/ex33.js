// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

function vetores(inteiro, string, double){
    let resultado = []
    for(let i=0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return console.log(`${resultado}`)
}



vetorInteiro = [1, 2, 3, 4]
vetorString = ['Ana', 'Pedro', 'Carlos', 'Israel']
vetorDouble = [1.5, 2.3, 3.7, 5.6]

vetores(vetorInteiro, vetorString, vetorDouble)

