const numeros = [1, 2, 3, 4, 5];

const user = {

    nome: 'Gustavo',
    idade: 19,
    sobrenome: 'araujo',
    endereco: {

        cidade: 'Brasilia',
        estado: 'são paulo'

    }

}

const {nome, sobrenome, endereco} = user

console.log(nome)
console.log(sobrenome)
console.log(endereco.cidade)