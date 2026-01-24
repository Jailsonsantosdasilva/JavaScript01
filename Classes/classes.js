// class Carro{

//     constructor(valor1, valor2, valor3){

//         this.marca = valor1,
//         this.modelo = valor2,
//         this.ano = valor3

//     }

// }


// const uno = new Carro("Fiat", "Uno", 2001)
// const gol = new Carro("Volkswagrn", "gol", 2013)


// console.log(uno)
// console.log(gol)


class Pessoa {

    constructor(nome, sobrenome, idade) {
        
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade

    }

    apresentar(){
        console.log(`Olá, meu nome e ${this.nome} e meu sobrenome e ${this.sobrenome} é tenho ${this.idade}`)
    }

}

const eu = new Pessoa("Jailon", "silva", 20)
const eu2 = new Pessoa("paulo", "rocha", 18)
const eu3 = new Pessoa("natan", "lima", 28)


console.log(eu)
console.log(eu2)
console.log(eu3)

console.log(eu.nome)
console.log(eu2.sobrenome)
console.log(eu2.idade)


eu.apresentar()
eu2.apresentar()
eu3.apresentar()

// alterar

eu.idade = 90
console.log(eu.idade)