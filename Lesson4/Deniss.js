var prompt = require('prompt-sync')();

// camelCase
var newClient = true;
var youngerThan13 = 0;
var olderThan12 = 0;
while (newClient) {
  var age = prompt('How old are you?: ');
  
  if (age == 'stop') {
    newClient = false;
  }
  
  if (isNaN(age)) {
    continue; // Go to the next iteration
  }

  age = Number(age);
  if (age > 12) {
    olderThan12++;
  } else {
    youngerThan13++;
  }
}

var priceUnder13 = 0;
var priceOver12 = 7;

var totalPrice = youngerThan13 * priceUnder13 + olderThan12 * priceOver12;

console.log('It will be ' + totalPrice + ', please!');