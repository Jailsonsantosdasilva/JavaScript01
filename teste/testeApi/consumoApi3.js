//  Busca simples de usuario

const url = `https://reqres.in/api/users/123`;

fetch(url, {
    method: 'GET',
})
.then((response) => {
    console.log(response)
    if(response.ok){
        throw new Error(`Erro de requisição ${response.status}`)
    }
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})