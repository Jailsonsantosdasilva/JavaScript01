let interrupito = "off";

if(interrupito == "on"){
    alert("Lampada ligada")
} else if(interrupito == "off"){
    alert("lampada desligada")
} else{
    alert("sem dados no momento, aguarde.")
}

let hora = 90;

if(hora < 12){
    console.log("Bom dia")
}else if(hora < 18){
    console.log("boa tarde")
} else{
    console.log("boa noite")
}

function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "por favor digite seu nome";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "parabens tudo certo";
        p.style.color = "yellow";
        let corpo = document.querySelector("body");
        corpo.style.background = "blue"
    }
}