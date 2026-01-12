// const coffee = new Promise((resolve, reject)=>{
//     reject({message: "promessa  quebrada"})
// })

// coffee.then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// })

async function endereco(estado){
    const en = await fetch('https://api.testingbot.com/v1/free-tools/random-address' + estado)
    console.log(await en.json())
}

endereco()