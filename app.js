'use strict';

var name = prompt('ITS TIME TO PLAY..... THREE TRUTHS AND TWO LIES! (yes or no answers only) There are only two wrong answers, so guess wisely! BUT FIRST: What is your name?').toUpperCase();

var q2 = 'My great-grandfather was one of the attorneys that put Al Capone in jail.';
console.log(q2);
var answer = prompt(q2);
console.log(answer);
var res = answer.toUpperCase();
if (res === 'YES' || res === 'Y') {
  alert('You got that one correct! Nice!');
}else if (res === 'NO' || res === 'N'){
  alert('INCORRECT');
}else{
  alert('Yes or No answers only!');
}
var answerlog = [];
answerlog.push(res);
var q2 = 'I\'ve eaten a snake and a guinea pig before.';
console.log(q2);
answer = prompt(q2);
console.log(answer);
res = answer.toUpperCase();
if (res === 'YES' || res === 'Y') {
  alert('You got that one correct! Nice!');
}else if (res === 'NO' || res === 'N'){
  alert('INCORRECT');
}else{
  alert('Yes or No answers only!');
}
answerlog.push(res);
var q2 = 'I was once nearly the victim of a major american terrorist attack.';
console.log(q2);
answer = prompt(q2);
console.log(answer);
res = answer.toUpperCase();
if (res === 'YES' || res === 'Y') {
  alert('You got that one correct! Nice!');
}else if (res === 'NO' || res === 'N'){
  alert('INCORRECT');
}else{
  alert('Yes or No answers only!');
}
answerlog.push(res);
var q2 = 'I once sat next to Martin Sheen on a plane and threw up on him after having one too many drinks...';
console.log(q2);
answer = prompt(q2);
console.log(answer);
res = answer.toUpperCase();
if (res === 'NO' || res === 'N') {
  alert('You got that one correct! Nice!');
}else if (res === 'YES' || res === 'Y'){
  alert('INCORRECT');
}else{
  alert('Yes or No answers only!');
}
answerlog.push(res);
var q2 = 'I play lead gutiar in a Jimi Hendrix cover band.';
console.log(q2);
answer = prompt(q2);
console.log(answer);
res = answer.toUpperCase();
if (res === 'NO' || res === 'N') {
  alert('You got that one correct! Nice!');
}else if (res === 'YES' || res === 'Y'){
  alert('INCORRECT');
}else{
  alert('Yes or No answers only!');
}
answerlog.push(res);
if((answerlog[0] === 'YES' || answerlog[0] === 'Y' ) && (answerlog[1] === 'YES' || answerlog[1] === 'Y' ) && ( answerlog[2] === 'YES' || answerlog[2] === 'Y') && (answerlog[3] === 'NO' || answerlog[3] === 'N' ) && (answerlog[4] === 'NO' || answerlog[4] === 'N')){
  alert('YOU GOT ALL OF THE ANSWERS CORRECT ' + name + '!!! Congratulations! Give yourself a nice long pat on the back');
}else{
  alert('FAILURE!!!!! YOU DIDN\'T GET THEM ALL CORRECT ' + name + '!... Better luck next time');
}
console.log(answerlog);
