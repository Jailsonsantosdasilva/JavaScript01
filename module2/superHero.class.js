export default class superHero{

    constructor(name, power){
        this.name = name;
        this.power = power;
    }

}

export function printHeroName(hero){
    console.log(`Superhero name is: ${hero.name}`)
}

export function printHeropOWER(hero){
    console.log(`Superhero power is: ${hero.power}`)
}