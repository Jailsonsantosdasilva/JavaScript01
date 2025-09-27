// operadores Aritiméticos(matematicos)
// operadores de Atribuição
// operadores de comparação
// operadores logicos
// operadores Bitwise

// Operadores Aritimeticos
let salario = 100;
// +, - , * , / , **
// incremento e decremento: ++, --

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// exemplo
let idade = 18;
console.log(idade++);
console.log(idade);


// Operador de Atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// Operadores de igualdadsde
// igualdade estrita
console.log(1 ===1)

// operador ternário
// tem um cliente, 100 premium, comum
let pontos = 200;
let tipo = pontos > 100 ? 'premium': 'comum';
console.log(tipo);

// Operadores logicos
// operador (&&), retorna true se os dois operadores forem true
console.log(true && true)


let mairoDeIdade = false;
let PossuiCarteirDeTrabalho = false;
let podeAplicar = mairoDeIdade || PossuiCarteirDeTrabalho;
console.log(podeAplicar)

// operador logico ou (||)
// Retonar true se um dos operadores forem true
console.log('pode aplicar',podeAplicar)

// operador NOT (!)
let candidatoRecusado = !podeAplicar;
console.log('recusado', candidatoRecusado)