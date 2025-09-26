let numero1 = prompt("digite um numero");
let numero2 = prompt("digite outro numero");

let numero1I = Number(numero1);
let numero2I = Number(numero2);

let sorteio = parseInt(Math.random() * 2);

if(numero1I == numero2I){
    alert("empate")
}else if(sorteio == 0){
    alert("Ganhador")
}else if(sorteio == 1){
    alert("perdedor")
}

console.log(sorteio)