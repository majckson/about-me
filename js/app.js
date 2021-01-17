'use strict';

//get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');
//alert('Hi ' + userName + ', nice to meet you!');
alert(`Hi ${userName}, nice to meet you`);
//console.log(userName);

// 5 question. they MUSt accept yes or no OR y or n IN ANY CASE
// examples;  YES, yes, YEs, yeS, Y ,y....

var answerOne = prompt('Let\'s play a game to see if you can guess where I\'m from. Would you like to play?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Perfect! Let\'s get started.');
  alert('Perfect! Let\'s get started.');
} else {
  alert('Sorry, you\'re stuck with me');
}

var answerTwo = prompt('Do I strike you as a PNW original?').toLowerCase();
// or responseOne = responseOne.toLowerCase();
// or var normalizedQuestionOne = questionOne.toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('Nope, not quite!');
  alert('Nope, not quite!');
} else {
  alert('Correct! I am not from here originally.');
}

var answerThree = prompt('How about the North East? Do I give you those Cape Cod vibes?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('Nope, not there either.');
  alert('Nope, not there either.');
} else {
  alert('You\'re right, I\'m not from there either.');
}

var answerFour = prompt('Maybe Texas... Do you think I\'m from Texas?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Really, ' + userName + '? I am not from Texas.');
  //alert('Really, ' + userName + '? I am not from Texas.');
  alert(`Really ${userName}? I am not from Texas.`);
} else {
  alert('Not from Texas.');
}

var answerFive = prompt('How do you feel about the Midwest? Would you guess that I\'m from Chicago?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('Close ' + userName + '! But I\'m not from Chicago');
  alert('Close ' + userName + '! But I\'m not from Chicago');
} else {
  alert('You\'re, ' + userName + '. Not Chicago.');
}

//guessing game - 4 guesses
var numberOfGuesses = 4;
var correctNumber = 4;

for (var i = 0; i < numberOfGuesses; i++) {
  var usersGuess = parseInt(prompt('Can you guess how many states I\'ve lived in?'));
  console.log(usersGuess);
  if (usersGuess === correctNumber) {
    alert('You\re a genius!');
    break;
  }
  if (usersGuess < correctNumber && i !== 4) {
    alert('Too low, I\'ve lived some life.');
  }
  else if (usersGuess > correctNumber && i !== 4) {
    alert('No...I have not lived that much life')
  } else {
    alert(`Sorry, the correct answer ${correctNumber}`)
  }
  console.log(i);
}

//guessing game - 6 guesses, more than one answer to choose from
var 

// // var answerSix = prompt('Do you know how to log?').toLowerCase();

// // if (answerSix === 'yes' || answerSix === 'y') {
// //   console.log(answerSix);
// // } else {
// //   console.log('well that is a bummer');
// // }
