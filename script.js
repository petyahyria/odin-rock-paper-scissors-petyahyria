const buttonsContainer = document.querySelector(".buttons");
const playerScoreParagraph = document.querySelector("#player-score")
const computerScoreParagraph = document.querySelector("#computer-score")


/* Computer Choice */

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

/* Score of players */

let playerScore = 0;
let computerScore = 0;
/* Put Down Results */
let resultsBox = document.createElement("div");
resultsBox.style.cssText =  `
                            background-color: #9893DA;
                            border: 2px solid #797A9E;
                            padding: 16px;
                            `
const resultsRoot = document.querySelector("#results-root");
resultsRoot.appendChild(resultsBox);
let showResults = (resultMessage, round) =>{
    resultsBox.innerHTML = `
                            <h2>Round ${round}<h2> 
                            <p>${resultMessage}</p>`;
    
}

/* Play Round */
let roundCounter = 1;
let playRound = (computerChoice, playerChoice) => {

    if(computerChoice === "rock"){
        switch (playerChoice) {
            case "rock":
                showResults("Both Rock!\nTie! Nobody gets a point", roundCounter)
                break;
            case "paper":
                showResults("Paper beats Rock!\nYou win this round! You get a point!", roundCounter)
                playerScore++;
                playerScoreParagraph.textContent = `Score: ${playerScore}` 
                break;
            case "scissors":
                showResults("Rock beats Scissors!\nYou lose this round! Computer gets a point", roundCounter)
                computerScore++;
                computerScoreParagraph.textContent = `Score: ${computerScore}` 
                break;
        }
    }else if(computerChoice === "paper"){
        switch (playerChoice) {
            case "paper":
                showResults("Both Paper!\n Tie! Nobody gets a point", roundCounter)
                break;
            case "scissors":
                showResults("Scissors cut a Paper!\nYou win this round! You get a point!", roundCounter)
                playerScore++;
                playerScoreParagraph.textContent = `Score: ${playerScore}` 
                break;
            case "rock":
                showResults("Paper beats Rock!\nYou lose this round! Computer gets a point", roundCounter)
                computerScore++;
                computerScoreParagraph.textContent = `Score: ${computerScore}` 
                break;
        }
    }else {
        switch (playerChoice) {
            case "scissors":
                showResults("Both Scissors!\nTie! Nobody gets a point", roundCounter)
                break;
            case "rock":
                showResults("Rock beats Scissors!\nYou win this round! You get a point!", roundCounter)
                playerScore++;
                playerScoreParagraph.textContent = `Score: ${playerScore}` 
                break;
            case "paper":
                showResults("Scissors cut a Paper!\nYou lose this round! Computer gets a point", roundCounter)
                computerScore++;
                computerScoreParagraph.textContent = `Score: ${computerScore}` 
                break;
        }
    }
    roundCounter++;
}

buttonsContainer.addEventListener("click", (e)=>{
    let target = e.target;
    let playerChoice;
    switch (target.id) {
        case "rock-btn":
            playerChoice="rock"
            playRound(getComputerChoice(), playerChoice)
            break;
        case "paper-btn":
            playerChoice="paper"
            playRound(getComputerChoice(), playerChoice)
            break;
        case "scissors-btn":
            playerChoice="scissors"
            playRound(getComputerChoice(), playerChoice)
            break;
    }
})