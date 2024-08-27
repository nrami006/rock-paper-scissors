function getComputerChoice() {
    // Choose a number from 0-2 (0, 1, or 2). Note we dont need to break because each case returns.
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            // Should never happen.
            return "Something went wrong."
    }
}

console.log(getComputerChoice()); 