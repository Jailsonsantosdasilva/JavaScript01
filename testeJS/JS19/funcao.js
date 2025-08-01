function CriarNomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

const NomeCompleto = CriarNomeCompleto("jailson", "Silva")
console.log(NomeCompleto)

//  função seta

let dizer_oi = () => console.log("oi;")
dizer_oi()

// OUTRO EXEMPLO

let soma = (x,y) => {
    return x+y;
}

let resultado = soma(10, 15);
console.log(resultado);