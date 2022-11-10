/*
var i = 1;
i += 5          // => i = i + 2
i++;            // => +1

console.log(i);

while (i < 10) {
    i++;
    console.log(i);
}
*/

var prompt = require('prompt-sync')();

var sellElephant = true;
var userInput = '';
var magicAnswer = 'OK'; 
while (sellElephant) {
    userInput = prompt('Buy the elephant!: ');
    if (userInput == magicAnswer) {
        sellElephant = false;
    }
}

