console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort() //Coloca os elementos em ordem
console.log(aprovados)

delete aprovados[1] //exclui atributos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //a partir do índice (primeiro numero) exclui uma quantidade de itens (segundo numero) e depois adiciona os elementos posteriores na altura do índice
console.log(aprovados)

