// Estrutura For;
// O for tem uma sintaxe mais complexa, mais é optado pela maioria dos programadores;
// Apesar de parecer mais dificil, como a intrução fica toda em uma linha proporciona maior controle;
// Vamos ver na prática!

for(let i = 1; i <= 5; i++){
    console.log(`repetidor ${i}`)
}

let lista = ['ovo', 'feijão', 'arroz', 'tomate', 'cebola']

for(let i = 0; i <= lista.length; i++){
    console.log(`itens  ${lista[i]}`)
}

console.log(lista.length)
console.log(lista)

for(let x = 2; x < 100; x*=3){
    console.log(x)
}