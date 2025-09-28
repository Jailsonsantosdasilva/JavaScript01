// 1. for
// 2.while
// 3.do..while
// 4.for..in
// 5.for..of

// 1.for

//  for(let i = 1; i < 10; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
//  }

// while loop
// let i = 5;

// while (i >= 1) {
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// Do..while
// let i = 0;

// do {
//     console.log("digitando", i)
//     i++;
// } while(i < 10);

// for in 

const pessoa = {
    nome: "Jailson",
    idade: 19,

}

// key-value
for(let chave in pessoa){
    console.log(chave,pessoa['nome'])
}

const cores = ['vermelho', 'azul', 'verde', 'preto', 'amarelo'];

for(let indice in cores){
    console.log(indice,cores[indice])
}

// for of

for(let cor of cores){
    console.log(cor)
}