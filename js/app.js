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
alert('Hello ' + userName + ', nice to meet you');
console.log(userName)

// 5 question. they MUSt accept yes or no OR y or n IN ANY CASE
// examples;  YES, yes, YEs, yeS, Y ,y....

var responseOne = prompt('Do you think that I live in Seattle?').toLowerCase();
// or responseOne = responseOne.toLowerCase();
// or var normalizedQuestionOne = questionOne.toLowerCase();

if(responseOne === 'yes' || responseOne === 'y' ) {
  //console.log('correct');
  alert('Correct');
} else {
  alert('wrong-o');
// eslint-disable-next-line no-extra-semi
}

var responseTwo = prompt('Do you think that I\'m from Seattle?').toLowerCase();

if(responseTwo === 'no' || responseTwo === 'no') {
  //console.log('Definitely not from Seattle');
  alert('Definitely not from Seattle');
} else {
  alert('Do I really come across as that anti-social?');
}
