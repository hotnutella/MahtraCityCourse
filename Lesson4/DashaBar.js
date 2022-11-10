var prompt = require("prompt-sync")();

/*?You have n money. What do you want?
beer/ vodka/ whisky/ tequila
< less
*/
var money = 10;

var clientWantSomething = true;
var noMoneyS = "You don't have money! Go find the job!";
var beerPrice = 4;
var vodkaPrice = 5;
var whiskyPrice = 5;
var tequilaPrice = 7;

while (clientWantSomething) {
    var order = prompt("You have " + money + " money. What do you want?: ");
    if (order == "I had enought") {
        clientWantSomething = false;
        console.log("Okey! You still have " + money + " money!");
        continue;
    //handle drinks
    } if (order == "beer") {
        if (money < beerPrice) {
            console.log(noMoneyS);
            clientWantSomething = false;
        } else {
            money -= beerPrice;
        }
    } else if (order == "vodka") {
        if (money < vodkaPrice) {
            console.log(noMoneyS);
            clientWantSomething = false;
        } else {
            money -= vodkaPrice;
        }
    } else if (order == "whisky") {
        if (money < whiskyPrice) {
            console.log(noMoneyS);
            clientWantSomething = false;
        } else {
        money -= whiskyPrice;
        }
    } else if (order == "tequila") {
        if (money < tequilaPrice) {
            console.log(noMoneyS);
            clientWantSomething = false;
        } else {
            money -= tequilaPrice;
        }
    }
}




/*var newClient = true;
var youngerThan13 = 0;
var olderThan12 = 0;
while (newClient) {
    var age = prompt("How old are you?: ");
    if (age == "stop") {
        newClient = false;
    }
    if (isNaN(age)) {
        continue; //Go to the next iteration
    }
    age = Number(age);
    if (age > 12) {
        olderThan12++;
    } else {
        youngerThan13++;
    }
}

var priceUnder13 = 0;
var priceOver12 = 7;

var totalPrice = youngerThan13 * priceUnder13 + olderThan12 * priceOver12;

console.log("It will be " + totalPrice + ", please!");
*/