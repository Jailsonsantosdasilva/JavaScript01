function VerificarEntrada(){
    NomeConvidado = document.getElementById("nome").value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas','Carol', 'Jhonatan']

    if (ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'vocé pode entrar!'
    } else {
        document.getElementById("PermissaoDeEntrada").innerText = "vocé não pode entra!"
    }
}