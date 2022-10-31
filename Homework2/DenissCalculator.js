var prompt = require('prompt-sync')();

var result = 0;
var fullAnswer = '';
var askForInput = true;
var hasEnteredNumber = false;
var lastOperation = '';
var operations = ['+', '-', '*', '/'];

while (askForInput) {
  var userInput = prompt('Enter your input: ');
  fullAnswer += userInput;

  // !hasEnteredNumber
  // hasEnteredNumber !== true
  // hasEnteredNumber === false
  if (!hasEnteredNumber) {
    result = Number(userInput);
    hasEnteredNumber = true;
    continue;
  }
  if (operations.includes(userInput)) {
    lastOperation = userInput;
  }

  if (!isNaN(userInput)) {
    userInput = Number(userInput);
    if (lastOperation === '+') {
      result += userInput;
    } else if (lastOperation === '-') {
      result -= userInput;
    } else if (lastOperation === '*') {
      result *= userInput;
    } else if (lastOperation === '/') {
      result /= userInput;
    }
  }

  if (userInput === '=') {
    askForInput = false;
  }
}

console.log(fullAnswer + result);