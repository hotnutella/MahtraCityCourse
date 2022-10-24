var prompt = require("prompt-sync")();

var A = prompt("First number ");
var B = prompt("Second number ");
var C = prompt("Which action ");
var G = "+";
var H = "-";
var J = "*";
var K = "/";
var Sum = " ";

if (C == G) {
    Sum = Number(A) + Number(B);
} else if (C == H) {
    Sum = Number(A) - Number(B);
} else if (C == J) {
    Sum = Number(A) * Number(B);
} else if (C == K) {
    Sum = Number(A) / Number(B);
}
else {
    Sum = "Not the right operator";
}

console.log("Answer: " + Sum);



//A  B console.log(A+B
