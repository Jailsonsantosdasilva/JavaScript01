const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const btn = document.querySelector("#submit-button");
const Error = document.querySelector(".msg");
const items = document.querySelector(".items");

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const nameValue = nameinput.value;
    const emailValue = emailinput.value;

    if(emailValue == "" || nameValue == ""){
            Error.innerHTML = "ERRO"
            Error.classList = "error"

        setTimeout(() => {
            Error.innerHTML = ""
            Error.classList = ""
        }, 2000);
        return;
    }

    const li = document.createElement("li");
    li.classList = "item"
    li.innerHTML = `nome: ${nameValue} <br/> email: ${emailValue}`
    items.append(li)

    nameinput.value = "";
    emailinput.value = "";
})