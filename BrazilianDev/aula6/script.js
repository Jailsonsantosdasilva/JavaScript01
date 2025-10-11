class  Dev{
    constructor(nome, idade,linguagem){
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
    }
    saudacao(){
        console.log(`oi Sou Dev Frontend, trabalho com ${this.linguagem} é me chamo ${this.nome} é tenho ${this.idade}\n\n`)
    }
}

// EXEMPLO

class FrontEndDev extends Dev{
    constructor(nome, idade,linguagem, framework){
        super()
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.framework = framework;
    }
    saudacao(){
        console.log(`oi Sou Dev Frontend, trabalho com ${this.linguagem} é me chamo ${this.nome} é tenho ${this.idade}\n\n`)
    }
}

class  BackendDev extends Dev{
    constructor(nome, idade,linguagem, bancoDeDados){
        super()
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.bancoDeDados = bancoDeDados;
    }
    saudacao(){
        console.log(`oi Sou Dev Backend, trabalho com ${this.linguagem} é me chamo ${this.nome} é tenho ${this.idade}\n\n`)
    }
}


const FrontEnd1 = new FrontEndDev("Jailson", 20, "JS", "React");
const BackendDev1 = new BackendDev("Jailson", 20, "C#", "SQL server");


console.log(FrontEnd1)
console.log(BackendDev1)