function btn(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "#fff"
   const btn = document.querySelector("button");

   btn.style.backgroundColor = "yellow";
   btn.style.color = "blue";
}

function mouseRed(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function fiazul(){
    let ficaazul = document.getElementById("teste");

    ficaazul.style.backgroundColor = "blue" 
}

function adicionar() {
    let p = document.getElementById("paragrafo");

    p.append('ok <br>')
}

function sair(){
    document.body.style.backgroundColor = "yellow"
}