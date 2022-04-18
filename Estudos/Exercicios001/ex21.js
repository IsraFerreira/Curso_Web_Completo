// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function saude(x){
    let total = 100
    if(x < 10){
        total += 80
        return console.log(`Valor do plano: ${total} reais`)
    }
    else if(x >= 10 && x <= 30){
        total += 50
        return console.log(`Valor do plano: ${total} reais`)
    }
    else if(x > 30 && x <= 60){
        total += 95
        return console.log(`Valor do plano: ${total} reais`)
    }
    else if(x > 60){
        total += 130
        return console.log(`Valor do plano: ${total} reais`)
    }
}

saude(9)
saude(10)
saude(31)
saude(61)