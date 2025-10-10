// Arrow function

// expressão de função
const minhaF = function(){
    console.log("alguma coisa");
}

// Declaração de função
function minhaf (){
    console.log("alguma coisa")
}


// Arrow function

const funcao = () => console.log( "uma expresão de função")

const obj  =  {
    thisLocal:funcao(){
        const thisLocal = (() => console.log(this))()
        console.log(thisLocal)
    }
}

obj.thisLocal()