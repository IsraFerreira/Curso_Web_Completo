const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const mulher = funcionario => funcionario.genero == 'M'
    const pais = funcionario => funcionario.pais == 'China'
    const salario = funcionario => funcionario.salario
function sal(){

}

    console.log(funcionarios.filter(mulher).filter(pais).reduce(sal()))




})

// Mulher chinesa com menor salário



// console.log(alunos.map(a => a.nota))
// const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ //acumulador e atual são padrões
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 10) //no final, depois da callback eu adiciono um valor para somar (acumulador / valor inicial)

