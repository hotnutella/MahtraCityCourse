var prompt = require('prompt-sync')();

var sellElephant = true;
var userInput = '';
var magicAnswer = 'elephant';
while (sellElephant) {
  userInput = prompt('Buy the elephant!: ');
  if (userInput == magicAnswer) {
    sellElephant = false;
  }
}

console.log('Congratulations! You now have an elephant! Good luck!');

/*
var i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

var hp = 50;
while (hp > 0) {
  hp--;
  console.log(hp);
}
*/