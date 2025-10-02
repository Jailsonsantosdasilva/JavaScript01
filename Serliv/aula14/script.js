

function Calcular(){

let numeroPrompt = document.getElementById("numeroPrompt").value;
let numeroPrompt2 = document.getElementById("numeroPrompt2").value;

numeroPrompt = parseFloat(numeroPrompt);
numeroPrompt2 = parseFloat(numeroPrompt2);

let resultado = numeroPrompt * numeroPrompt2;

let mostraTela = document.getElementById("texto");

mostraTela.innerHTML = `O resultado é ${resultado}  cm²`;

document.getElementById("numeroPrompt").value = ''
document.getElementById("numeroPrompt2").value = ''
}