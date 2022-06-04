function playRound(userSelection, computerSelection) {

const userPlay = prompt("Rock, Paper, or Scissors?");
const computerPlay = Math.random();
    if (computerPlay < 0.34) {
        computerPlay = "Rock";
    } else if (computerPlay <= 0.67) {
        computerPlay = "Paper";
    } else {
        computerPlay = "Scissors";
    }

const compare = function(answer1, answer2) {
    if(answer1 === answer2) {
        return "Tie!";
    }
    if(answer1 === "Rock") {
        if(answer2 === "Scissors") {
        return "Rock Wins!";
    } else {
        return "Paper Wins!"
        }
    }
    if(answer1 === "Paper") {
        if (answer2 === "Rock") {
            return "Paper Wins!";
        } else {
            if(answer2 === "Scissors") {
                return "Scissors Wins!";
            }
        }
        if(answer1 === "Scissors") {
            if(answer2 === "Rock") {
                return "Rock Wins!";
            } else {
                if(answer2 === "Paper") {
                    return "Scissors Wins!";
                }
            }
        }
    };

console.log(playRound(userSelection, computerSelection));