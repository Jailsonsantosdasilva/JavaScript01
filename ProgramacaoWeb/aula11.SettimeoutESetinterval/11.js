function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar"
    // Executa uma vez apos o tempo determinado
    tempo = setTimeout(function(){
      document.body.style.backgroundColor = "red"
    }, 5000)
}

function paraContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "contagem parou"
}