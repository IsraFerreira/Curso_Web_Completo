// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function intervalo(x){
    let fora = 0
    let dentro = 0
    let vFora = []
    let vDentro = []
    for(let i = 0; i < x.length; i++){
        if(x[i] >= 10 && x[i] <= 20){
            dentro++
            vDentro.push(x[i])
        }
        else{
            fora++
            vFora.push(x[i])
        }
    }
    return console.log(`Dentro do intervalo: ${dentro} - ${vDentro}
Fora do intervado: ${fora} - ${vFora}`)
}





intervalo(vetor = [5, 10, 15, 20, 25, 30, 35, 40, 45])
intervalo(vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])