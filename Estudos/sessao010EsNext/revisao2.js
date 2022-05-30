// Arrow function
const soma = (a, b) => a + b // quando não tem corpo da função, implicitaente tem um return - sempre é uma função anônima
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador rest (junta/agrupa)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))