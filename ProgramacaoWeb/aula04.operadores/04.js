// operadore são: + - * / = ++ -- += -= && || etc...


// Operadores Aritméticos(matemáticos)
var valor1, valor2, total;

valor1 = 5;
valor2 = 2;
total = valor1 + valor2;
total2 = valor1 - valor2;
total3 = valor1 * valor2;
total4 = valor1 / valor2;
total5 = valor1 = valor2;
total6 = ++valor1;
total7 = --valor1;



console.log(`o valor ficou :${total}`);
console.log(`o valor ficou :${total2}`);
console.log(`o valor ficou :${total3}`);
console.log(`o valor ficou :${total4}`);;
console.log(`o valor ficou :${total5}`);
console.log(`o valor ficou :${total6}`);
console.log(`o valor ficou :${total7}`);


// Operador de Atribuição

const maisIgual = valor1 += valor2;
const menosIgual = valor1 -= valor2;

console.log(maisIgual);
console.log(menosIgual);

// Operador de Sequêcia

valorn1 = "Jailson";
valorn2 = " silva";

totaln = valorn1 + valorn2;
// concatenação

console.log(totaln);

// Operadores de Comparaçâo

valorb1 = 8;
valorb2 = 10;

 totalb = (valorb1 == valorb2);
 //  true (verdadeiro) ou false (falso)
 totalb2 = (valorb1 != valorb2);
// diferente ou (Não igual)

 console.log(totalb);
 console.log(totalb2);

//  Operador condicional (ternário)

var idade, eleitor, Resultado;

idade = 18;
eleitor = (idade < 18) ? "Não eleitor" : "Sim eleitor";

Resultado = (idade > 60 && idade < 70);
// true ou false

Resultado2 = (idade === 65 || idade== 72);
// true ou false

Resultado3 = !(idade === 65);
// Não igual

console.log(`Resposta é "${eleitor}"`);

console.log(`Resposta é "${Resultado}"`);

console.log(`Resposta é "${Resultado2}"`);

console.log(`Resposta é "${Resultado3}"`);