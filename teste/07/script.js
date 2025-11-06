let seuSexo = prompt("Infrome seu sexo:  [M] Masculino é [F] Feminino");


switch(seuSexo){
    case "M":
        alert("Vocé é Homem")
    break;

    case "m":
        alert("Vocé é Homem")
    break;

    case "F":
        alert("vocé é mulher")
    break;

    case "f":
        alert("vocé é mulher")
    break;

    case "":
        alert("Preencha o campo")
    break;

    default:
    alert("nada encontrado")
    break;
}