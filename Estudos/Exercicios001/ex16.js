function operacao(x, string, y) {
    let operacao = 0
    switch (string) {
        case '+':
            operacao = x + y
            console.log(`${operacao}`)
            break
        case '-':
            operacao = x - y
            console.log(`${operacao}`)
            break
        case '*':
            operacao = x * y
            console.log(`${operacao}`)
            break
        case '/':
            operacao = x / y
            console.log(`${operacao}`)
            break
        default:
            console.log('Operação inválida')
    }
}

operacao(10, '+', 20)
operacao(15, '-', 5)
operacao(5, '*', 2)
operacao(20, '/', 5)