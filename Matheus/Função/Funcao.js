// Função são blocos de códigos reutilizáveis;
// Ou seja, evitamos a repetoção da lógica de um programa em diversas partes do código;
//  função precisa ser invocada para ser executada

function primeiraFuncao (){

    console.log("bla bla bla")

}

primeiraFuncao()

function DizerNome(nome, idade){
    console.log(`Seu nome é ${nome} é sua idade ${idade}`)
}

DizerNome("jailson", 20)
DizerNome("alex", 43)
DizerNome("julia", 18)

function soma(a, b){
    let soma = a + b;
    return soma
}

var somaUm = soma(2, 5)

console.log(somaUm)

function soma2(a, b){
    let resultado = a + b;
    return resultado
}

exibir = soma2(5, 6)

console.log(`5 mais 6 e igual a ${exibir}`)