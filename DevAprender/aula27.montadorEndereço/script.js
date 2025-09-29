// javascript - Objeto Endereço
// Criar um objeto endereço  que contem
// rua
// cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    Rua: 'a',
    Cidade:'b',
    cep:'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco){
        console.log(chave, endereco,[chave])
    }
}

exibirEndereco(endereco)