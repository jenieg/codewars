// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {

    const winningCombinations = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock",
    };

    if (p1 === p2) {
        return "Draw!";
    } else if (winningCombinations[p1] === p2) {
        return "Player 1 won!";
    } else if (winningCombinations[p2] === p1) {
        return "Player 2 won!";
    }
}
