const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const mulher = funcionario => funcionario.genero == 'F'
const pais = funcionario => funcionario.pais == 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const f = funcionarios.filter(mulher).filter(pais).reduce(menorSalario)

    console.log(f)
})

// Mulher chinesa com menor salário
