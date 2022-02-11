// Generate random player move
function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  const moveIndex = Math.floor(Math.random() * 3);
  const move = moves[moveIndex];
  return move;
}

// Play round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === null) {
    return {
      status: 'stop',
      message: 'Game over.',
    };
  }
  const playerMove = playerSelection.toLowerCase();
  const computerMove = computerSelection.toLowerCase();

  if (
    playerMove !== 'rock' &&
    playerMove !== 'paper' &&
    playerMove !== 'scissors'
  ) {
    return {
      status: 'error',
      message: "Invalid move. Try again with 'Rock', 'Paper' or 'Scissors'.",
    };
  }

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      return { status: 'draw', message: 'Draw!' };
    }
    if (computerMove === 'paper') {
      return { status: 'lose', message: 'You Lose! Paper beats Rock' };
    }
    return { status: 'win', message: 'You Win! Rock beats Scissors' };
  }

  if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      return { status: 'draw', message: 'Draw!' };
    }
    if (computerMove === 'scissors') {
      return { status: 'lose', message: 'You Lose! Scissors beats Paper' };
    }
    return { status: 'win', message: 'You Win! Paper beats Rock' };
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      return { status: 'draw', message: 'Draw!' };
    }
    if (computerMove === 'rock') {
      return { status: 'lose', message: 'You Lose! Rock beats Scissors' };
    }
    return { status: 'win', message: 'You Win! Scissors beats Paper' };
  }
}

// Game loop
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let j = 0;

  for (let i = 0; i < 5; i++) {
    i = j;
    const playerSelection = window.prompt(
      'Enter your move, Rock, Paper or Scissors?:'
    );
    const computerSelection = computerPlay();
    const curGame = playRound(playerSelection, computerSelection);
    if (curGame.status === 'win') {
      playerScore++;
    }
    if (curGame.status === 'lose') {
      computerScore++;
    }
    if (curGame.status !== 'error') {
      j++;
    }
    if (curGame.status === 'stop') {
      console.log('Game ended');
      return;
    }
    console.log(curGame.message);
  }

  const finalScore = `Final score was: You ${playerScore}, Computer ${computerScore}.`;

  if (playerScore === computerScore) {
    console.log('It was a draw... ' + finalScore);
  } else if (playerScore > computerScore) {
    console.log('You win! ' + finalScore);
  } else {
    console.log('You lose! ' + finalScore);
  }
}

game();
