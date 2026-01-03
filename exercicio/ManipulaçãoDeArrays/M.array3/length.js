// length - Ela é usada para saber quantos elementos algo tem.

let arr = [1, 2, 3, 4, 5, 6, 7, 8,9];

// console.log(arr.length)


let nome = "Jailson";

// console.log(nome.length)


// push - usado para adicionar um ou mais elementos no final de uma lista.

arr.push(100)

// pop - usado para remover o último elemento de uma lista.

arr.pop()

// unshift - usado para adicionar um ou mais elementos no início da lista.


arr.unshift("inicio");
//  shift - usado para remover o primeiro elemento da lista.

arr.shift();


// como acessar o ultimo elemento
console.log(arr[arr.length - 1]);


// verificar si e array
console.log(Array.isArray(arr))