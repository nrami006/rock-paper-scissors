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
    const gameResults = document.querySelector(".game-results");
    const playerScoreElement = document.querySelector("#player-score");
    const computerScoreElement = document.querySelector("#computer-score");
    const computerChoiceElement = document.querySelector(".computer-choice");
    switch (computerChoice) {
        case "rock":
            computerChoiceElement.textContent = "✊";
            break;
        case "paper":
            computerChoiceElement.textContent = "✋";
            break;
        case "scissors":
            computerChoiceElement.textContent = "✌️";
            break;
    }
    switch (humanChoice) {
        case "rock":
            // Checks if its a tie, or if human won.  Otherwise, human lost. In all cases, updates and shows the score.
            switch (computerChoice) {
                case "rock":
                    // Tie
                    gameResults.textContent = `It's a tie! You both chose ${humanChoice}.`
                    break;
                case "paper":
                    // Player loses
                    gameResults.textContent = `You lose... ${computerChoice} beats ${humanChoice}.`
                    computerScore += 1;
                    break;
                case "scissors":
                    // Player wins
                    gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
                    humanScore += 1;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    // Player wins
                    gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
                    humanScore += 1;
                    break;
                case "paper":
                    // Tie
                    gameResults.textContent = `It's a tie! You both chose ${humanChoice}.`
                    break;
                case "scissors":
                    // Player loses
                    gameResults.textContent = `You lose... ${computerChoice} beats ${humanChoice}.`
                    computerScore += 1;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    // Player loses
                    gameResults.textContent = `You lose... ${computerChoice} beats ${humanChoice}.`
                    computerScore += 1;
                    break;
                case "paper":
                    // Player wins
                    gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
                    humanScore += 1;
                    break;
                case "scissors":
                    // Tie
                    gameResults.textContent = `It's a tie! You both chose ${humanChoice}.`
                    break;
            }
            break;
        default:
            // humanChoice is something other than the 3 choices of the game
            gameResults.textContent = `Something went wrong...`
    }
    computerChoiceElement.style.opacity = "1";
    gameResults.style.opacity = "1";
    playerScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
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

// Add Event listener to each player button using a query selector all and their id to make the player's choice
const playerButtons = document.querySelectorAll(".player-button");
for (const button of playerButtons) {
    button.addEventListener("click", (e) => {
        const playerButtons = document.querySelectorAll(".player-button");
        for (const btn of playerButtons) {
            if (btn != e.target) {
                btn.style.backgroundColor = "black";
            }
        }
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        e.currentTarget.style.backgroundColor = "#dab3ff";
        playRound(humanSelection, computerSelection);
    });
}
