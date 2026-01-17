const minhaPromise = new Promise((res, rej) =>{
    if(false){
        res("ok")
    }else{
        rej("erro")
    }
})

minhaPromise
.then(message => console.log(message))
.catch(message => console.log(message))

// FETCH    

fetch('https://viacep.com.br/ws/01001000/json/')
.then((mes) => { 
    if(!mes.ok){
        throw new Error("Erro na requisição " + mes.status)
    }
    return mes.json()
})
.then(dado => {
    console.log(dado)
})
.catch((erro) => console.log(erro.mes))