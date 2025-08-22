const pessoaA = {
    nome:"pedro",
    sobrenome:"silva",
    dataDenascimento: new Date("8-2-90"),
    obterNomwCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}
console.log(pessoaA.nome)
console.log(pessoaA.obterNomwCompleto())
// Função construtora
function pessoa (nome, sobrenome, dataDenascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDenascimento = new Date(dataDenascimento);
}

const pessoa1 = new pessoa("jailson", "silva", "11-23-05")
const pessoa2 = new pessoa("joao", "santos", "11-23-10")

console.log(pessoa1)
console.log(pessoa2)