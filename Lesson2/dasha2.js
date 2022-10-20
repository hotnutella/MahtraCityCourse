var prompt = require("prompt-sync")();

var name = prompt("What is your name?: ");
console.log("Your name is: " + name);

var age = prompt("How old are you?: ");
console.log("Your age: " + age);

var isOfAge = false;
isOfAge = age >=18;

if (isOfAge){
    console.log(name + " pizda ");
} else {
    console.log(name + " maljok ");
}