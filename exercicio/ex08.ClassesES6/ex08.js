// function pessoa(nome, sobrenome, dataDeNascimento) {
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.dataDeNascimento = new Date(dataDeNascimento);

//     this.obterNomeCompleto = () => {
//         return `${this.nome} ${this.sobrenome}`;
//     }
// }
// Classe ES6
class pessoa {
    constructor(nome, sobrenome ,dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
    }
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new pessoa("João", "Silva", "7-7-99");
console.log(pessoa1)