import PromptSync from 'prompt-sync';
var prompt = PromptSync();

var fullAnswer = '';
var lastOperation = '';
var result;

function plus (a, b) {
  return a + b;
}

function minus (a, b) {
  return a - b;
}

function mul (a, b) {
  return a * b;
}

function div (a, b) {
  return a / b;
}

function isFirstNumber(userInput) {
  return !isNaN(userInput) && result === undefined;
}

function addToFullAnswer (userInput) {
  fullAnswer += userInput;
}

function askUserInput () {
  var userInput = prompt('Input: ');
  addToFullAnswer(userInput);

  if (isFirstNumber(userInput)) {
    result = Number(userInput);
  }

  return userInput;
}

function getLegalOperations() {
  var operations = getOperationFunctions();
  return Object.keys(operations);
}

function saveLastOperation(userInput) {
  var operations = getLegalOperations();
  if (operations.includes(userInput)) {
    lastOperation = userInput;
  } 
}

function getOperationFunctions() {
  var operations = {
    '+': plus, 
    '-': minus, 
    '*': mul, 
    '/': div,
  }

  return operations;
}

function getCurrenteOperation(sign) {
  var operations = getOperationFunctions();
  return operations[sign];
}

function getResult() {
  return result;
}

function getFullAnswer() {
  return fullAnswer;
}

function makeCalculation(userInput) {
  var operations = getLegalOperations();
  if (!operations.includes(userInput) 
  && !isNaN(userInput) 
  && operations.includes(lastOperation)) {
    var currentOperation = getCurrenteOperation(lastOperation);
    result = currentOperation(result, Number(userInput));
  }
}

function shouldStopProgram(userInput) {
  return userInput === '=';
}

export default {
  askUserInput, isFirstNumber, saveLastOperation, 
  makeCalculation, shouldStopProgram, addToFullAnswer, 
  getResult, getFullAnswer,
  getOperationFunctions,
  getCurrenteOperation
}