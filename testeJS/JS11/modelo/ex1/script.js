function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours;
    msg.innerHTML = `agora são ${hora} horas.`;
    if(hora >= 0 ){
        img.src = 'manha.png'
    } else if(hora >= 12 && hora <= 18){
        img.scr = 'tarde.png'
    } else {
        img.src = 'noite.png'
    }
}