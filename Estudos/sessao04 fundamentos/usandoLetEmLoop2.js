const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () { //colocar elemento no array com função anonima
        console.log(i)
    })
}
//Função é um closure
funcs[2]()
funcs[8]()