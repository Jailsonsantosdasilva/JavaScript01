const form = document.querySelector(".form");
const input = document.querySelectorAll("input");
const spanError = document.querySelectorAll(".span-erro");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    inputvalido()
    usuarioValido()
    senhaValido()
    senhasIgual()

    const temErro = [...spanError].some(spanError => spanError.style.display === "block")

    if(!temErro){
        alert("formulario ok")
        form.submit()
    }
})


function Erro(i){
    input[i].style.border = "2px solid red"
    spanError[i].style.display = "block"
}

function valido(i){
    input[i].style.border = "2px solid rgb(61, 194, 61)"
    spanError[i].style.display = "none"
}



function inputvalido(){
    if(input[0].value.length < 5){
        Erro(0)
    }else{
        valido(0)
    }
}

function usuarioValido(){
    if(input[1].value.length < 5){
        Erro(1)
    }else{
        valido(1)
    }
}


function senhaValido(){
    if(input[2].value.length < 8){
        Erro(2)
    }else{
        valido(2)
    }
}

function senhasIgual(){
    if(input[2].value === input[3].value && input[3].value.length >= 8){
        valido(3)
    }else{
        Erro(3)
    }
}