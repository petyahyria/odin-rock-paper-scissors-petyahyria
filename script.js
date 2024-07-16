/* Computer Choice */

let getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

/* Human choice */

let getHumanChoice = () => {
    let humanChoice = prompt("Type 'Rock', 'Paper' or 'Scissors' (without quotes)");
    //validation loop
    while(humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors"){
        humanChoice = prompt("Maybe you've made typo, try again \n Type 'Rock', 'Paper' or 'Scissors' (without quotes)");
    }
    return humanChoice; 
}

/* Score of players */

let humanScore = 0;
let computerScore = 0;