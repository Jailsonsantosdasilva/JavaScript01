// let numero = prompt("informe um numero")

// numeroNumber = Number(numero)

// if(numero % 2 == 0 ){
//     alert("O numero e par")
// }else{
//     alert("O numero e impar")
// }

// condicional composta

let nota1 = prompt("Nota 1");
let nota2 = prompt("Nota 2");

nota1Numero = Number(nota1);
nota2Numero = Number(nota2);
console.log(nota1Numero)
console.log(nota2Numero)

let resultado = (nota1Numero + nota2Numero) / 2;
console.log(resultado)
 if(resultado >= 7){
    alert(`Nota: ${resultado} Aprovado`)
} else if (resultado <= 4){
    alert(`Nota: ${resultado} Reprovado`)
} else{
    alert(`Nota: ${resultado} Recuperação`)
}

console.log(resultado)