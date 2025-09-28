// IF..ELSE
// Switch .. case

// se a hora estive entre 06:00 até 12:00 bom dia!
//  se estive entre 12:00 até 18:00 boa tarde!
// caso contrario : boa noite!
let hora = 19;
if(hora > 6 &&  hora < 12){
    console.log("bom dia!")
}else if(hora > 12 && hora < 18){
    console.log("boa tarde!")
}else{
    console.log("boa noite!")
}