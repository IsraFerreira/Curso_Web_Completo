function trabalho(plano, salario) {
    let salarioNovo = 0
    switch (plano) {
        case 'a':
            salarioNovo = salario + (salario * 0.1)
            console.log(`${salarioNovo}`)
            break
        case 'b':
            salarioNovo = salario + (salario * 0.15)
            console.log(`${salarioNovo}`)
            break
        case 'c':
            salarioNovo = salario + (salario * 0.2)
            console.log(`${salarioNovo}`)
            break
        default:
            console.log('Plano inválido')

    }
}

trabalho('a', 1000)
trabalho('b', 1000)
trabalho('c', 1000)
trabalho('d', 1000)