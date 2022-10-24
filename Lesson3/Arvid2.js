/*var i = 10;
i += 5;
i++;
console.log(i);
while(){
    console.log(i);
}
var i = 0;
while(i < 10){
    i++;
    console.log(i);
}*/
var prompt = require("prompt-sync")();
var magicanswer = "elephant";
var sellelephant = true;
var userInput = " ";
while (sellelephant) {
    userInput = prompt("Buy the elephant: ");
    if (userInput == magicanswer) {
        sellelephant = false;
    }
};
