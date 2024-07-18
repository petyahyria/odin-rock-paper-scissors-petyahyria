const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerScorePara = document.querySelector("#player-score")
const computerScorePara = document.querySelector("#computer-score")

/* Computer Choice */

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

/* Score of players */

let playerScore = 0;
let computerScore = 0;

/* Play Round */

let playRound = (computerChoice, playerChoice) => {
    if(computerChoice === "rock"){
        switch (playerChoice) {
            case "rock":
                console.log("Both Rock!\nTie! Nobody gets a point")
                break;
            case "paper":
                console.log("Paper beats Rock!\nYou win this round! You get a point!")
                playerScore++;
                break;
            case "scissors":
                console.log("Rock beats Scissors!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else if(computerChoice === "paper"){
        switch (playerChoice) {
            case "paper":
                console.log("Both Paper!\n Tie! Nobody gets a point")
                break;
            case "scissors":
                console.log("Scissors cut a Paper!\nYou win this round! You get a point!")
                playerScore++;
                break;
            case "rock":
                console.log("Paper beats Rock!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else {
        switch (playerChoice) {
            case "scissors":
                console.log("Both Scissors!\nTie! Nobody gets a point")
                break;
            case "rock":
                console.log("Rock beats Scissors!\nYou win this round! You get a point!")
                playerScore++;
                break;
            case "paper":
                console.log("Scissors cut a Paper!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }
}