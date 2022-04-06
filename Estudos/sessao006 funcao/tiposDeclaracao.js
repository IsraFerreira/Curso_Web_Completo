// function declaration
function soma(x, y){ //posso chamar mesmo antes de declarar
    return x + y
}

// function expression
const sub = function (x, y){ //só posso chamar depois de declarada
    return x - y
}

// named function expression
const mult = function mult(x, y){ //só posso declarar depois de declarado
    return x * y
}

