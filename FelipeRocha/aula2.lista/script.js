const nomes = ["felipe","joao", "julio", 10, false];


// aadiciona no final da lista outro nome
// nomes.push("Jailson");

console.log(nomes);

// adicionar no inicio da lista
// nomes.unshift("pricila");

// console.log(nomes)

// remove o ultimo item da lista
nomes.pop();
nomes.pop();


console.log(nomes);

// altera um item da lista
nomes[1] = "Gustavo";

console.log(nomes)

// procura um item dentro da lista
console.log(nomes.indexOf("julio"));

// deixa a lista em ordem alfabetica
const sortedNomes = nomes.sort();
console.log(sortedNomes)

// quantos items tem na lista
console.log(nomes.length);

// verifica se é uma lista
const nomeisArrY = Array.isArray(nomes);
console.log(nomeisArrY);