const icons = {
  rock: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-stone-geography-icongeek26-flat-icongeek26.png',
  paper: 'https://img.icons8.com/fluency/48/000000/paper-waste.png',
  scissors:
    'https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-scissors-stationery-tulpahn-flat-tulpahn.png',
};

// Generate random player move
function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  const moveIndex = Math.floor(Math.random() * 3);
  const move = moves[moveIndex];
  return move;
}

// Play round
function playRound(playerSelection, computerSelection = computerPlay()) {
  console.log(playerSelection);
  if (playerSelection === null) {
    return {
      status: 'stop',
      message: 'Game over.',
    };
  }

  const state = {
    playerMove: playerSelection.toLowerCase(),
    computerMove: computerSelection.toLowerCase(),
  };

  if (
    state.playerMove !== 'rock' &&
    state.playerMove !== 'paper' &&
    state.playerMove !== 'scissors'
  ) {
    return {
      status: 'error',
      message: "Invalid move. Try again with 'Rock', 'Paper' or 'Scissors'.",
    };
  }

  if (state.playerMove === 'rock') {
    if (state.computerMove === 'rock') {
      return { ...state, status: 'draw', message: 'Draw!' };
    }
    if (state.computerMove === 'paper') {
      return {
        ...state,
        status: 'lose',
        message: 'You Lose! Paper beats Rock',
      };
    }
    return { ...state, status: 'win', message: 'You Win! Rock beats Scissors' };
  }

  if (state.playerMove === 'paper') {
    if (state.computerMove === 'paper') {
      return { ...state, status: 'draw', message: 'Draw!' };
    }
    if (state.computerMove === 'scissors') {
      return {
        ...state,
        status: 'lose',
        message: 'You Lose! Scissors beats Paper',
      };
    }
    return { ...state, status: 'win', message: 'You Win! Paper beats Rock' };
  }

  if (state.playerMove === 'scissors') {
    if (state.computerMove === 'scissors') {
      return { ...state, status: 'draw', message: 'Draw!' };
    }
    if (state.computerMove === 'rock') {
      return {
        ...state,
        status: 'lose',
        message: 'You Lose! Rock beats Scissors',
      };
    }
    return {
      ...state,
      status: 'win',
      message: 'You Win! Scissors beats Paper',
    };
  }
}

// Game loop
function game() {
  let playerScore = 0;
  let computerScore = 0;

  const container = document.querySelector('.game-container');
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');

  const playerMoveEl = document.getElementById('player-move');
  const playerScoreEl = document.getElementById('player-score');
  const playerMoveIcon = document.getElementById('pl-move-icon');
  const computerMoveEl = document.getElementById('computer-move');
  const computerScoreEl = document.getElementById('computer-score');
  const computerMoveIcon = document.getElementById('comp-move-icon');

  rock.addEventListener('click', () => {
    const result = playRound(rock.value, computerPlay());
    playerMoveIcon.src = icons['rock'];
    computerMoveIcon.src = icons[result.computerMove];
    if (result.status === 'win') {
      playerScore++;
      playerScoreEl.innerText = playerScore;
    }
    if (result.status === 'lose') {
      computerScore++;
      computerScoreEl.innerText = computerScore;
    }
    console.log(result.message);
  });

  paper.addEventListener('click', () => {
    const result = playRound(paper.value);
    playerMoveIcon.src = icons['paper'];
    computerMoveIcon.src = icons[result.computerMove];
    if (result.status === 'win') {
      playerScore++;
      playerScoreEl.innerText = playerScore;
    }
    if (result.status === 'lose') {
      computerScore++;
      computerScoreEl.innerText = computerScore;
    }
    console.log(result.message);
  });

  scissors.addEventListener('click', () => {
    const result = playRound(scissors.value);
    playerMoveIcon.src = icons['scissors'];
    computerMoveIcon.src = icons[result.computerMove];

    if (result.status === 'win') {
      playerScore++;
      playerScoreEl.innerText = playerScore;
    }
    if (result.status === 'lose') {
      computerScore++;
      computerScoreEl.innerText = computerScore;
    }
    console.log(result.message);
  });

  // const finalScore = `Final score was: You ${playerScore}, Computer ${computerScore}.`;

  // if (playerScore === computerScore) {
  //   console.log('It was a draw... ' + finalScore);
  // } else if (playerScore > computerScore) {
  //   console.log('You win! ' + finalScore);
  // } else {
  //   console.log('You lose! ' + finalScore);
  // }
}

game();
