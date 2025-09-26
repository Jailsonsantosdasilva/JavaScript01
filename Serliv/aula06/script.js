let numero1 = prompt("digite um numero");
let numero2 = prompt("digite outro numero");

let numero1I = Number(numero1);
let numero2I = Number(numero2);

soma = numero1I + numero2I;

if(soma > 5){
    alert("parabens aprovado")
}else if(soma <= 5){
    alert("reprovado")
};