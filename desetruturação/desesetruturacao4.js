const pessoa = {

    nome: "jailson",
    sobrenome: "silva",
    idade: 20,
    endereco: {
        rua: "Rua da paz"
    }

}

const {nome: nomeUsuario, idade: anos} = pessoa

console.log(nomeUsuario)
console.log(anos)