// const corredor1 = {

//     nome: 'Ayrton Sehna',
//     equipe: 'McLaren',
//     idade: 29,

//     correr:  function (){

//         console.log("vruuuuuum!")

//     },

// };

// const corredor2 = {

//     nome: 'Max Verstappen',
//     equipe: 'Red Bull Racing',
//     idade: 2,

//     correr:  function (){

//         console.log("vruuuuuum!")

//     },

// };


// console.log(corredor1)
// console.log(corredor1.nome)
// console.log(corredor1.equipe)
// console.log(corredor1.idade)
// corredor1.correr()

// console.log(corredor2)
// console.log(corredor2.nome)
// console.log(corredor2.equipe)
// console.log(corredor2.idade)
// corredor2.correr()

class Corredor{

    constructor(nome, equipe, idade){

        this.nome = nome,
        this.equipe = equipe,
        this.idade = idade


    }

    mostraInfo(){

    console.log(this),
    console.log(`Nome: ${this.nome}`);
    console.log(`equipe: ${this.equipe}`);
    console.log(`idade: ${this.idade}`);
    
    }

    correr(){

        console.log("vruuuuuuum")
        console.log("____________________________");

    }

}

const pessoa = new Corredor("Ayrton Sehna", "McLaren", 29)
const pessoa2 = new Corredor("Max Verstappen", "Red Bull Racing", 26)


pessoa.mostraInfo()
pessoa.correr()

pessoa2.mostraInfo()
pessoa2.correr()