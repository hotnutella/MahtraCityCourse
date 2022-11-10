var prompt = require('prompt-sync')();

var A = prompt('First number: ');
A = Number (A);
var B = prompt('Second number: ');
B = Number(B);
var znak = prompt('Znak: ');

var answer = '';

/*
if (znak == '-') {
    answer = A - B;
} else if (znak == '+') {
    answer = A + B;
} else if (znak == '*') {
    answer = A * B;
} else if (znak == '/') {
    answer = A / B;
} else {
    answer = 'Znak not found';
}
*/
 

switch (znak) {
    case '+':
        answer = A + B;
        break;
    case '-':
        answer = A - B;
        break;
    case '*':
        answer = A * B;
        break;
    case '/':
        answer = A / B;
        break;
    default:
        answer = 'Znak not found, sorry:( ';
}

console.log('Answer: ' + answer);