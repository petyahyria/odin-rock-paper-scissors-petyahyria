/* Computer Choice */

let getComputerChoice = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}