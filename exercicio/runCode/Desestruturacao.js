const number = [1, 2, 3, 4, 5];

const user = {
    nome: "Jailson",
    idade: 33,
    sobrenome: "silva",
    endereco: {
        cidade: "Paraiba",
        estado: "João pessoa"
    }
}

function getAge({idade}){
    return idade
}

console.log(getAge(user)) 