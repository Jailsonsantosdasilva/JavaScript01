class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    getFullName(){
        console.log( `${this.nome} ${this.sobrenome}`)
    }

    falar(){
        console.log("okay")
    }
}

const pessoa =  new Pessoa("Jailson", "silva", 19);

console.log(pessoa);
pessoa.getFullName();

pessoa.falar();
console.log(pessoa)