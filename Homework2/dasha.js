var prompt = require("prompt-sync")();

var calculator = true;
var theFirstNumber = false;
var answer = 0;
var answertext = "";
var lastSign = "";

while (calculator) {
    var nurmberOrSign = prompt("Your number or sign: ");
    if (!isNaN(nurmberOrSign)) {
        nurmberOrSign = Number(nurmberOrSign);
    }
    answertext += nurmberOrSign;

    if (theFirstNumber == false) {
        answer = nurmberOrSign;
        theFirstNumber = true;
        continue;
    }
    if (nurmberOrSign === "stop") {
        calculator = false;
        continue;
    }

    if (nurmberOrSign === "+" || nurmberOrSign === "-" || nurmberOrSign === "*" || nurmberOrSign === "/") {
        lastSign = nurmberOrSign; 
    } else if (!isNaN(nurmberOrSign)) {
        if (lastSign === "+") {
            answer = answer + nurmberOrSign;
        } else if (lastSign === "-") {
            answer = answer - nurmberOrSign;
        } else if (lastSign === "*") {
            answer = answer * nurmberOrSign;
        } else if (lastSign === "/") {
            answer = answer / nurmberOrSign;
        } 
    } else if (nurmberOrSign === "=") { 
        calculator = false;
    }
}

console.log(answertext + answer);

/*var calculator = true;
var hasEntertNumber = false;
var answer = "";
var result = 0;

while (calculator) {

    var yourNumber = prompt("Input your number: ");
    if () { 
    } else if(yourNumber === "stop") {
        calculator = false;
        continue;
    } else if (isNaN(yourNumber)) {
        console.log("This is not a number! Try again!")
        continue;
    }

    var yourSign = prompt("Input your sign: ");
    if (yourSign === "stop") {
        calculator = false;
        continue;
    }

    if (yourSign === "+") { // A + B
        answer += yourNumber + yourSign;    
        result = result + yourNumber;
        console.log(answer);
        
    } else if (yourSign === "-") { // A - B 
        answer += yourNumber + yourSign;
        result = result - yourNumber;
        console.log(answer);
        
    } else if (yourSign === "*") { // A * B;
        answer += yourNumber + yourSign;
        result = result * yourNumber;
        console.log(answer);
        
    } else if (yourSign === "/") { // A / B
        answer += yourNumber + yourSign;
        result = result / yourNumber;
        console.log(answer);
        
    } else if (yourSign === "=") { 
        answer += yourNumber;
        console.log(answer + "= " + result);
        calculator = false;
    } else {
        console.log("There is not any sign!");
    }


}*/