const form = document.querySelector("#form");


form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.querySelector("#name");
    const inputBox = name.closest(".input-box");
    const nameValue = name.value;
    

    const erroIcon = '<i class="fa-solid fa-circle-exclamation"></i>'

    const erroSpan = inputBox.querySelector(".error")
    erroSpan.innerHTML = "";

    inputBox.classList.remove('invalid')
    inputBox.classList.add('valid')

    if(!nameIsValid(nameValue)){
        erroSpan.innerHTML = `${erroIcon} O campo é obrigatorio`
        inputBox.classList.add('invalid')
        inputBox.classList.remove('valid')
        return;
    }

})

function isEmpty(value){
    return value === "";
}

function nameIsValid(value){
    const isValid = true;

    if (isEmpty(value)){
         isValid = false;
         return isValid
    }

    return isValid
}