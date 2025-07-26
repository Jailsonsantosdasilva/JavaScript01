let pessoa = {
    nome: "Jailson",
    sobrenome:"Silva",
    idade:19,
    passaTempo:["musica", "jogar", "filme"],
    endereco:{
        rua:"anselmo",
        cidade:"tacima",
        estado:"PB",
    }
}

console.log(`ola seu nome e ${pessoa.nome} e seu sobrenome e ${pessoa.sobrenome} e sua idade e ${pessoa.idade} seu passa tempo favorito e ${pessoa.passaTempo[1]} e voce mora em ${pessoa.endereco.estado} em ${pessoa.endereco.cidade}`)