// igualdade de objetos

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoiguais(endereco1,endereco2){
    // comparar se as propriedade são iguais
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep
}

console.log(saoiguais(endereco1,endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2){
    // comparando se é a referéncia do objeto aponta para o mesmo locaal na memória
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));