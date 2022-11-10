var prompt = require('prompt-sync')();

var newClient = true;
var youngerThan13 = 0;
var olderThen12 = 0;

while (newClient) {
    var age = prompt('How old are you? ');

    if (age == 'stop') {
        newClient = false;
    }

    if (isNaN(age)) {
        continue;
    }

    age = Number(age);
    if (age > 12) {
        olderThen12++;
    } else {
        youngerThan13++;
    }
}

var priceUnder13 = 0;
var priceOver12 = 7;

var totalPrice = youngerThan13 * priceUnder13 + olderThen12 * priceOver12;

console.log('It will be ' + totalPrice + ', please!');

