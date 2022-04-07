// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (captInicial, juros, tempoApk){
    montante = captInicial * juros
    montantesimples = captInicial
    for (i = 1; i <= tempoApk; i++){
        montantesimples += montante
    }
    return console.log(`Ao final da aplicação terá R$${montantesimples} reais`)
}

function jurosCompostos (captInicial, juros, tempoApk){
    montantecomposto = captInicial
    manobra = captInicial
    
    for(i = 1; i <= tempoApk; i++){
        montantecomposto = montantecomposto + (manobra * juros)
        manobra = montantecomposto
    }

    return console.log(`Ao final da aplicação terá R$${montantecomposto} reais`)
}

jurosSimples(1000, 0.1, 5)
jurosCompostos(1000, 0.1, 5)