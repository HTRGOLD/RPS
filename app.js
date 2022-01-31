let score = { you : 0,  computer : 0 };

let computerPlay = () => {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomValue = computerOptions[Math.floor(Math.random() * 3)];
    return randomValue;
}

function playRound(userChoice, compChoice) {
  if(userChoice == compChoice){
        return (
            gameMessage.innerHTML = "It's a tie >:( You both chose " + userChoice
        )
    }
    else if(userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'scissors' && compChoice === 'paper' || userChoice === 'paper' && compChoice === 'rock'){
      return (
        score.you += 1,
        gameMessage.innerHTML = 'You win this round :D ' + userChoice + ' beats out ' + compChoice)
    } else {
      return (
        score.computer += 1,
        gameMessage.innerHTML = 'You lose this round :( ' + compChoice + ' beats out ' + userChoice)
    }
};

// Update game message
const gameMessage = document.getElementById('whatHappened');

// Update the scoreboard
const scoreYou = document.querySelector('.score1');
const scoreComp = document.querySelector('.score2');

function displayUpdate() {
    return (
        scoreYou.innerHTML = score.you,
        scoreComp.innerHTML = score.computer
    )
}

// Button RPS Assignments

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// winner results variable
const showWinner = document.getElementById('winner');

const showLoser = document.getElementById('loser');

    const userChooseRock = rock.addEventListener("click", () => {
        let userChoice = "rock";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
        checkWinner();
    });

    const userChoosePaper = paper.addEventListener("click", () => {
        let userChoice = "paper";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
        checkWinner();
    });

    const userChooseScissors = scissors.addEventListener("click", () => {
        let userChoice = "scissors";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
        checkWinner();

    });

// Reset game
const resetButton = document.createElement('button');
const showResults = document.getElementById('showResults');

resetButton.textContent = "Reset hoes";

const reset = resetButton.addEventListener("click", () => {
    showWinner.classList.add('hideResults');
    showLoser.classList.add('hideResults');
    score.you = 0;
    score.computer = 0;
    displayUpdate();
    gameMessage.textContent = "Click your choice, player 8)";
    showResults.removeChild(resetButton);
})

// Check the winner of the game
function checkWinner() {
    if (score.you == 5) {
        showWinner.classList.remove('hideResults');
        showResults.appendChild(resetButton);
    }
    else if (score.computer == 5) {
        showLoser.classList.remove('hideResults');
        showResults.appendChild(resetButton);
    }
}
