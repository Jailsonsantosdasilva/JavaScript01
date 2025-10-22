let p = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if( a == 2){
    resolve("Success")
    } else {
        reject("failed")
    }
})

p.then((message) =>{
    console.log("sei la acho que foi " + message)
}).catch((message) =>{
    console.log("foi 2" + message)
})