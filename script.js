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

function invalidInput(humanChoice) {
    if (humanChoice == null) {
        return true;
    } else {
        // anything entered into the prompt should be a string. lowercase it to check it regardless of capitalization.
        lowercaseInput = humanChoice.toLowerCase();
        if (lowercaseInput != "rock" && lowercaseInput != "paper" && lowercaseInput != "scissors") {
            // if it is none of the game options, input is invalid.
            return true;
        } else {
            // if it IS one of those options, input is NOT invalid so return false.
            return false
        }
    }
}
// Implemented using the conditional operator to practice with it.
// It looks horrible.
function playRound(humanChoice, computerChoice) {
    if (invalidInput(humanChoice)) {
        // If input is invalid, return false
        console.log(`Invalid choice. Try again!`);
        return false;
    }
    // lowercase humanChoice so that capitalization doesn't matter
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            // Checks if its a tie, or if human won.  Otherwise, human lost. In all cases, updates and shows the score.
            console.log(computerChoice === "rock" ? `It's a tie! You both chose ${humanChoice}.\nThe score is ${humanScore} to ${computerScore}` :
                computerChoice === "scissors" ? `You win! ${humanChoice} beats ${computerChoice}!\nThe score is ${++humanScore} to ${computerScore}` : `You lose... ${computerChoice} beats ${humanChoice}.\nThe score is ${humanScore} to ${++computerScore}`);
            return true;
        case "paper":
            console.log(computerChoice === "paper" ? `It's a tie! You both chose ${humanChoice}.\nThe score is ${humanScore} to ${computerScore}` :
                computerChoice === "rock" ? `You win! ${humanChoice} beats ${computerChoice}!\nThe score is ${++humanScore} to ${computerScore}` : `You lose... ${computerChoice} beats ${humanChoice}.\nThe score is ${humanScore} to ${++computerScore}`);
            return true;
        case "scissors":
            console.log(computerChoice === "scissors" ? `It's a tie! You both chose ${humanChoice}.\nThe score is ${humanScore} to ${computerScore}` :
                computerChoice === "paper" ? `You win! ${humanChoice} beats ${computerChoice}!\nThe score is ${++humanScore} to ${computerScore}` : `You lose... ${computerChoice} beats ${humanChoice}.\nThe score is ${humanScore} to ${++computerScore}`);
            return true;
        default:
            // humanChoice is something other than the 3 choices of the game
            console.log("That isn't a valid choice!")
    }
}

function playGame() {
    //selections are now variables since they need to change between rounds
    let humanSelection = null;
    let computerSelection = null;
    //Iterate 5 times, once per round
    for (i = 1; i <= 5; i++) {
        // Output to console the round it currently is.
        console.log(`Round ${i}!`);
        // This will get selections and play a round 
        // playRound returns true if round ended successfully and false if it failed (user invalid input)
        // if round failed, round will restart until it succeeds.
        // basically really terrible error checking ... but this way i can try a do while loop and some logic operators in helper functions.
        do {
            // Get selections for game
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            // Play a round of the game using the selections
        } while (!playRound(humanSelection, computerSelection))
    }
    //declare winner by comparing scores
    if (humanScore > computerScore) {
        console.log(`Game Over! You win! ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`Game Over! You lose... ${humanScore} to ${computerScore}.`);
    } else {
        //its a tie
        console.log(`Game Over! Its a tie. ${humanScore} to ${computerScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;
// playGame();