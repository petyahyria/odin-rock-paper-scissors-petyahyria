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

/* Play Round */

let playRound = (computerChoice, humanChoice) => {
    if(computerChoice === "Rock"){
        switch (humanChoice) {
            case "Rock":
                console.log("Tie! Nobody gets a point")
                break;
            case "Paper":
                console.log("You win this round! You get a point!")
                humanScore++;
                break;
            case "Scissors":
                console.log("You lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else if(computerChoice === "Paper"){
        switch (humanChoice) {
            case "Paper":
                console.log("Tie! Nobody gets a point")
                break;
            case "Scissors":
                console.log("You win this round! You get a point!")
                humanScore++;
                break;
            case "Rock":
                console.log("You lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else {
        switch (humanChoice) {
            case "Scissors":
                console.log("Tie! Nobody gets a point")
                break;
            case "Rock":
                console.log("You win this round! You get a point!")
                humanScore++;
                break;
            case "Paper":
                console.log("You lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }
}