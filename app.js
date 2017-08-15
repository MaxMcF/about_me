'use strict';
alert('ITS TIME TO PLAY..... THREE TRUTHS AND TWO LIES! (yes or no answers only) For the first five questions, there are only two wrong answers, so guess wisely!');
var q1 = 'First what is your name?';
var name = prompt(q1);
var correctAns = 0;

alert('Time to play! Yes or No only!');
var questionsArray = ['Truth/Lie #1: My great-grandfather was one of the attorneys that put Al Capone in jail.','Truth/Lie #2: I\'m the biggest Jimi Hendrix fan you\'ll ever meet.', 'Truth/Lie #3: I didn\'t know how to spell my middle name for the first 16 years of my life.', 'Truth/Lie #4: I once sat next to Martin Sheen on a plane and threw up on him after having one too many drinks...', 'Truth/Lie #5: I have a birthmark on my back that\'s shaped like an elephant.', 'Pick a number between 1 and 100', 'Can you guess which foriegn countries have I visited??? (I\'ve only visited five)'];
var alertLog = ['YOU ARE CORRECT!!! Congratulations! Give yourself a nice long pat on the back', ['INCORRECT!! You only got ', ' out of the first 5 questions correct. Moving on...'], ['You\'re too low! You only have ', ' guess(es) left!'], ['You\'re too high! You only have ', ' guess(es) left!'], 'You did it!', ['You need to type a number! You only have ', ' guess(es) left!'], 'Congratulations! You guessed correctly! The correct answers were ', ['CANADA', 'MEXICO', 'SPAIN', 'FRANCE', 'PERU'], ['Try again! You only have ', ' more tries!'], 'Too bad! The correct answers were ', [['Congratulations, ', '!'], [' You\'ve made it to the end. You got ', ' out of 7 of the questions correct!']]];
var answerlog = [];
var qlog = [];
function questionOne () {
  var answer = prompt(questionsArray[0]);
  var res = answer.toUpperCase();
  if (res === 'Y' || res === 'YES'){
    correctAns++;
  }
  console.log(correctAns);
  qlog.push(questionsArray[0]);
  console.log(res);
  answerlog.push(res);
  questionTwo();
}
questionOne();
function questionTwo(){
  qlog.push(questionsArray[1]);
  var answer = prompt(questionsArray[1]);
  var res = answer.toUpperCase();
  console.log(res);
  answerlog.push(res);
  if (res === 'Y' || res === 'YES'){
    correctAns++;
  }
  console.log(correctAns);
  questionThree();
}
function questionThree(){
  qlog.push(questionsArray[2]);
  var answer = prompt(questionsArray[2]);
  var res = answer.toUpperCase();
  console.log(res);
  answerlog.push(res);
  if (res === 'Y' || res === 'YES'){
    correctAns++;
  }
  console.log(correctAns);
  questionFour();
}
function questionFour(){
  qlog.push(questionsArray[3]);
  var answer = prompt(questionsArray[3]);
  var res = answer.toUpperCase();
  console.log(res);
  answerlog.push(res);
  if (res === 'N' || res === 'NO'){
    correctAns++;
  }
  console.log(correctAns);
  questionFive();
}
function questionFive(){
  qlog.push(questionsArray[4]);
  var answer = prompt(questionsArray[4]);
  var res = answer.toUpperCase();
  console.log(res);
  answerlog.push(res);
  if (res === 'N' || res === 'NO'){
    correctAns++;
  }
  console.log(correctAns);
  firstFive();
}
function firstFive(){
  if((answerlog[0] === 'YES' || answerlog[0] === 'Y' ) && (answerlog[1] === 'YES' || answerlog[1] === 'Y' ) && ( answerlog[2] === 'YES' || answerlog[2] === 'Y') && (answerlog[3] === 'NO' || answerlog[3] === 'N' ) && (answerlog[4] === 'NO' || answerlog[4] === 'N')){
    alert(alertLog[0]);
  } else {
    alert(alertLog[1].join(correctAns));
  }
  console.log(answerlog);
  questionSix();
}
function questionSix(){
  qlog.push(questionsArray[5]);
  var numberAnswer = Math.floor(Math.random() * 100);
  for (var i = 0; i < 4; i++){
    var answer = prompt(questionsArray[5]);
    console.log(answer);
    answerlog.push(answer);
    if (numberAnswer > answer){
      alert(alertLog[2].join((3 - i)));
    }
    else if (numberAnswer < answer){
      alert(alertLog[3].join((3 - i)));
    }
    else if (answer == numberAnswer){
      correctAns++;
      console.log(correctAns);
      alert(alertLog[4]);
      questionSeven();
      break;}
    else {
      alert(alertLog[5].join((3 - i)));
    }
  }
  questionSeven();
}
function questionSeven(){
  qlog.push(questionsArray[6]);
  var numTries = 7;
  for (var i = 0; i < numTries; i++){
    var answer = prompt(questionsArray[6]).toUpperCase();
    console.log(answer);
    answerlog.push(answer);
    if(alertLog[7].includes(answer)){
      correctAns++;
      console.log(correctAns);
      alert(alertLog[6] + alertLog[7].join(', '));
      finalMessage();
      break;
    }
    else if (i < (numTries - 1)){
      alert(alertLog[8].join(((numTries - 1) - i)));
    }
    else {
      alert(alertLog[9] + alertLog[7].join(', '));
    }
  }
  finalMessage();
}
console.log(answerlog);
console.log(alertLog[7]);
console.log(qlog);
// var Congratulations = alertLog[10].join(name);
function finalMessage(){
  alert(alertLog[10][0].join(name) + alertLog[10][1].join(correctAns));
}
