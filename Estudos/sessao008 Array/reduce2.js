const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: todos os alunos são bolsistas?
const resultadoBolsista = (acumulador, atual) => acumulador && atual
console.log(alunos.map(a => a.bolsista).reduce(resultadoBolsista))

// Desafio 2: algum aluno é bolsista?
const resultadoAlgum = (acumulador, atual) => acumulador || atual
console.log(alunos.map(a => a.bolsista).reduce(resultadoAlgum))


