const fetUsers = new Promise((res, rej) => {
    fetch("https://jsonpla.typicode.com/users")
    .then(response => response.json())
    .then(data => res(data))
    .catch(error => rej("deu erro" + error))
})

fetUsers.then(users => console.log("usuario", users))
.catch(error => console.log("erro", error))