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

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener("click", (e) =>{
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === ''){
        errorMessage.textContent = 'Pleassemfill out the fields';
        errorMessage.classList ='error';
        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = ''
        }, 3000);

        return;
    }

    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br/> Email: ${emailValue}`

    items.appendChild(li)

    
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
});