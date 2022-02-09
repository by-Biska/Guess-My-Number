'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'PIsos sosi 🔞'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log( document.querySelector('.guess').value)

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// const random_num = function () {
//     Math.trunc(Math.random() * 20) + 1
// }

const check_number = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('😢 No number!');
  } else if (guess === secret_number && score !== 0) {
    displayMessage('🎉Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;

    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret_number ? '📈 Too hight!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

function guess_enter(e) {
  if (event.which == 13 || event.keyCode == 13) {
    check_number();
  }
}

document.querySelector('.check').addEventListener('click', function () {
  check_number();
});

document.querySelector('.guess').addEventListener('keydown', function () {
  guess_enter();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
