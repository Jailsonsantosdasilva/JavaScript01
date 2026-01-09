const loginUser = (email, password, onSuccess, onError) =>{

    setTimeout(() => {
        const error = false;
        
        if(error){
           return onerror(new Error("error in login"))
        }
        
        
        console.log("user logged")
        callback({ email })
    }, 1500);
}

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject)=>{
        const error = false

        if(error){
            reject(new Error("error in login"))
        }

        console.log("user logged")
        resolve({email})
    })
}

loginUserPromise("Jailson@gmail.com", "123456").then((user)=>{
    console.log({user})
}).catch((error)=>{
    console.log({error})
})