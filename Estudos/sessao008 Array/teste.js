const carrinho = [
    '{"nome": "teste1", "preco": 12.99 }',
    '{"nome": "teste2", "preco": 13.99 }',
    '{"nome": "teste3", "preco": 14.99 }',
]


const objeto = e => JSON.parse(e)
const preco = e => e.preco


const precos = carrinho.map(objeto).map(preco)

console.log(precos)


