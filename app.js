const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Hello ${username}`);
console.log("This is a Pokemon Game")
console.log("where the Goal is to collect as many pokemore as you can without getting defeated")
console.log("you start out with PIKACHU")
console.log("if you finish the game with 6 or more Pokemons and 0 defeats you WIN!")
console.log("Lets test your Pokemon knowledge")

let availablePokemons = ["Eevee","Squritle","Psyduck","Jigglypuff","Pidgey","Zubat",
"Diglett","Meowth","Abra","Geodude","Mankey","Bulbasaur","Charmander"]
let weakPokemons = ["Eevee","Squritle","Psyduck","Jigglypuff","Pidgey","Zubat",
"Diglett","Meowth"]
let strongPokemons =["Abra","Geodude","Mankey","Bulbasaur","Charmander"]
let yourPokemons = ["Pekachu"]
let currentPokemon = null;
let timesDefeated = 0;

const battle =() =>{
    if(weakPokemons.includes(currentPokemon)){
        console.log(`GREAT!.. you defeted ${currentPokemon}.. on to the next`)
        yourPokemons.push(currentPokemon)
        console.log("_________________________\n")
    }else{
        console.log(`Pekachu chould not defet ${currentPokemon} you loose :'(`)
        timesDefeated++
        console.log("_________________________\n")
    }
}

const game =() =>{
   for(let i=0; i<=12; i++){
    currentPokemon = availablePokemons[Math.floor(Math.random()*availablePokemons.length)]
    console.log(`you are faced against ((((${currentPokemon}))))`)
    let playerAnswer = prompt("Do you think you can beat it?? press  [c]  for CHATCH'EM OR  [r]  for RUN AWAY  ")
    console.log("_________________________\n")
    if(playerAnswer === "c"){
    battle() 
    }else if(playerAnswer === "r"){
        console.log("Good choice")
        console.log("_________________________\n")
    }
    availablePokemons.splice(availablePokemons.indexOf(currentPokemon),1)
    


} 
}

game()
    console.log("Pokemons you have ") 
    console.log(yourPokemons)
    console.log(`you have ${yourPokemons.length} Pokemons`)
    console.log(`you got defeated ${timesDefeated} times ${username}`)
