// Prototypes

const animal = {
    som: "Som de animal",
    tipo: "animal",
    emitirSom: function(){
        console.log(this.som)
    }
}

const gato = {
    som: "miado",
    tipo: "animal",
}


const gatoRaivoso = {
    tipo: "gato Raivoso",
    miadoForte: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato);
gatoRaivoso.miadoForte()

console.log("TESTE")