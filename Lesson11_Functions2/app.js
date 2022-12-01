import calculator from '../Lesson10_Encapsulation/Calculator/calculator.js';

var makes = ['Audi', 'Citroen', 'Volvo', 'Mini', 'BMW', 'Mercedes', 'Skoda'];

var makesObject = {
  0: 'Audi', 
  1: 'Citroen', 
  2: 'Volvo', 
  3: 'Mini', 
  4: 'BMW', 
  5: 'Mercedes', 
  6: 'Skoda'
};

var makesObjectByModel = {
  'A8': 'Audi',
  'C4': 'Citroen',
  'V70': 'Volvo', 
  'Countryman': 'Mini', 
  'Z4': 'BMW', 
  'E-class': 'Mercedes', 
  'Kamiq': 'Skoda'
}

// console.log(makes[2]);
// console.log(makesObject[2]);
// console.log(makesObjectByModel['C4']);
// console.log(makesObjectByModel.Countryman);

function getAnswer() {
  var result = '';
  //---
  result = 'Go home';
  //---
  return result;
}

var myAnswer = getAnswer();
console.log(myAnswer);


function getFreeTablesByTime(hours) { // hours -> parameter / argument
  var result = 0;
  if (hours === 20) {
    result = 3;
  } else if (hours === 21) {
    result = 5;
  } else if (hours < 20) {
    result = 1;
  }

  if (hours !== 21) {
    console.log('Not equal 21');
  }

  return result;
}

var freeTables = getFreeTablesByTime(22);
console.log('Free tables at 21: ' + freeTables);

var operationFunctions = calculator.getOperationFunctions();
console.log(operationFunctions);

var currentOperation = calculator.getCurrenteOperation('/');
var divisionRusult = currentOperation(6, 2);
console.log(divisionRusult);