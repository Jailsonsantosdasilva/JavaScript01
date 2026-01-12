// Promessa completa : RESOLVE
// Promessa falha: REJECT

// const answer = new Promise((resolve, reject) => {
//     const videos = 1

//     if(videos == 2){
//         resolve("Postei 2 videos")
//     }else{
//         reject("Não postei dois videos")
//     }
// })

// answer
// .then(message => console.log(message))
// .catch(error => console.log(error))

const uploadVideoOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("video 1 uploaded")
    }, 2000)
})

const uploadVideoTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("video 2 uploaded")
    }, 1000)
})

const uploadVideoThree = new Promise((resolve, rejec)=>{
    setTimeout(()=>{
        resolve("video 3 uploaded")
    }, 1000)
})

Promise.all([uploadVideoOne, uploadVideoTwo, uploadVideoThree])
.then(value => console.log(value))