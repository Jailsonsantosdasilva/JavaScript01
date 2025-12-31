const data = [
    {name: "Matheus", age:31, sallary:2000, driverLicense:true},
    {name: "joão", age:18, sallary:1500, driverLicense:false},
    {name: "Mariana", age:22, sallary:4000, driverLicense:true},
    {name: "pedro", age:50, sallary:7200, driverLicense:true},
    {name: "Erica", age:16, sallary:0, driverLicense:false},
]

// 1 - Reverse

const ReverseData = data.reverse();

// 2 - find 
const highSallary = 5000;

const highstSallary = data.find((user)=> user.sallary > highSallary)

// 5 - map
data.map((user)=> (user.newsletter = false))

//  6 - filter 
const  drivers = data.filter((user) => user.driverLicense);

//  7 - reduce 
const sallarisSum = data.reduce(
    (totalSallary, user) => (totalSallary += user.sallary), 0
)

// 8 - forEach

const showUserNames = (users) =>{
    users.forEach((user)=>{
        console.log(`ola ${user.name}`)
    })
}

showUserNames(data)

// 9 - some

let someonewithNewLetter = data.some((user)=> user.newsletter);

// 10 - every
const everyYserhasName = data.every((user) => user.name)

