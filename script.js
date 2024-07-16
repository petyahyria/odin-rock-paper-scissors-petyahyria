/* Computer Choice */

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

/* Human choice */

let getHumanChoice = () => {
    let humanChoice = prompt("Type 'Rock', 'Paper' or 'Scissors' (without quotes, case-insensetive)").toLowerCase();
    //validation loop
    while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        humanChoice = prompt("Maybe you've made a typo\nType 'Rock', 'Paper' or 'Scissors' (without quotes, case-insensetive)");
    }
    return humanChoice; 
}

/* Score of players */

let humanScore = 0;
let computerScore = 0;

/* Play Round */

let playRound = (computerChoice, humanChoice) => {
    if(computerChoice === "rock"){
        switch (humanChoice) {
            case "rock":
                console.log("Both Rock!\nTie! Nobody gets a point")
                break;
            case "paper":
                console.log("Paper beats Rock!\nYou win this round! You get a point!")
                humanScore++;
                break;
            case "scissors":
                console.log("Rock beats Scissors!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else if(computerChoice === "paper"){
        switch (humanChoice) {
            case "paper":
                console.log("Both Paper!\n Tie! Nobody gets a point")
                break;
            case "scissors":
                console.log("Scissors cut a Paper!\nYou win this round! You get a point!")
                humanScore++;
                break;
            case "rock":
                console.log("Paper beats Rock!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }else {
        switch (humanChoice) {
            case "scissors":
                console.log("Both Scissors!\nTie! Nobody gets a point")
                break;
            case "rock":
                console.log("Rock beats Scissors!\nYou win this round! You get a point!")
                humanScore++;
                break;
            case "paper":
                console.log("Scissors cut a Paper!\nYou lose this round! Computer gets a point")
                computerScore++;
                break;
        }
    }
}

/* Play game */

let printResults = () => {
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if(computerScore > humanScore){
        console.log("You lose! You see computer dancing his winning dance");
        console.log("Maybe today is not your day");
    }else if(computerScore < humanScore){
        console.log("You win! You see computer going home with sad face");
        console.log("You celebrate your victory");
    }else{
        console.log("Tie! Maybe today planets get into particular place")
    }
}

let playGame = () =>{
    console.log(
        `
        Welcome to the rock paper scissors game!
        Rules:
        - Rock beats scissors
        - Paper beats rock
        - Scissors cut paper
        - 5 rounds
        - Who has higher score wins a game    
        `
    );
    
    let numberOfRounds = 5;
    for(let i = 1; i <= numberOfRounds; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }

    printResults();
}

playGame();