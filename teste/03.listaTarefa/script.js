// pega os elementos do HTML
const input = document.getElementById("textoinput");
const lista = document.querySelector(".lista");
const form = document.querySelector("form");

// função para adicionar a tarefa
function btnadd(event) {
    event.preventDefault(); // impede o formulário de recarregar a página

    const texto = input.value.trim(); // pega o texto digitado e remove espaços

    if (texto === "") {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    // cria os elementos
    const li = document.createElement("li");
    li.textContent = texto;

    // botão de excluir
    const span = document.createElement("span");
    span.textContent = "❌";

    // adiciona evento para excluir a tarefa
    span.addEventListener("click", () => {
        li.remove();
    });

    // adiciona evento para marcar como concluída
    li.addEventListener("click", () => {
        li.classList.toggle("feito");
    });

    // coloca o X dentro da tarefa
    li.appendChild(span);

    // adiciona a tarefa na lista
    lista.appendChild(li);

    // limpa o campo
    input.value = "";
}

// adiciona evento no formulário para usar Enter também
form.addEventListener("submit", btnadd);