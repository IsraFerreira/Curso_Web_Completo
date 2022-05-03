// pessoa -> 123 - > {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}
pessoa.nome = 'Ana'

Object.freeze(pessoa) //Não podemos mais mexer no objeto

pessoa.nome = 'Maria'
console.log(pessoa.nome)


const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)