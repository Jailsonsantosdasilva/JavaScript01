let output = document.getElementById("output");



let mensagem = '';

for( let i = 0; i < 100; i++){
    mensagem += `i: ${i}`;
}

output.innerHTML = mensagem;