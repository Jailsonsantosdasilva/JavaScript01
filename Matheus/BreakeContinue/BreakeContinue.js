// com break podemos encerrar uma instrução;
// Com o continue podemos pular uma instrução;
// Utilizado na maioria das vezes em loops;

// for(let i = 10; i > 0; i--){

// console.log(i)

//    if(i === 5){
//     break;
// }




// }

let H = 0;

while(H < 50){
    H += 10;
    if(H === 30){
        console.log("numero 30 foi pulado")
        continue;
    }

    console.log(`estando o continue ${H}`)
}