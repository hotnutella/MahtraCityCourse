var prompt = require("prompt-sync")();

/*var name = prompt("What is your name?: ");
var age = prompt("How old are you?: ");

var isOfAge = false;
isOfAge = age >=18;

var answer = "";

if (isOfAge){
    answer = "Welcome!";
} else {
    answer = "Go back home! You are too young!";
}
console.log("Hi " + name + "! " + answer);*/



/*var name = prompt("What is your name?: ");
console.log("Your name is: " + name);

var age = prompt("How old are you?: ");
console.log("Your age: " + age);

var isOfAge = false;
isOfAge = age >=18;

if (isOfAge){
    console.log(name + " pizda ");
} else {
    console.log(name + " maljok ");
}*/

//Circle K
var coffeePrice = 3.2;
var cigarettesPrice = 4.5;

var coffeeQuantity = prompt("How many cups of coffee?: ");
var cigarettesQuantity = prompt("How many packs of cigarettes?: ");

var answer = "";
var answerGreeting = "";
var answerCoffee = "";
var answerCigarettes = "";
var pluralSuffix = "s";
var packPlural = "pack";
var cupPlural = "cup";
var toBePlural = "is";
var andWord = "";
var underageWarning = " We don't sell cigarettes to kids!";
var isOfAge = false;

if (coffeeQuantity + cigarettesQuantity != 1) {
    toBePlural = "are";
}
if (cigarettesQuantity != 1) {
    packPlural += pluralSuffix;
} 
if (coffeeQuantity != 1) {
    cupPlural += pluralSuffix;
}

if (cigarettesQuantity + coffeeQuantity > 0) {
    answerGreeting += "Welcome! Here " + toBePlural + " your ";
}
if (cigarettesQuantity > 0 && coffeeQuantity > 0) {
    andWord = " and ";
}

if (cigarettesQuantity > 0) {
    var age = prompt("How old are you?: ");
    isOfAge = age >= 18;
    answerCigarettes += cigarettesQuantity + " " + packPlural + " of cigarettes";
}
if (coffeeQuantity > 0) {
    answerCoffee += coffeeQuantity + " " + cupPlural + " of coffee";
}

answer += answerGreeting + answerCoffee + andWord;

var cost = coffeePrice * coffeeQuantity;

if (cigarettesQuantity > 0) {
    if (isOfAge) {
        answer += answerCigarettes;
        cost += cigarettesPrice * cigarettesQuantity;
    } else {
        answer += underageWarning;
    }
}

cost = cost.toFixed(2);

console.log(answer);
console.log("It will be " + cost + " eur")
