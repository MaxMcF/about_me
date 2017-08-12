// 'use strict';
// function score(){
//   alert('ITS TIME TO PLAY..... THREE TRUTHS AND TWO LIES! (yes or no answers only) For the first five questions, there are only two wrong answers, so guess wisely!');
//   var q1 = 'First what is your name?';
//   var name = prompt(q1);
//   var correctAns = 0;
//
//   function global(){
//
//     alert('Time to play! Yes or No only!');
//     var questionsArray = ['Truth/Lie #1: My great-grandfather was one of the attorneys that put Al Capone in jail.','Truth/Lie #2: I\'m the biggest Jimi Hendrix fan you\'ll ever meet.', 'Truth/Lie #3: I didn\'t know how to spell my middle name for the first 16 years of my life.', 'Truth/Lie #4: I once sat next to Martin Sheen on a plane and threw up on him after having one too many drinks...', 'Truth/Lie #5: I have a birthmark on my back that\'s shaped like an elephant.', 'Pick a number between 1 and 100', 'Can you guess which foriegn countries have I visited??? (I\'ve only visited five)'];
//     var alertLog = ['YOU ARE CORRECT!!! Congratulations! Give yourself a nice long pat on the back', ['INCORRECT!! You only got ', ' out of the first 5 questions correct. Moving on...'], ['You\'re too low! You only have ', ' guess(es) left!'], ['You\'re too high! You only have ', ' guess(es) left!'], 'You did it!', ['You need to type a number! You only have ', ' guess(es) left!'], 'Congratulations! You guessed correctly! The correct answers were ', ['CANADA', 'MEXICO', 'SPAIN', 'FRANCE', 'PERU'], ['Try again! You only have ', ' more tries!'], 'Too bad! The correct answers were ', [['Congratulations, ', '!'], [' You\'ve made it to the end. You got ', ' out of 7 of the questions correct!']]];
//
//     var answer = prompt(questionsArray[0]);
//     var res = answer.toUpperCase();
//     var answerlog = [];
//     var qlog = [];
//     if (res === 'Y' || res === 'YES'){
//       correctAns++;
//     }
//     console.log(correctAns);
//     qlog.push(questionsArray[0]);
//     console.log(res);
//     answerlog.push(res);
//     qlog.push(questionsArray[1]);
//
//     answer = prompt(questionsArray[1]);
//     res = answer.toUpperCase();
//     console.log(res);
//     answerlog.push(res);
//     if (res === 'Y' || res === 'YES'){
//       correctAns++;
//     }
//     console.log(correctAns);
//     qlog.push(questionsArray[2]);
//
//     answer = prompt(questionsArray[2]);
//     res = answer.toUpperCase();
//     console.log(res);
//     answerlog.push(res);
//     if (res === 'Y' || res === 'YES'){
//       correctAns++;
//     }
//     console.log(correctAns);
//     qlog.push(questionsArray[3]);
//
//     answer = prompt(questionsArray[3]);
//     res = answer.toUpperCase();
//     console.log(res);
//     answerlog.push(res);
//     if (res === 'N' || res === 'NO'){
//       correctAns++;
//     }
//     console.log(correctAns);
//     qlog.push(questionsArray[4]);
//
//     answer = prompt(questionsArray[4]);
//     res = answer.toUpperCase();
//     console.log(res);
//     answerlog.push(res);
//     if (res === 'N' || res === 'NO'){
//       correctAns++;
//     }
//     console.log(correctAns);
//     if((answerlog[0] === 'YES' || answerlog[0] === 'Y' ) && (answerlog[1] === 'YES' || answerlog[1] === 'Y' ) && ( answerlog[2] === 'YES' || answerlog[2] === 'Y') && (answerlog[3] === 'NO' || answerlog[3] === 'N' ) && (answerlog[4] === 'NO' || answerlog[4] === 'N')){
//       alert(alertLog[0]);
//     } else {
//       alert(alertLog[1].join(correctAns));
//     }
//     console.log(answerlog);
//     qlog.push(questionsArray[5]);
//     var numberAnswer = Math.floor(Math.random() * 100);
//     console.log(numberAnswer);
//     var i = 0;
//     for (i = 0; i < 4; i++){
//       answer = prompt(questionsArray[5]);
//       console.log(answer);
//       answerlog.push(answer);
//       if (numberAnswer > answer){
//         alert(alertLog[2].join((3 - i)));
//       }
//       else if (numberAnswer < answer){
//         alert(alertLog[3].join((3 - i)));
//       }
//       else if (answer == numberAnswer){
//         correctAns++;
//         console.log(correctAns);
//         alert(alertLog[4]);
//         break;}
//       else {
//         alert(alertLog[5].join((3 - i)));
//       }
//     }
//     qlog.push(questionsArray[6]);
//     var numTries = 7;
//     for (i = 0; i < numTries; i++){
//       answer = prompt(questionsArray[6]).toUpperCase();
//       console.log(answer);
//       answerlog.push(answer);
//       if(alertLog[7].includes(answer)){
//         correctAns++;
//         console.log(correctAns);
//         alert(alertLog[6] + alertLog[7].join(', '));
//         break;
//       }
//       else if (i < (numTries - 1)){
//         alert(alertLog[8].join(((numTries - 1) - i)));
//       }
//       else {
//         alert(alertLog[9] + alertLog[7].join(', '));
//       }
//     }
//
//     console.log(answerlog);
//     console.log(alertLog[7]);
//     console.log(qlog);
//     // var Congratulations = alertLog[10].join(name);
//     alert(alertLog[10][0].join(name) + alertLog[10][1].join(correctAns));
//   }
//   global();
// }
// score();
