function verificarCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();




switch (cor){
    case "azul":
       document.body.style.backgroundColor = "blue"
        break;
    case "amarelo":
        document.body.style.backgroundColor = "yellow"
        break;
    case "preto":
        document.body.style.backgroundColor = "black"
        break;
    case "vermelho":
        document.body.style.backgroundColor = "red"
        break;
    default:
    document.getElementById("teste").innerHTML = `nenhuma cor disponivel para: ${cor}`
}
}