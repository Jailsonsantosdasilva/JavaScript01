let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n1){
    if(n1.indexOF(Number(n1)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valores ${num.valores} adicionado`
        lista.appendChild(item)
    } else {window.alert('Valor invalido ou ja adicionado na lista')
    }
    num.value = ''
    num.focus()
}   