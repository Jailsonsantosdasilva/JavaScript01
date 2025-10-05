// const SeletorH1 = document.querySelector('#add-user');
// SeletorH1.innerHTML = "alterado";
// SeletorH1.style.color = "red";
// SeletorH1.style.fontSize = "100px";


// selecionar multiplos elementos
// const items = document.querySelector(".items");


// items.firstElementChild.remove()
// items.lastElementChild.remove()

// items.remove();

// items.children[1].textContent = "alterado";


// const btnAlterado = document.getElementById("submit-button");

// btnAlterado.innerText = "sei la"
// btnAlterado.style.backgroundColor = "red"
// btnAlterado.style.fontSize = "50px"

const btn = document.querySelector(".btn");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const formulario = document.getElementById("my-form")
const item = document.querySelector('.items');
const body = document.querySelector("body");

btn.addEventListener("click", function(event){
event.preventDefault();

    const nomeValue = nome.value;
    const emailValue = email.value;

    console.log(nomeValue)
    console.log(emailValue)

    if(nomeValue === '' || emailValue === ''){
       return alert("Por favor, Digite seu nome é email")
    }

    formulario.style.backgroundColor = "red"

    item.firstElementChild.textContent = nomeValue

    item.children[1].textContent = emailValue

    body.style.backgroundColor = '#ccc'
});

