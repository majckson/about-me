'use strict';

//get user name and offer greeting
let userName = prompt('Hello, what\'s your name?');
//alert('Hi ' + userName + ', nice to meet you!');
alert(`Hi ${userName}, nice to meet you`);
//console.log(userName);

// 5 question. they MUSt accept yes or no OR y or n IN ANY CASE
// examples;  YES, yes, YEs, yeS, Y ,y....

let correctAnswersTotal = 0;
function answerOne() {
  let answerOne = prompt('Let\'s play a yes or no game to see if you can guess where I\'m from. Would you like to play?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    //console.log('Perfect! Let\'s get started.');
    correctAnswersTotal++;
    alert('Perfect! Let\'s get started.');
  } else {
    alert('Sorry, you\'re stuck with me');
  }
}
answerOne();

function answerTwo() {
  let answerTwo = prompt('Do I strike you as a PNW original?').toLowerCase();
  // or responseOne = responseOne.toLowerCase();
  // or let normalizedQuestionOne = questionOne.toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    //console.log('Nope, not quite!');
    correctAnswersTotal++;
    alert('Nope, not quite!');
  } else {
    alert('Correct! I am not from here originally.');
  }
}
answerTwo();

function answerThree() {
  let answerThree = prompt('How about the North East? Do I give you those Cape Cod vibes?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    //console.log('Nope, not there either.');
    correctAnswersTotal++;
    alert('Nope, not there either.');
  } else {
    alert('You\'re right, I\'m not from there either.');
  }
}
answerThree();

function answerFour() {
  let answerFour = prompt('Maybe Texas... Do you think I\'m from Texas?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    //console.log('Really, ' + userName + '? I am not from Texas.');
    //alert('Really, ' + userName + '? I am not from Texas.');
    correctAnswersTotal++;
    alert(`Really ${userName}? I am not from Texas.`);
  } else {
    alert('Not from Texas.');
  }
}
answerFour();

function answerFive() {
  let answerFive = prompt('How do you feel about the Midwest? Would you guess that I\'m from Chicago?').toLowerCase();

<<<<<<< HEAD
for (var i = 0; i < numberOfGuesses; i++) {
  var usersGuess = +prompt('Can you guess how many states I\'ve lived in?');
  console.log(usersGuess);
  if (usersGuess === correctNumber) {
=======
  if (answerFive === 'yes' || answerFive === 'y') {
    //console.log('Close ' + userName + '! But I\'m not from Chicago');
>>>>>>> 4b58b9b4ac72019aa343c3652ee5fb2a62e76c48
    correctAnswersTotal++;
    alert('Close ' + userName + '! But I\'m not from Chicago');
  } else {
    alert('You\'re right, ' + userName + '. Not Chicago.');
  }
}
answerFive();
// let usersGuess = +()
function correctNumber() {
  //guessing game - 4 guesses
  let numberOfGuesses = 4;
  let correctNumber = 4;

  for (let i = 0; i < numberOfGuesses; i++) {
    let usersGuess = parseInt(prompt('Can you guess how many states I\'ve lived in?'));
    console.log(usersGuess);
    if (usersGuess === correctNumber) {
      correctAnswersTotal++;
      alert('You\'re a genius!');
      break;
    }
    if (usersGuess < correctNumber && i !== 4) {
      alert('Too low, I\'ve lived some life.');
    }
    else if (usersGuess > correctNumber && i !== 4) {
      alert('No...I have not lived that much life');
    } else {
      alert(`Sorry, the correct answer ${correctNumber}`);
    }
    console.log(i);
  }
}
correctNumber();

//guessing game - 6 guesses, more than one answer to choose from;
function pupNames() {
  let pupNames = ['Hazel', 'Izy', 'Gus', 'Goose'];
  let guessCount = 0;
  let guessMax = 6;
  let guessCorrect = false;
  while (!guessCorrect && guessCount < guessMax) {
    guessCount++;
    let question = prompt('If you were to guess the names of some of my favorite pups, what do you think just one of their names would be?');
    for (let j = 0; j < pupNames.length; j++) {
      if (question === pupNames[j]) {
        correctAnswersTotal++;
        guessCorrect = true; {
          alert('Yep!');
        }
        break;
      }
    }
    if (!guessCorrect) {
      alert('Nope, not that.');
    }
  }

  if (!guessCorrect) {
    alert(`Some of my favorite pups are named ${pupNames}`);
  }
}
pupNames();

alert(`Thanks ${usersGuess}, for coming by! You got ${correctAnswersTotal} answers correct!`);
usersGuess();
