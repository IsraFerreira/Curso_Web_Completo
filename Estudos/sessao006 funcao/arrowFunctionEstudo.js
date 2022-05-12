let dobro = function (a) {
    return 2 * a
}

dobro2 = a => { //sempre é uma função anonima
    return 2 * a
}

dobro3 = a => 2 * a //sem chaves tem um retorno implicito


console.log(dobro2(2))
console.log(dobro3(2))

ola = () => 'Olá'
console.log(ola())




function Pessoa() {
    this.idade = 0


    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)

}

new Pessoa