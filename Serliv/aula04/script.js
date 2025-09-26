let numero1 = prompt("digite um numero");
let numero2 = prompt("digite outro numero");

numero1 = Number(numero1);
numero2 = Number(numero2);

numero1I = parseInt(numero1);
numero2I = parseInt(numero2);

let soma = numero1I % numero2I;
let soma2 = numero1I ** numero2I;

alert(`o resto da divisão de ${numero1} e ${numero2} é: ${soma}`);
alert(`o resto da divisão de ${numero1} e ${numero2} é: ${soma2}`);

