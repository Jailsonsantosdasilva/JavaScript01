function adicionarTarefa(){
    let mensagem = "tarefa adicionada com sucesso";
//    atribuindo uma variavel

    let inputTarefa = document.getElementById("inputTarefa")
    // pegando o id do input
    let tarefa = inputTarefa.value;
    // pegando ovalor do inpiut

     document.getElementById("mensagem").textContent = mensagem;
    //  adicionando a variavel mensagem no p

     let listaTarefa = document.getElementById("listaTarefas")
    //  pegando o id do ul
     let novaTarefa = document.createElement("li")
    //  criando o elemento li

     novaTarefa.textContent = tarefa
    // mostrando onde coloca o valor do input digitado
     listaTarefa.appendChild(novaTarefa)
    //  mostrando onde adicionar o li na ul
     inputTarefa.value = ""
    //  zerando depos de adicionar

    if(tarefa === ""){
        alert("digite algo")
    }
}

