// Scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Buttons
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("ciseaux");
const rockBtn = document.getElementById("pierre");
const resetBtn = document.getElementById("reset");

// Display
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const drawScoreDisplay = document.getElementById("drawScore");

// Choices
const choices = ["Paper", "Scissors", "Rock"];

// Events
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
rockBtn.addEventListener("click", () => playGame("Rock"));

resetBtn.addEventListener("click", resetGame);

// Game Function
function playGame(playerSelection){

    // Computer random choice
    const random = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[random];

    // Display choices
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    // Game Logic
    if(playerSelection === computerSelection){
        result.textContent = "Draw!";
        drawScore++;
        result.style.color = "gray";
    }

    else if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ){
        result.textContent = "You Win!";
        playerScore++;
        result.style.color = "green";
    }

    else{
        result.textContent = "Computer Wins!";
        computerScore++;
        result.style.color = "red";
    }

    // Update Score
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    drawScoreDisplay.textContent = drawScore;
}


// Reset Function
function resetGame(){

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    drawScoreDisplay.textContent = 0;

    playerChoice.textContent = "-";
    computerChoice.textContent = "-";

    result.textContent = "Game Reset";
    result.style.color = "black";
}

