    const numeros = [1, 2, 3, 4, 5];

    numeros.forEach(function (numero){
        console.log(numero);
    })

    const letras = ["A", "B", "C", "D", "E"];

    letras.forEach(function (letras, indice){
        console.log(`${indice}: ${letras}`)
    })

    const tarefa = [
        {
            id:1,
            text:"Estudar",
            completo:false,
        },
        {
            id:2,
            text:"Trabalhar",
            completo:false,
        },
        {
            id:3,
            text:"Limpar a casa",
            completo:true,
        },
    ]

    tarefa.forEach(function (tarefa, indice, minhasTarefas){
        console.log(`${indice + 1}: ${tarefa.text}`)
        console.log(minhasTarefas)
    })

    const vetorDeTextosDasTarefas = tarefa.map(function (tarefa){
        return tarefa.text;
    })

    console.log(vetorDeTextosDasTarefas);

    const tarefa1 = tarefa.filter(function (tarefa){
        return tarefa.id === 1;
    })

    console.log(tarefa1)

    const vetor = [1, 2, 3, 4];
    const valorinicial = 0

    const soma = vetor.reduce(function (acumulado, elementoatual){
        return acumulado + elementoatual
    }, valorinicial);

    console.log(soma)

