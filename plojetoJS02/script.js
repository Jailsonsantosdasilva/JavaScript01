function addTarefa() {
     let mensagemSucesso = "Tarefa adicionada com sucesso!";

        let inputtarefa = document.getElementById("inputtarefa")
        // pega o valor do input 
        let tarefa = inputtarefa.value.trim()
        
    // busca o elemento com o id

    
        inputtarefa.value = ""



    if (tarefa == "") {
        let mensagemErro = "Digite uma tarrefa para adicioná-la a sua lista"
        document.getElementById("mensagem").textContent = mensagemErro;
    } else {
        document.getElementById("mensagem").textContent = mensagemSucesso;
        let listatr = document.getElementById("listatr")
    let litr = document.createElement("li")
    litr.textContent = tarefa

    listatr.appendChild(litr)

    }

    }