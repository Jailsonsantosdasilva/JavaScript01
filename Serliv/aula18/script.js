const numeros = [25, 30, 45, 28, 0, 12, 78, 64];

// filtra apenas os números pares
const pares = numeros.filter(num => num % 2 === 0);
// soma todos os números pares
const soma = pares.reduce((acumulador, num) => acumulador + num, 0);
// mostra na tela
let p = document.getElementById("texto").innerHTML = pares
let p2 = document.getElementById("texto2").innerHTML = soma
