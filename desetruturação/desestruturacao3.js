const pessoa = {
    nome: "jj",
    sobrenome: "silva",
    idade: 19,
    endereco: {
        pais: "Brazil"
    }
}

const {nome, sobrenome, idade, endereco} = pessoa;

console.log(`me chamo ${nome} meu sobrenome é ${sobrenome} e tenho ${idade} moro no ${endereco.pais}`)