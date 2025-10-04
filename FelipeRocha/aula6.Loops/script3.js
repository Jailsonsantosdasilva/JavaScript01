// FOR IN para percorrer objetos
const pessoa = {
    nome: "luiz",
    sobrenome: "rocha",
    idade: 39,
    endereço:{
        cidade: "sao paulo",
        rua:"galvao",
        numero:"398"
    }
}

for(property in pessoa){
    console.log(pessoa[property])
}