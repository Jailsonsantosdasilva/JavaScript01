
function adicionarTarefa() {
  let tarefa = document.getElementById("inputTarefa").value;

  if (tarefa.trim() === "") {
    document.getElementById("mensagem").textContent = "Digite uma tarefa!";
    return;
  }

  // cria um <li>
  let li = document.createElement("li");
  li.textContent = tarefa;

  // adiciona na lista
  document.getElementById("listaTarefas").appendChild(li);

  // limpa o input
  document.getElementById("inputTarefa").value = "";
  document.getElementById("mensagem").textContent = "";
}

// Detecta quando pressionar Enter dentro do input
document.getElementById("inputTarefa").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});
