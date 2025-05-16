function  getComputerChoice() {
    let choice = Math.random();
    console.log("Choice: " + choice);

    if (choice >= 0.00 && choice < 0.33) {
        console.log("paper");
    } else if (choice >= 0.33 && choice < 0.66){
        console.log("scissors");
    }else{
        console.log("rock");
    }
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let answer = prompt("Escreva uma destas opções: rock, paper ou scissors: ");
    return answer;    
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();
computerChoice = computerChoice.toLowerCase();

if (humanChoice == computerChoice) {
    console.log("This match is a tie");

} else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You WIN! Rock beats Scissors");
    humanScore++;

} else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You WIN! Paper beats Rock");
    humanScore++;

} else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You WIN! Scissors beats Paper");
    humanScore++;

} else {
    console.log("YOU LOSE, Better luck next time!");
    computerScore++;
} 

  console.log("Score: Human " + humanScore + " - Computer " + computerScore);
}

