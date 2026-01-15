// const testPromise = new Promise((resolve, reject) => {
//     const resultado = 20 + 20;

//     if(resultado === 40){
//         resolve("Deu certo")
//     }else{
//         reject("Deu tudo errado")
//     }
// })

// testPromise
// .then((message) => console.log(message))
// .catch((message) => console.log(message))

// const apiTeste = 'https://api.open-meteo.com/v1/forecast?latitude=40.7120&longitude=-74.0060&current_weather=true'

// let isLoading = true;

// fetch(apiTeste)
// .then(response => {
//     if(!response.ok){
//        throw new console.error('error:' + response.status);
        
//     }

//     return response.json()
// })
// .then(data => {
//     console.log('Temperatura', data.current_weather.temperature)
// })
// .catch(error => {
//     console.error('erro im catch', error)
// })
// .finally(() => {
//     isLoading = false
// })

async function myFunction(){
    try{
            const reponse = await fetch(apiUrl)
    }catch(error){
       console.error(error) 
    }

}

myFunction()
console.log('C')