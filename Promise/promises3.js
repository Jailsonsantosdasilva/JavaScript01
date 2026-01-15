function  carregarDados() {
    return new Promise((resolve, reject) => {
    console.log("estamos carregando os dados...")

    setTimeout(() => {
        const certoErrado = false;

        if(certoErrado){
            resolve("Deu tuod certo")
        }else{
            reject("Deu tudo errado")
        }
    },3000)
    })
}

carregarDados().then((resposta) => {
    console.log(resposta)
}).catch((resposta) => {
    console.log(resposta)
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then((api) => api.json())
.then((api) => console.log(api))