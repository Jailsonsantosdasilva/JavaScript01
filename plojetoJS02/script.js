function addTarefa() {
     let mensagem = "Tarefa adicionada com sucesso!";

        let inputtarefa = document.getElementById("inputtarefa")
        // pega o valor do input 
        let tarefa = inputtarefa.value
        document.getElementById("mensagem").textContent = mensagem;
    // busca o elemento com o id
    let listatr = document.getElementById("listatr")
    let litr = document.createElement("li")

    litr.textContent = tarefa

    listatr.appendChild(litr)

        inputtarefa.value = ""
    }