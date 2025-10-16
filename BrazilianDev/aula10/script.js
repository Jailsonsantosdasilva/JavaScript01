// Arguments

// const somaTresNumeros = (n1, n2, n3) => {
//     return n1 + n2 + n3;
// }

// resultado = somaTresNumeros(10, 5, 15);

// console.log(resultado)

function somaIlimitada () {
    const args = Array.from(arguments)
    let soma = 0;

    for(let i = 0; i < args.length; i++){
        soma += args[i];
    }
    return soma;
}

console.log(somaIlimitada(1, 2, 3, 4, 5))