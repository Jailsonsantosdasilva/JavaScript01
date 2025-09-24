const inputTexto = document.getElementById("inputTexto");
const lista = document.getElementById("lista")

function AdiconarBtn() {
    const inputvalor = inputTexto.value.trim();
    if((inputvalor !== "" )){
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${inputvalor}</span>
        <button class="btnedita" onclick="btnEdita(this)">Editar</button>
        <button class="btndelete" onclick="btnDelete(this)">Deleta</button>
        `
        lista.appendChild(li);
        inputvalor.value = "";
    }
}

function btnEdita(button){
    const li = button.parentElement;
    const span = li.querySelector("span")
    const newTexto = prompt("edita tarefa", span.textcontent)
    if(newTexto !== null && newTexto.trim() !== ""){
        span.textcontent = newTexto.trim()
    }
}

function btnDelete(button){
    const li = button.parentElement
    lista.removeChild(li)
}