class Pessoa{

    constructor(nome, sobrenome, idade, endereco){

        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.endereco = endereco

    }

    infro(){

        console.log(this)
        console.log(`Nome: ${this.nome}`)
        console.log(`Sobrenome: ${this.sobrenome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Endereço: ${this.endereco}`)

    }


    falar(){

        console.log(`Olá, menu nome é ${this.nome} é meu sobrenome ${this.sobrenome} tenho ${this.idade}, moro em ${this.endereco}`);

    }

}

const EuPessoa = new Pessoa("Clau", "Carvalho", 40, "brazil, AM");
const EuPessoa2 = new Pessoa("Jailson", "Santos", 20, "brazil, SP");
const EuPessoa3 = new Pessoa("line", "souza", 18, "brazil, BH");

EuPessoa.infro()
EuPessoa2.infro()
EuPessoa3.infro()