// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function notas(codigo, nota1, nota2, nota3){
    let maiorNota = 0
    let mediaPond = 0
    let menorNota1 = 0
    let menorNota2 = 0
    if(nota1 >= nota2 && nota1 >= nota3){
        maiorNota = nota1
        menorNota1 = nota2
        menorNota2 = nota3
    }
    else if(nota2 >= nota1 && nota2 >= nota3){
        maiorNota = nota2
        menorNota1 = nota1
        menorNota2 = nota3
    }
    else if(nota3 >= nota1 && nota3 >= nota2){
        maiorNota = nota3
        menorNota1 = nota1
        menorNota2 = nota2
    }
    mediaPond = (((maiorNota * 4)  + (menorNota1 * 3) + (menorNota2 * 3))/10)
    if(mediaPond >= 5){
        return console.log(`Aluno: ${codigo} \n
        Nota 1: ${nota1} \n
        Nota 2: ${nota2} \n
        Nota 3: ${nota3} \n
        Média: ${mediaPond} \n
        Situação: APROVADO`)
    }
    else {
        return console.log(`Aluno: ${codigo}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${mediaPond}
Situação: REPROVADO`)
    }
}

notas(1234, 4, 4, 4)