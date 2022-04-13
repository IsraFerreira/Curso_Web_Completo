// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function dinheiro(valor) {
    let resposta = ''
    let temp = 0
    if (valor >= 100) {
        if (valor % 100 == 0) {
            temp = valor / 100
            resposta = resposta + ` ${temp} nota(s) de R$100.`
            valor = 0
        }
        else {
            temp = valor / 100
            temp = Math.floor(temp)
            resposta = resposta + ` ${temp} nota(s) de R$100.`
            valor = valor - (100 * temp)
        }
    }
    if (valor >= 50) {
        if (valor % 50 == 0) {
            temp = valor / 50
            resposta = resposta + ` ${temp} nota(s) de R$50.`
            valor = 0
        }
        else {
            temp = valor / 50
            temp = Math.floor(temp)
            resposta = resposta + ` ${temp} nota(s) de R$50.`
            valor = valor - (50 * temp)
        }
    }
    if (valor >= 10) {
        if (valor % 10 == 0) {
            temp = valor / 10
            resposta = resposta + ` ${temp} nota(s) de R$10.`
            valor = 0
        }
        else {
            temp = valor / 10
            temp = Math.floor(temp)
            resposta = resposta + ` ${temp} nota(s) de R$10.`
            valor = valor - (10 * temp)
        }
    }
    if (valor >= 5) {
        if (valor % 5 == 0) {
            temp = valor / 5
            resposta = resposta + ` ${temp} nota(s) de R$5.`
            valor = 0
        }
        else {
            temp = valor / 5
            temp = Math.floor(temp)
            resposta = resposta + ` ${temp} nota(s) de R$5.`
            valor = valor - (5 * temp)
        }
    }
    if (valor >= 1) {
        if (valor % 1 == 0) {
            temp = valor / 1
            resposta = resposta + ` ${temp} nota(s) de R$1.`
        }
        else {
            temp = valor / 1
            temp = Math.floor(temp)
            resposta = resposta + ` ${temp} nota(s) de R$1.`
            valor = valor - (1 * temp)
        }
    }
    return console.log(resposta)
}

dinheiro(516)
dinheiro(7516)
