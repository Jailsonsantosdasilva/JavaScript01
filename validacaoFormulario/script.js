const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const spans = document.querySelectorAll(".spans-box");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    nomevalidacao();
    emailvalidado();
    senhavalidacao();
    senhaigual();

    
  const temErro = [...spans].some(span => span.style.display === "block");

    if (!temErro) {
    alert("Formulário enviado com sucesso!");
    form.submit();
  }
})

function setError(i){
    spans[i].style.display = "block"
}

function validado(i){
    spans[i].style.display = ""
}

function nomevalidacao(){
    if(input[0].value.length >= 4){
        validado(0)
    }else{
        setError(0)
    }
}

function emailvalidado(){
    if(emailRegex.test(input[1].value)){
        validado(1)
    }else{
        setError(1)
    }
}

function senhavalidacao(){
    if(input[2].value.length >= 8){
        validado(2)
    }else{
        setError(2)
    }
}

function senhaigual(){
    if(input[2].value == input[3].value && input[3].value.length >= 8){
        validado(3)
    }else{
        setError(3)
    }
}