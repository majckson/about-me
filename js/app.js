'use strict';


let userName = prompt('Hello, what\'s your name?');
alert(`Hi ${userName}, nice to meet you`);
//console.log(userName);


let correctAnswersTotal = 0;
function answerOne() {
  let answerOne = prompt('Let\'s play a yes or no game to see if you can guess where I\'m from. Would you like to play?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    //console.log('Perfect! Let\'s get started.');
    alert('Perfect! Let\'s get started.');
    correctAnswersTotal++;
  } else {
    alert('Sorry, you\'re stuck with me');
  }
}

function answerTwo() {
  let answerTwo = prompt('Do I strike you as a PNW original?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    //console.log('Nope, not quite!');
    alert('Nope, not quite!');
  } else {
    alert('Correct! I am not from here originally.');
    correctAnswersTotal++;
  }
}

function answerThree() {
  let answerThree = prompt('How about the North East? Do I give you those Cape Cod vibes?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    //console.log('Nope, not there either.');
    alert('Nope, not there either.');
  } else {
    alert('You\'re right, I\'m not from there either.');
    correctAnswersTotal++;
  }
}

function answerFour() {
  let answerFour = prompt('Maybe Texas... Do you think I\'m from Texas?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    //console.log('Really, ' + userName + '? I am not from Texas.');
    alert(`Really ${userName}? I am not from Texas.`);
  } else {
    alert('Not from Texas.');
    correctAnswersTotal++;
  }
}

function answerFive() {
  let answerFive = prompt('How do you feel about the Midwest? Would you guess that I\'m from Chicago?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    //console.log('Close ' + userName + '! But I\'m not from Chicago');
    alert('Close ' + userName + '! But I\'m not from Chicago');
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('You\'re right, ' + userName + '. Not Chicago.');
    correctAnswersTotal++;
  } else {
    alert('Still wrong');
  }
}

let numberOfGuesses = 4;

function answerSix() {
  let correctAnswer = 4;
  for (let i = 0; i < numberOfGuesses; i++) {
    let usersGuess = +prompt('Can you guess how many states I\'ve lived in?');
    // console.log(usersGuess);
    if (usersGuess === correctAnswer) {
      alert('You\'re a genius!');
      correctAnswersTotal++;
      break;
    }
    if (usersGuess < correctAnswer && i !== 4) {
      alert('Too low, I\'ve lived some life.');
    }
    else if (usersGuess > correctAnswer && i !== 4) {
      alert('No...I have not lived that much life');
    } else {
      alert(`Sorry, the correct answer is ${correctAnswer}`);
    }
    // console.log(i);
  }
}

function answerSeven() {
  let pupNames = ['Hazel', 'Izy', 'Gus', 'Goose'];
  let guessCount = 0;
  let guessMax = 6;
  let guessCorrect = false;
  while (!guessCorrect && guessCount < guessMax) {
    guessCount++;
    let question = prompt('If you were to guess the names of some of my favorite pups, what do you think just one of their names would be?');
    for (let j = 0; j < pupNames.length; j++) {
      if (question === pupNames[j]) {
        guessCorrect = true; {
          alert('Yep!');
          correctAnswersTotal++;
          break;
        }
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



answerOne();
answerTwo();
answerThree();
answerFour();
answerFive();
answerSix();
answerSeven();


alert(`Thanks ${userName}, for coming by! You got ${correctAnswersTotal} answers correct!`);
