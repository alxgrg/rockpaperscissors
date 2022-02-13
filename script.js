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

  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');

  const playerScoreEl = document.getElementById('player-score');
  const playerMoveIcon = document.getElementById('pl-move-icon');
  const playerCard = document.getElementById('player-card');
  const computerScoreEl = document.getElementById('computer-score');
  const computerMoveIcon = document.getElementById('comp-move-icon');
  const computerCard = document.getElementById('computer-card');

  const finalResults = document.querySelector('.results');

  function eventListenerHelper(move) {
    finalResults.innerText = '';
    playerCard.className = 'card';
    computerCard.className = 'card';
    const result = playRound(move, computerPlay());
    playerMoveIcon.src = icons[move];
    computerMoveIcon.src = icons[result.computerMove];

    if (result.status === 'win') {
      playerScore++;
      playerScoreEl.innerText = playerScore;
      finalResults.innerText = 'YOU WIN!';
      playerCard.classList.add('win');
      playerCard.classList.add('win-animation');
      setTimeout(() => {
        playerCard.classList.remove('win-animation');
      }, 500);
    }
    if (result.status === 'lose') {
      computerScore++;
      finalResults.innerText = 'YOU LOSE!';
      computerScoreEl.innerText = computerScore;
      playerCard.classList.add('lose');
      playerCard.classList.add('lose-animation');
      setTimeout(() => {
        playerCard.classList.remove('lose-animation');
      }, 500);
    }
    if (result.status === 'draw') {
      finalResults.innerText = 'DRAW!';
      playerCard.classList.add('draw');
      computerCard.classList.add('draw');
      playerCard.classList.add('draw-animation');
      computerCard.classList.add('draw-animation');
      setTimeout(() => {
        playerCard.classList.remove('draw-animation');
        computerCard.classList.remove('draw-animation');
      }, 500);
    }
    console.log(result.message);
  }

  rock.addEventListener('click', () => {
    eventListenerHelper('rock');
  });

  paper.addEventListener('click', () => {
    eventListenerHelper('paper');
  });

  scissors.addEventListener('click', () => {
    eventListenerHelper('scissors');
  });
}

game();
