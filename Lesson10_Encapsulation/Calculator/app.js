import PromptSync from 'prompt-sync';
import calculator from './calculator.js';

var prompt = PromptSync();
var fullAnswer = '';
var keepAsking = true;
var operations = ['+', '-', '*', '/'];
var currentOperation;
var lastOperation = '';
var result;

// TODO move as much as possible to the calculator module

while(keepAsking) {
  var userInput = prompt('Input: ');
  fullAnswer += userInput;

  if (!isNaN(userInput) && result === undefined) {
    result = Number(userInput);
    continue;
  }

  if (operations.includes(userInput)) {
    lastOperation = userInput;
  } else if (!isNaN(userInput) && operations.includes(lastOperation)) {
    currentOperation = calculator[lastOperation];
    result = currentOperation(result, Number(userInput));
  }

  if (userInput === '=') {
    keepAsking = false;
  }
}

fullAnswer += result;
console.log(fullAnswer);