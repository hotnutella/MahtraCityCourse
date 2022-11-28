import calculator from './calculator.js';

var keepAsking = true;

while(keepAsking) {
  var userInput = calculator.askUserInput();
  if (calculator.isFirstNumber(userInput)) {
    continue;
  }
  calculator.saveLastOperation(userInput);
  calculator.makeCalculation(userInput);
  keepAsking = !calculator.shouldStopProgram(userInput);
}

var result = calculator.getResult();
calculator.addToFullAnswer(result);

var fullAnswer = calculator.getFullAnswer();
console.log(fullAnswer);