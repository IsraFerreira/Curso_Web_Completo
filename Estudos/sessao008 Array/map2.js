const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]


// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) //transforma JSON em objeto
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const precos = carrinho.map(paraObjeto).map(apenasNome)
const precos2 = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)
console.log(precos2)