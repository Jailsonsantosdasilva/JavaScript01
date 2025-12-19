const keys = document.querySelectorAll(".key");



function playNote(event){
    let audioKeyCode = getKeyCode(event);


    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return;
    }

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

    function getKeyCode(){
    let keycode;


    const isKeyboard = event.type === "keydown"
    if(isKeyboard){
        keycode = event.keycode
    } else{
        keycode = event.target.dataset.key;
    }

    return keycode;
    }

keys.forEach(function(key){
    key.addEventListener("click",playNote)
})

window.addEventListener("keydown", playNote);