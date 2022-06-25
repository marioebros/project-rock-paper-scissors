// ------ Complete logic of game inside this function ------ //
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // ------ let newElement = document.createElement('div')
  // ------ newElement.addEventListenser('click', () => console.log('clicked'))
  // ------ Function to Start Playing Game ------ //
  playerOptions.forEach((option) => {
    option.addEventListener("click", () => console.log("clicked"));
    const movesLeft = document.querySelector(".movesleft");
    moves++;
    movesLeft.innerText = `Moves Left: ${10 - moves}`;
  
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[choiceNumber];

  // ------ Function to ------ //
  function playRound(playerSelection, computerSelection) {
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    document.getElementByClass(".rock").onclick = function changeContent() {
      document.getElementByClass(".rock").textContent = "Rock";
      document.getElementByClass(".rock").style = "color: gray";
    };
    document.getElementByClass(".paper").onclick = function changeContent() {
      document.getElementByClass(".paper").textContent = "Paper";
      document.getElementByClass(".paper").style = "color: white";
    };
    document.getElementByClass(".scissors").onclick = function changeContent() {
      document.getElementByClass(".scissors").textContent = "Scissors";
      document.getElementByClass(".scissors").style = "color: black";
    };
  }

  // ------ Function to Check Who Wins ------ //
      winner(this.innerText, computerChoice);

  // ------ Calling gameOver Function After 10 Moves ------ //
      if (moves == 10) {
        gameOver(playerOptions, movesLeft);
      }
    };
  });
};

// ------ Function to Decide Winner ------ //
const winner = (player, computer) => {
  const result = document.querySelector(".result");
  const playerScoreBoard = document.querySelector(".p-count");
  const computerScoreBoard = document.querySelector(".c-count");
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    result.textContent = "Tie";
  } else if (player == "rock") {
    if (computer == "paper") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
};

// ------ Function to Run When Game is Over ------ //
const gameOver = (playerOptions, movesLeft) => {
  const chooseMove = document.querySelector(".move");
  const result = document.querySelector(".result");
  const reloadBtn = document.querySelector(".reload");

  playerOptions.forEach((option) => {
    option.style.display = "none";
  });

  chooseMove.innerText = "Game Over!!";
  movesLeft.style.display = "none";

  if (playerScore > computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Won The Game";
    result.style.color = "#1F1A38";
  } else if (playerScore < computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Lost The Game";
    result.style.color = "#1F1A38";
  } else {
    result.style.fontSize = "2rem";
    result.innerText = "Tie";
    result.style.color = "#1F1A38";
  }
  reloadBtn.innerText = "Restart";
  reloadBtn.style.display = "flex";
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

// ------ Calling playGame Function Inside Game ------ //

function playRound(playerSelection, computerSelection) {
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    document.getElementByClass(".rock").onclick = function changeContent() {
      document.getElementByClass(".rock").textContent = "Rock";
      document.getElementByClass(".rock").style = "color: gray";
    };
    document.getElementByClass(".paper").onclick = function changeContent() {
      document.getElementByClass(".paper").textContent = "Paper";
      document.getElementByClass(".paper").style = "color: white";
    };
    document.getElementByClass(".scissors").onclick = function changeContent() {
      document.getElementByClass(".scissors").textContent = "Scissors";
      document.getElementByClass(".scissors").style = "color: black";
    };
}

// playGame();

// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// ------ Calling the Game Function ------ //
game();

// const playerSelection = prompt(
// "Start the game by picking 'Rock, Paper, Scissors'"
// ).toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// ------ #startButton.click(function () {
// ------ .start();
// ------ });

// function computerPlay(rock, paper, scissors) {
// var options = ["rock", "paper", "scissors"],
// optionsToUse = options[Math.floor(Math.random() * values.length)];
// do something with the selected value
// alert(What did ya pick?);
// }

// function playRound(playerSelection, computerSelection) {
// if (playerSelection === computerSelection) {
// return "Tie! Y'all both picked ${playerSelection}";
// } else if (playerSelection === "rock" && computerSelection === "scissors") {
// return "Rock on, Dude! Rock beats Scissors";
// } else if (playerSelection === "paper" && computerSelection === "rock") {
// return "That's a Wrap! Paper beats Rock";
// } else if (playerSelection === "scissors" && computerSelection === "paper") {
// return "Gnarly! Scissors beats Paper";
// } else {
// return `You lose! ${computerSelection} beats ${playerSelection} everytime`;
// }
// }

// const playerSelection = prompt(
//  "Start the game by picking 'Rock, Paper, or Scissors'"
// ).toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection)); 