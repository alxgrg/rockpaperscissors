function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  const moveIndex = Math.floor(Math.random() * 3);
  const move = moves[moveIndex];
  return move;
}

function playRound(playerSelection, computerSelection) {
  const playerMove = playerSelection.toLowerCase();
  const computerMove = computerSelection.toLowerCase();

  if (
    playerMove !== 'rock' &&
    playerMove !== 'paper' &&
    playerMove !== 'scissors'
  ) {
    return "Invalid move. Try again with 'Rock', 'Paper' or 'Scissors'.";
  }

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      return 'Draw!';
    }
    if (computerMove === 'paper') {
      return 'You Lose! Paper beats Rock';
    }
    return 'You Win! Rock beats Scissors';
  }

  if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      return 'Draw!';
    }
    if (computerMove === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    }
    return 'You Win! Paper beats Rock';
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      return 'Draw!';
    }
    if (computerMove === 'rock') {
      return 'You Lose! Rock beats Scissors';
    }
    return 'You Win! Scissors beats Paper';
  }
}

const playerSelection = 'Scissors';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
