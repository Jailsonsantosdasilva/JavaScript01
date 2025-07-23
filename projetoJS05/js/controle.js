let contador = 0;
let input = document.getElementById('inputTarefa')
let btnadd = document.getElementById('btn-add')
let main = document.getElementById('arealista')

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorinput = input.value;
    // SE NÃO PODE SE FAZIO, NEM NULO, NEM INDEFINIDO
    if((valorinput !=="") && (valorinput !==null) && (valorinput !==undefined) ) {
        ++contador;

        let novoItem =`<div id="${contador}"class="item">
        <div onclick="marca()" class="item-icone">
             <i id="${contador}" class="fa-regular fa-circle"></i>
        </div>
        <div class="item-nome">
            ${valorinput}
        </div>
        <div class="item-botao">
            <button onclick="deletar()" class="delete" type="button"><i class="fa-solid fa-trash"></i>delete</button>
        </div>
    </div>
`;
        //ADICIONAR NOVO ITEM NO MAIN   
    main.innerHTML += novoItem
    //ZERA OS CAMPINHOS
    input.value = ""
    input.focus();
    }
}
function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marca(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    if(classe=="item"){
        item.classListadd(clicado)
        var icone = document.getElementById('icone_' + id){
        icone
        }
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        event.preventDefault();
        btnadd.click();
    }
})