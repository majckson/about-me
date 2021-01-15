'use strict';

console.log('Hello World');

// linter test (need to get fixed)
var banana = 42;
// if(banana){
//   console.log(banana);
// }

// console.log(banana);

//get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');
alert('Hi ' + userName + ', nice to meet you!');
console.log(userName);

// 5 question. they MUSt accept yes or no OR y or n IN ANY CASE
// examples;  YES, yes, YEs, yeS, Y ,y....

var answerOne = prompt('Let\'s play a game to see if you can guess where I\'m from. Would you like to play?').toLocaleLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Perfect! Let\'s get started.');
  alert('Perfect! Let\'s get started.');
} else {
  alert('Sorry, you\'re stuck with me ;)');
}

var answerTwo = prompt('Do I strike you as a PNW original?').toLowerCase();
// or responseOne = responseOne.toLowerCase();
// or var normalizedQuestionOne = questionOne.toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('correct');
  alert('Nope, not quite!');
} else {
  alert('Correct! I am not from here originally.');
}

var answerThree = prompt('How about the North East? Do I give you those Cape Cod vibes?').toLocaleLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('Nope, not there either.');
} else {
  alert('You\'re right, I\'m not from there either.');
}

var answerFour = prompt('Maybe Texas... Do you think I\'m from Texas?').toLocaleLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  alert('Really, ' + userName + '? I am not from Texas.');
} else {
  alert('Not from Texas.');
}

var answerFive = prompt('How do you feel about the Midwest? Would you guess that I\'m from Chicago?').toLocaleLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  alert('Close ' + userName + '! But I\'m not from Chicago');
} else{
  alert('You\'re, ' + userName + '. Not Chicago.');
}

//first examples used;
// var responseTwo = prompt('Do you think that I\'m from Seattle?').toLowerCase();

// if(responseTwo === 'no' || responseTwo === 'no') {
//   //console.log('Definitely not from Seattle');
//   alert('Definitely not from Seattle');
// } else {
//   alert('Do I really come across as that anti-social?');
// }
