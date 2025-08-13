const ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
  for (let i = 0; i < ROUNDS; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  
  console.log("Game over");

  if (humanScore > computerScore) {
    console.log("Human won!");
  } else if (humanScore < computerScore) {
    console.log("Computer won!");
  } else {
    console.log("Draw!")
  }
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  switch (humanChoice) {
    case computerChoice:
      console.log("Draw!");
      break;
    case "rock":
      if (computerChoice === "paper") {
        computerScore++;
        console.log("You lose!");
      } else if (computerChoice === "scissors") {
        humanScore++;
        console.log("You win!");
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        computerScore++;
        console.log("You lose!");
      } else if (computerChoice === "rock") {
        humanScore++;
        console.log("You win!");
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        computerScore++;
        console.log("You lose!");
      } else if (computerChoice === "paper") {
        humanScore++;
        console.log("You win!");
      }
      break;
    default:
      console.log("Draw!");
  }
}
