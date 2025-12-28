// Spread e Rest
// ...obj


const player = {
    nickName: "Jailson",
    health: 20,
    inventory:{
        items: ["sword", "shield", "bow" ],
        potions: [
            {type: "regeneration", duration:8},
            {type: "defense", duration:8},
        ]
    }
}

function updatePlayer(player, newProps){
    return { ...player, ...newProps}
}

const updatePlayer = updatePlayer(player,{
    nickName: "ze ruela",
    coins:0,
})

console.log(updatePlayer)