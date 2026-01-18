const endPonit = "https://randomuser.me/api/"

fetch(endPonit)
.then(res => res.json())
.then(dados => {
    console.log(dados)
})