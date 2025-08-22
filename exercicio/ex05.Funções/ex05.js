function Dizer_Ola(nome="fulano") {
    console.log("ola " + nome)
}

Dizer_Ola("Pedro")
Dizer_Ola("carlos")
Dizer_Ola("luiz")
Dizer_Ola()

function se_apresentar(nome, idade){
    console.log("Meu nome e " + nome);
    console.log("Eu tenho " + idade)
}

se_apresentar("Maria", 20 + " anos")
se_apresentar("Paulo", 49 + " anos")

function criar_nome_completo(nome, sobrenome, sexo){
    if (sexo == "M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F"){
        return `Sra. ${nome} ${sobrenome}`
    } else{
        `${nome} ${sobrenome}`
    }
}

const nomeCompleto = criar_nome_completo("Jailson", "Silva", "M");
console.log(nomeCompleto)
Dizer_Ola(nomeCompleto)

// Funções seta
const dizer_oi = () => console.log("oii");
dizer_oi();

const dizer_oi_tudo_bem = () =>{
    console.log("oii");
    console.log("tudo bem");
}

dizer_oi_tudo_bem()

const soma = (x, y) => {
    return x + y;
}

const resultado = soma(10, 15);

console.log(resultado)