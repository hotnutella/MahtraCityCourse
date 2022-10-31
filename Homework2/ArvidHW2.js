var prompt = require ("prompt-sync")();

var numberOf = true;
var ourString = "";
var result = prompt("Input number : ");
result = Number(result);
ourString += result;
while (numberOf) {
    var signs = prompt("Input signs : ");
    ourString += signs;
    if (signs === "=") {
        numberOf = false;
        continue;
    }
    var number = prompt("Input number : ");
    ourString += number;
    number = Number(number);
    if (signs == "+") {
        result += number;
    }  else if (signs == "-") {
        result -= number;
    }  else if (signs == "*") {
        result *= number;
    }  else if (signs == "/") {
        result /= number;
    }
    
}
console.log(ourString + result);