let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    const humanWin = Math.abs(targetNum - humanGuess);
    const computerWin = Math.abs(targetNum - computerGuess);
    return humanWin <= computerWin;
};

const updateScore = winner => {
    if(winner === 'human') {
        humanScore += 1;
    } else {computerScore += 1};
};

const advanceRound = () => currentRoundNumber ++;