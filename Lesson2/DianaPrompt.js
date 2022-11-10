var prompt = require("prompt-sync")();

var name = prompt("What is youre name?: ");
var age = prompt("How old age you?: ");
//console.log(name + ": " + age);


if (age >= 18){
    console.log(name + 'WELCOME!');
  } else {
    console.log(name + 'YOU SUCK ');
  }

  