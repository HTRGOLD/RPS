let score = { you : 0,  computer : 0 };

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
}

function game(x) {
    for (let i = 1; i <= x; i++){
        const userChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
        let compChoice = computerPlay();
        playRound(userChoice, compChoice);
        console.log(userChoice, compChoice)
    }

    if (score.you > score.computer){
        return("You win :D The score was " + score.you + ":" + score.computer)
    } else if (score.you == score.computer){
        return("It's a tie! :3 The score was " + score.you + ":" + score.computer)
    } else {
        return("You lose :( The score was " + score.you + ":" + score.computer)
    }

}
