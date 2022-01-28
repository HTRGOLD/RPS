let score = { you : 0,  computer : 0 };
// const userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

let computerPlay = () => {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomValue = computerOptions[Math.floor(Math.random() * 3)];
    return randomValue;
}

function playRound(userChoice, compChoice) {
  if(userChoice == compChoice){
        return("It's a tie!")
    }
    else if(userChoice == 'rock' && compChoice == 'scissors' || userChoice == 'scissors' && compChoice == 'paper' || userChoice == 'paper' && compChoice == 'rock'){
      return(score.you += 1)
    } else {
      return (score.computer += 1)
    }
};

// Update the scoreboard
function displayUpdate() {
    return(
        document.querySelector()
    )
}
// Button Assignments
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const userChooseRock = rock.addEventListener("click", () => {
    let userChoice = "rock";
    let compChoice = computerPlay();
    playRound(userChoice, compChoice);
});

const userChoosePaper = paper.addEventListener("click", () => {
    let userChoice = "paper";
    let compChoice = computerPlay();
    playRound(userChoice, compChoice);
});

const userChooseScissors = scissors.addEventListener("click", () => {
    let userChoice = "scissors";
    let compChoice = computerPlay();
    playRound(userChoice, compChoice);
});
