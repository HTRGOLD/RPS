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
const showWinner = document.getElementsByClassName('showResults')[0];

const showLoser = document.getElementsByClassName('showResults')[1];

if (score.you < 5 && score.computer < 5){

    const userChooseRock = rock.addEventListener("click", () => {
        let userChoice = "rock";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
    });

    const userChoosePaper = paper.addEventListener("click", () => {
        let userChoice = "paper";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
    });

    const userChooseScissors = scissors.addEventListener("click", () => {
        let userChoice = "scissors";
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        displayUpdate();
    });
    console.log(score)
}
else if (score.you === 5) {
    showWinner.classList.remove('hideResults');
    showWinner.classList.add('showResults');
}
else if (score.computer === 5) {
    showLoser.classList.remove('hideResults')
    showLoser.classList.add('showResults');
};
