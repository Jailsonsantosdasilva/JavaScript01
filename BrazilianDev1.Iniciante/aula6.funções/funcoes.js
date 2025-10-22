// function
function soma (num1, num2){
    const soma = num1 + num2
    return soma
}

console.log(soma(15, 15))

const resultado = soma (15, 15)

console.log(resultado)

console.log(resultado + 10)

const somaAnonima = function(n1, n2){
    return n1 + n2
}


console.log(somaAnonima(10, 5))

const somaArrow = (um, dois) => um * dois

console.log(somaArrow(2, 5))