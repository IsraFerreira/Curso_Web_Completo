Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

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

const precos = carrinho.map2(paraObjeto).map2(apenasNome)
const precos2 = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos)
console.log(precos2)