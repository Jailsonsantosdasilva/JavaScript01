const vetor = ["A", 10, "oi", 1.5,true];
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maças", "laranjas", "peras", "uvas"];


// obter um valor
console.log(frutas[3]);
console.log(frutas[1]);
// adicionar um elemento
frutas[4] = "melancia";
console.log(frutas);
// Alterar o valor de um elemento
frutas[1] = "limão";
console.log(frutas);
// Adicionar um elemento no final do vetor
frutas.push("morangos");
console.log(frutas);
// Adicionar um elemento no inicio do vetor
frutas.unshift("bananas");
console.log(frutas);
// 
const removida = frutas.pop(frutas[1]);
console.log(frutas);
console.log(removida);

const removido2 = frutas.shift();
console.log(frutas);
console.log(removido2);

console.log(frutas.indexOf("maças"));

console.log(Array.isArray(frutas));
