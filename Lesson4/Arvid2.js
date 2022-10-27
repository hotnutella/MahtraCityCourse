var prompt = require("prompt-sync")();

var money = 50;
var newClient = true;
var beerPrice = 4.5;
var vodkaPrice = 5;
var tequilaPrice = 12;
var whiskyPrice = 6.5;
var noMoney = "You have no money, go find a job! ";
while (newClient) {
    var question = prompt("You have " + money + ". What do you want?");

    if (question == "Stop") {
        newClient = false;
        console.log("Okay. Thank you bye, you still have " + money + " money. ")
        continue;
    } else if (question == "beer") {
        money -= beerPrice;
        if (money < beerPrice) {
            console.log(noMoney);
            newClient = false;
        } else {
            money -= beerPrice;
        }
    } else if (question == "vodka") {
        money -= vodkaPrice;
        if (money < vodkaPrice) {
            console.log(noMoney);
            newClient = false;
        } else {
            money -= vodkaPrice;
        }
    } else if (question == "whisky") {
        money -= whiskyPrice;
        if (money < whiskyPrice) {
            console.log(noMoney);
            newClient = false;
        } else {
            money -= whiskyPrice;
        }
    } else if (question == "tequila") {
        money -= tequilaPrice;
        if (money < tequilaPrice) {
            console.log(noMoney);
            newClient = false;
        } else {
            money -= tequilaPrice;
        }
    }
}
 