'use strict';

// document.querySelector('.message').textContent = 'I am set from JavaScript';
// document.querySelector('.number').textContent = true;
// document.querySelector('.score').textContent = 37;

// let secretNumber = Math.trunc(Math.random) () * 20 + 1;
let secretNumber = 10;
let score = 20;
let highScore = 0;

const displayMessage = (text, className = '.message') =>
  (document.querySelector(className).textContent = text);

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('No number!');
  } else if (secretNumber === guess) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too hight' : 'To low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.guess').value = '';
});

// ! 1.06.54
