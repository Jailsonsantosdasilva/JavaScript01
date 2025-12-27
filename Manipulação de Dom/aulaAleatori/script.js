let btnAnterior = document.querySelector(".anterior");
let btnProximo = document.querySelector(".proximo");
let listaImg = document.querySelectorAll("img");
let contador = 0;
console.log(listaImg)

btnProximo.onclick = function passarSlider(){
    document.querySelector("img.ativo").classList.remove("ativo");

    if(contador < 2){
            contador = contador + 1
    } else{
        contador = 0
    }



    listaImg[contador].classList.add("ativo");
}

btnAnterior.onclick =function voltarSlider(){
    document.querySelector("img.ativo").classList.remove("ativo");

    if(contador > 0){
        contador = contador - 1
    }else{
        contador = 2
    }

    listaImg[contador].classList.add("ativo");
}