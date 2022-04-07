function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log('O triângulo é equilátero')
    }
    else
    if(lado1 != lado2 && lado2 != lado3){
        console.log('O triângulo é escaleno')
    }
    else
    if(lado1 == lado2 || lado2 == lado3 ){
        console.log('O triângulo é isósceles')
    }
}

triangulo(1, 2, 3)
triangulo(2, 2, 3)
triangulo(1, 1, 1)