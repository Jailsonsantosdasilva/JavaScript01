let numeros = [1, 2, 3, 4, 5];

// numero maximo
let max = Math.max(...numeros)

// numero minimo
let min = Math.min(...numeros)


console.log(max)
console.log(min)


let string = 'Jailson';

let letra = [...string].join("-");

console.log(letra)

let frutas = ["maça", "laranja", "banana"];

let vegetais = ["cenoura", "alface", "batata"];

let mistura = [...frutas, ...vegetais, "ovos", "leite"]


console.log(frutas)
console.log(mistura)