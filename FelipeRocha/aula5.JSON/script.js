const todos = [
    
    {
        id:1,
        descrição:"estudando javascript",
        completo:false,
    },

    {
        id:2,
        descrição:"ler",
        completo:true,
    },

    {
        id:3,
        descrição:"treinar",
        completo:true,
    },
];

const todosJSON = JSON.stringify(todos);


const todosList = JSON.parse(todosJSON);
console.log(todosList[2].descrição)