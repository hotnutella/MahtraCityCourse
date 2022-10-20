var prompt = require('prompt-sync')();

var name = prompt('What is your name?: ');
var age = prompt('How old are you?: ');

var greeting = 'Hi ' + name + '!';

var answer = '';
if (age >= 18) {
  answer = ' You are too old!';
} else {
  answer = ' Go back to school!';
}

console.log(greeting + answer);