const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //massa quebrou o carro! - Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona elementos
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição
console.log(pilotos)

//Splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a partir do índice marcado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //cria um novo array a partir do indice marcado de inicio e o inidice final (não entrando o indice final)
console.log(algunsPilotos2)