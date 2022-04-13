function lanche(codigo, quantidade) {
    let conta = 0
    switch (codigo) {
        case 100:
            conta = quantidade * 3
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        case 200:
            conta = quantidade * 4
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        case 300:
            conta = quantidade * 5.50
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        case 400:
            conta = quantidade * 7.50
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        case 500:
            conta = quantidade * 3.50
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        case 600:
            conta = quantidade * 2.80
            console.log(`Você pediu ${quantidade}, sua conta é igual a: R$${conta} reais`)
            break
        default:
            console.log('Produto não existente')
    }
}

lanche(100, 3)
lanche(200, 4)
lanche(300, 5)
lanche(400, 6)
lanche(500, 7)
lanche(600, 8)
