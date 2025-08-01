const pessoa = {
    nome:"Jailson",
    sobrenome:"santos",
    dataDenascimento: new date ("11-23-20"),
    obiterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    },
    obiteAnoNascimento(){
        return this.dataDenascimento.getFullyear();
    }
}
console.log(pessoa.nome);
console.log(pessoa.sobrenome);