let input = document.getElementById('input-principal')
let botao = document.getElementById('botao-adicionar')
let listaCompleta = document.getElementById('tarefas')


let arrayDeTarefas = []

function MostrarNaTela() {
    let novaLista = ""

    arrayDeTarefas.forEach(tarefa =>{
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p>${tarefa}</p>
            </li>
        `
    })
    listaCompleta.innerHTML = novaLista
}



function clicarNobotao() {
    arrayDeTarefas.push(input.value)
    MostrarNaTela()
}




botao.addEventListener("click", clicarNobotao)