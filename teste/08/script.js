// estrutura de repetição

// let i = 1;

// while (i <= 50){
//     console.log(i)
//     i++
// }

// exemplo

let contador = 0;
let nome = prompt("Digite seu nome");
let soma = 0;

while(contador <= 10){
    let nota = (`nota ${contador}:`)
    contador++
    soma += nota
}

console.log(contador)