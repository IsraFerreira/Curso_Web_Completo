// setTimeout(function () {
//     console.log('Executando callback... 1')

//     setTimeout(function () {
//         console.log('Executando callback... 2')

//         setTimeout(function(){
//             console.log('Executando callback... 3')

//         }, 2000)
//     }, 2000)
// }, 2000)

let num = 0

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            num++
            console.log(`Executando promise...${num}`)
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)