let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice1 = "rock";
    const choice2 = "paper";
    const choice3 = "scissors";
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return choice1;
    } else if (randomNumber === 1) {
        return choice2;
    } else {
        return choice3;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    }
    else if (humanChoice === "rock") {  
        if (computerChoice === "scissors") {
            alert("You win! Rock beats Scissors");
            humanScore++;
        } else {
            alert("You lose! Paper beats Rock");
            computerScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You win! Paper beats Rock");
            humanScore++;
        } else {
            alert("You lose! Scissors beats Paper");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("You win! Scissors beats Paper");
            humanScore++;
        } else {
            alert("You lose! Rock beats Scissors");
            computerScore++;
        }
    }
    else {
        alert("Invalid choice. Please try again.");
        
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("You win!" + " Human Score: " + humanScore+ " Computer Score: " + computerScore);
    }
    else {
        alert("You lose!"  + " Human Score: " + humanScore+ " Computer Score: " + computerScore);
    }
}
playGame();