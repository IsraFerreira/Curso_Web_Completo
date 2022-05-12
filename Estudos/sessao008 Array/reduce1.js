const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ //acumulador e atual são padrões
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) //no final, depois da callback eu adiciono um valor para somar (acumulador / valor inicial)

console.log(resultado)

