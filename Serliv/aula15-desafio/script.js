

function btn(){
 let numero1 = document.getElementById("n1").value;
let numero2 = document.getElementById("n2").value;

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resultado = numero1 * numero2;

let mostraTela = document.getElementById("texto");

mostraTela.innerHTML = `O resultado é ${resultado} cm²`

document.getElementById("n1").value = "";
document.getElementById("n2").value = "";
}