function maiorOuIgual(num1, num2){
    let numero1 = num1
    let numero2 = num2
    if(numero1 === numero2){
        return console.log("true")
    }
    else if(numero1 > numero2){
        return console.log("true")
    }
    else {
        return console.log("false")
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)