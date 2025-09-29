// Javascript Aula 31 - Faixa de preço (Exercicio)
// é que vocé crie um array de objetos de caixa de preço para que ela possa ser usado em  um site igual o mercado livre

//  primeira opção
let faixas = [
    {tooltip: 'ate R$700', minino:0, maximo:700,},
    {tooltip: 'de R$700 a R$1000', minino:700, maximo:1000,},
    {tooltip: 'R$1000 ou mais', minino:1000, maximo:9999999,}
];

// segunda opção (Factory function)
function criarFaixaPreco(tooltip,minino,maximo){
    tooltip,
    minino,
    maximo
}

let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000)
]

// Terceira Opção (Constructor function)
function Faixapreco(tooltip,minino,maximo){
    this.tooltip = tooltip,
    this.minino = minino,
    this.maximo = maximo
}

let Faixa3 = [
    new Faixapreco('e',10,20),
    new Faixapreco('d',20,30),
    new Faixapreco('f',40,50)
]

console.log(faixas);
console.log(faixas2);
console.log(Faixa3);