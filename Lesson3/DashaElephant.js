/*var i = 10;
i += 5; //== i = i + 5 ===> 15
i -= 6; //== i = i - 6 ===> 
i++; //+1
i--; //-1
console.log(i); */



/*var i = 0;

while (i < 10) {
    i++;
    console.log(i);
}

var hp = 50;
while (ph > 0) {
    hp--;
    console.log(hp);
}*/

var prompt = require("prompt-sync")();

var sellElephant = true;
var userInput = "";
var magicAnswer = "elephant";
while (sellElephant) {
    userInput = prompt("Buy the elephant!: ");
    if (userInput == magicAnswer) {
        sellElephant = false;
    }
}
console.log("Congratulations!")