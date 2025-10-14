class  Dev{
    constructor(nome, idade,linguagem, tipoDeDev){
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.tipoDeDev = tipoDeDev;
    }
    saudacao(){
        console.log(`oi Sou Dev ${this.tipoDeDev}, trabalho com ${this.linguagem} é me chamo ${this.nome} é tenho ${this.idade}\n\n`)
    }
}

// EXEMPLO

class FrontEndDev extends Dev{
    constructor(nome, idade,linguagem, framework, tipoDeDev){
        super()
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.framework = framework;
        this.tipoDeDev = tipoDeDev;
    }

}

class  BackendDev extends Dev{
    constructor(nome, idade,linguagem, bancoDeDados, tipoDeDev){
        super()
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.bancoDeDados = bancoDeDados;
        this.tipoDeDev = tipoDeDev;
    }

}


const FrontEnd1 = new FrontEndDev("Jailson", 20, "JS", "React", "FrontEnd");
const BackendDev1 = new BackendDev("Jailson", 20, "C#", "SQL server","BackEnd");


console.log(FrontEnd1)
console.log(BackendDev1)