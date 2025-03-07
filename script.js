let humanScore = 0;
let computerScore = 0;
let draw = 0;
const humanScoreScreen = document.querySelector("#player");
const computerScoreScreen = document.querySelector("#computer");
const drawScreen = document.querySelector("#draw");
const content = document.createElement("p");
content.classList.add("content");


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

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        draw++;
       drawScreen.textContent = draw;
       content.textContent = `It's a tie! You both chose ${humanChoice}!`;
       content.setAttribute("style", "color: #97a102ea; ");
       document.body.appendChild(content);
    }
    else if (humanChoice === "rock") {  
        if (computerChoice === "scissors") {
            content.setAttribute("style", "color: #01ac18ea ; ");
            content.textContent = "You win! Rock beats Scissors!";
            document.body.appendChild(content);
            humanScore++;
        } else {
            content.setAttribute("style", "color:rgba(190, 25, 3, 0.92); ");
            content.textContent = "You lose! Paper beats Rock!";
            document.body.appendChild(content);
            computerScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            content.setAttribute("style", "color: #01ac18ea ; ");
            content.textContent = "You win! Paper beats rock!";
            document.body.appendChild(content);
            humanScore++;
        } else {
            content.setAttribute("style", "color:rgba(190, 25, 3, 0.92); ");
            content.textContent = "You lose! Scissors beats Paper!";
            document.body.appendChild(content);
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            content.setAttribute("style", "color: #01ac18ea ; ");
            content.textContent = "You Win! Scissors beats Paper!";
            document.body.appendChild(content);
            humanScore++;
        } else {
            content.setAttribute("style", "color:rgba(190, 25, 3, 0.92); ");
            content.textContent = "You Lose! Rock beats Scissors!";
            document.body.appendChild(content);
            computerScore++;
        }
    }
    else {
        content.textContent = "Invalid input. Please try again.";
        document.body.appendChild(content);        
    }
}
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    humanScoreScreen.textContent = humanScore;
    computerScoreScreen.textContent = computerScore;
    checkWin();
});
const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    humanScoreScreen.textContent = humanScore;
    computerScoreScreen.textContent = computerScore;
    checkWin();
});
const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    humanScoreScreen.textContent = humanScore;
    computerScoreScreen.textContent = computerScore;
    checkWin();
});

function checkWin() {

    if(humanScore >= 5 || computerScore >= 5) {

        if (humanScore > computerScore) {
            content.setAttribute("style","color: #01ac18ea; font-size: 2.5em;")
            content.textContent = "You win the game!";
            document.body.appendChild(content);
        }
        else {
            content.setAttribute("style","color: rgba(190, 25, 3, 0.92);; font-size: 2.5em;")
            content.textContent = "You lose the game!";
            document.body.appendChild(content);
        }
        humanScore = 0;
        computerScore = 0;
        draw = 0;
        humanScoreScreen.textContent = humanScore;
        computerScoreScreen.textContent = computerScore;
        drawScreen.textContent = draw
    }
}