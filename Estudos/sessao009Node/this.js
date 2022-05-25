console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports) //this fora da funcao remete a algo que será visto fora do escopo do modulo

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //this dentro de uma função é global
}

logThis()