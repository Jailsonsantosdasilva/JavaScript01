function btncadastro(){
    let nome = document.getElementById("inputNome").value;
    let numero = document.getElementById("inputNumero").value;

    let texto = document.getElementById("texto");
    texto.innerHTML = `Ola, ${nome} sua incrição foi realizada, caso vocé seja sorteado, ligaremos para seu numero: ${numero}`

   document.getElementById("inputNumero").value = "";
   document.getElementById("inputNome").value = "";
}