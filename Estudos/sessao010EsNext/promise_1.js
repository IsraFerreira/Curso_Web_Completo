let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) //na promise nós colocamos uma função, que como parâmetro tem outra função
})


const primeiroElemento = arrayOuSrting => arrayOuSrting[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

p.then(valor => valor[0])
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log) //um resultado do then é passado para o proximo e para o proximo



