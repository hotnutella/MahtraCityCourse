var prompt = require('prompt-sync')();

var znak = prompt('What is your operation?: ');
var A = prompt('First number: ');
var B = prompt('Second number: ');

var answer = ''; 

if (znak === '+') {
  answer = Number(A) + Number(B);
} else if (znak === '-') {
  answer = Number(A) - Number(B);
} else if (znak === '*') {
  answer = Number(A) * Number(B);
} else if (znak === '/') {
  answer = Number(A) / Number(B);
} else {
  answer = 'Not cool, man!';
}

//console.log(answer);

switch (znak) {
  case '+':
    answer = Number(A) + Number(B);
    break;
  case '-':
    answer = Number(A) - Number(B);
    break;
  case '*':
    answer = Number(A) * Number(B);
    break;
  case '/':
    answer = Number(A) / Number(B);
    break;
  default:
    answer = 'Not cool, man!';
}

console.log(answer);