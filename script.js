function getComputerChoice() {
    // Choose a number from 0-2 (0, 1, or 2). Note we dont need to break because each case returns.
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            // Should never happen.
            return "Something went wrong."
    }
}

function getHumanChoice() {
    // Ask user for input with default value of rock.
    let input = prompt("Rock, Paper, or Scissors?");
    return input;
}

function playRound(humanChoice, computerChoice) {
    // lowercase humanChoice so that capitalization doesn't matter
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            // Checks if its a tie, or if human won.  Otherwise, human lost.
            console.log(computerChoice === "rock" ? "It's a tie!" :
                computerChoice === "scissors" ? "You win!" : "You lose...");
            return;
        case "paper":
            console.log(computerChoice === "paper" ? "It's a tie!" :
                computerChoice === "rock" ? "You win!" : "You lose...");
            return;
        case "scissors":
            console.log(computerChoice === "scissors" ? "It's a tie!" :
                computerChoice === "paper" ? "You win!" : "You lose...");
            return;
        default:
            // humanChoice is something other than the 3 choices of the game
            console.log("That isn't a valid choice!")
    }
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);