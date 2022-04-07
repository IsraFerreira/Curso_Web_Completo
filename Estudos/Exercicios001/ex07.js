// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

function bhaskara(a, b, c){
    let resultados = []
    let delta = (b * b) - (4 * a * c)
    if(delta < 0){
        return console.log('Delta é negativo')
    }
    else {
    raiz = Math.sqrt(delta)
    let resposta1 = (-b + raiz) / (2 * a)
    let resposta2 = (-b - raiz) / (2 * a)

    resultados.push(resposta1)
    resultados.push(resposta2)
    return console.log(resultados)
    }
}

bhaskara(4, 20, 12)
bhaskara(1, 2, 3)
bhaskara(1, 3 ,2)

