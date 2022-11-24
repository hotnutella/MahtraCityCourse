var prompt = require('prompt-sync')();

var input = prompt('Input something: ');
input = input.split('');

var reverseString = '';
for (var i = input.length - 1; i >= 0; i--) {
    reverseString += input[i];    
}

console.log(reverseString);