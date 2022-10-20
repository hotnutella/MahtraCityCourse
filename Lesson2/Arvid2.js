var prompt = require("prompt-sync")();

var age = prompt("How old are you?: ");
var im9 = prompt("Name?: ");
console.log("Your age: " + age);
console.log("Your name " + im9);
var isofage = age >= 18;
if(isofage){
console.log(im9 + " Vzroslqi")
}else{
    console.log(im9  + " moloko ne obsohlo")

};