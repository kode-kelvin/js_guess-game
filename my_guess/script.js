'use strict';
document.querySelector('.between').textContent = 'Pick Between 1 and 20';

// the number generator

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

// create highScore
let highScore = 0;

// create number of trials
let numberTrial = 20;

// check the clicked button
document.querySelector('.check').addEventListener('click', function () {
  //to accept guesses
  const guessNumber = Number(document.querySelector('.guess').value);

  // to check if no guess entered
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⚠️ Not Valid Guess';

    //to test if the number is same as generated
  } else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent = '♨️ 💃 correct number'; //when guess is right

    document.querySelector('body').style.backgroundColor = 'green'; //change page color when guess is right

    //
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').style.height = '15rem';
    document.querySelector('.number').textContent = '🥳 Hurray';

    //to score high score with trials
    if (numberTrial > highScore) {
      highScore = numberTrial;
      document.querySelector('.highscore').textContent = numberTrial;
    }

    //check if it is high or low
  } else if (guessNumber !== randomNumber) {
    document.querySelector('.message').textContent =
      guessNumber > randomNumber ? '❌ Guess too high' : '❌ Guess too low';
    numberTrial--;
    document.querySelector('.score').textContent = numberTrial;

    if (numberTrial === 0) {
      document.querySelector('body').style.backgroundColor = '#c53333';
      document.querySelector('.number').textContent = '☠️ Game Over ☠️ ';
      document.querySelector('.number').style.width = '56rem';
      document.querySelector('.number').style.height = '20rem';
    }
  }
});

// working on the reset button
document.querySelector('.again').addEventListener('click', function () {
  numberTrial = 20;

  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = numberTrial;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '12rem';
  console.log(randomNumber);
});
