var prompt = require("prompt-sync")();

// A, B,  console.log(A+B);
var znak = prompt("Choose your operator: ");
var A = prompt("First number: ");
A = Number;
var B = prompt("Second number?: ");
B = Number;

var answer = "";

if (znak == "+") {
   answer = A + B;
} else if (znak == "-") {
   answer = A - B;
} else if (znak == "*") {
   answer = A * B;
} else if (znak == "/") {
   answer = A / B;
} else {
    answer = "not found";
}

console.log(answer);


/*switch (znak) {
    case "+":
        answer = A + B;
        break;
    case "-":
        answer = A - B;
        break;
    case "*":
        answer = A * B;
        break;
    case "/":
        answer = A / B;
        break;
    default:
        answer = "Not found";
}

console.log(answer); */

