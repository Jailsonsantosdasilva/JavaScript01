import { readFile} from "node:fs/promises"

async function main(){

    let file;

    try {
        file = await readFile("./teste/testeApi/TryCatch/trycatch")
        console.log(file.toString())
    } catch (error) {
        console.log("Erro no arquivo")
    }finally{
        console.log("fim do tratamento de error")
    }

    console.log("fim do programa")

}

main()