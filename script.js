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
/* Make image of choice active */

let makeImageActive = (choice, computerOrPlayer) =>{
    
    const rockPlayer = document.querySelector("#player-rock");
    const paperPlayer = document.querySelector("#player-paper");
    const scissorsPlayer = document.querySelector("#player-scissors");
    const rockComputer = document.querySelector("#computer-rock");
    const paperComputer = document.querySelector("#computer-paper");
    const scissorsComputer = document.querySelector("#computer-scissors");
    const playerImages = [rockPlayer, paperPlayer, scissorsPlayer];
    const computerImages = [rockComputer, paperComputer, scissorsComputer];
    let removeClassActivePlayerImages = () => playerImages.forEach( el => el.classList.remove("active"));
    let removeClassActiveComputerImages = () => computerImages.forEach( el => el.classList.remove("active"));
    switch (choice) {
        case "rock":
            if(computerOrPlayer === "computer"){
                removeClassActiveComputerImages();
                rockComputer.classList.add("active");
            }else if(computerOrPlayer === "player"){
                removeClassActivePlayerImages();
                rockPlayer.classList.add("active");
            }
            break;
        case "paper":
            if(computerOrPlayer === "computer"){
                removeClassActiveComputerImages();
                paperComputer.classList.add("active");
            }else if(computerOrPlayer === "player"){
                removeClassActivePlayerImages();
                paperPlayer.classList.add("active");
            }
            break;
        case "scissors":
            if(computerOrPlayer === "computer"){
                removeClassActiveComputerImages();
                scissorsComputer.classList.add("active");
            }else if(computerOrPlayer === "player"){
                removeClassActivePlayerImages();
                scissorsPlayer.classList.add("active");
            }
            break;
    }
}

makeImageActive();

/* Finish a game */

let finishGame = () =>{
    let finishGameWindow = document.createElement("h2");
    finishGameWindow.style.cssText = `
                                        display: flex;
                                        position:absolute;
                                        with: 60vw;
                                        height: 40vh;
                                        left: 20vw;
                                        background-color: #9893DA;
                                        border: 2px solid #797A9E;
                                        padding: 16px;
                                        border-radius: 25px; 
                                        bottom: 30vh;
                                        align-items: center;        
                                     `

    
    const playerPart = document.querySelector("#player-part");
    let indentor = document.createElement("div");
    indentor.classList.add("indentor");
    if( playerScore === 5 ){
        finishGameWindow.innerHTML = `
                                            Player: ${playerScore} <br>
                                            Computer: ${computerScore} <br>
                                            You Win! You see computer going home and cry. <br>
                                            Press 'Ctrl + R' or 'cmd + R' to replay
                                        `
        resultsRoot.appendChild(finishGameWindow);
        buttonsContainer.style.display = "none";
        playerPart.insertBefore(indentor, playerScoreParagraph);
    }else if(computerScore === 5){
        finishGameWindow.innerHTML = `
                                            Player: ${playerScore} <br>
                                            Computer: ${computerScore} <br>
                                            You Lose! You see computer celebrating his victory. <br>
                                            Press 'Ctrl + R' or 'cmd + R' to replay
                                        `
        resultsRoot.appendChild(finishGameWindow);
        buttonsContainer.style.display = "none";
        playerPart.insertBefore(indentor, playerScoreParagraph);
    }
}


/* Play Round */
let roundCounter = 1;
let playRound = (computerChoice, playerChoice) => {

    makeImageActive(computerChoice, "computer");
    makeImageActive(playerChoice, "player");
    if(computerChoice === "rock"){
        switch (playerChoice) {
            case "rock":
                showResults("Both Rock!\nTie! Nobody gets a point", roundCounter)
                makeImageActive()
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
    finishGame();
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