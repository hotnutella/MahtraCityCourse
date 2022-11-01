var prompt = require("prompt-sync")();

var fullPrice = 0;

var bug = 2;
var fly = 1;
var ladyBug = 4;
var spider = 0.5;
var mosquito = 14;
var flea = 6;

var menuPrices = [bug, fly, ladyBug, spider, flea, mosquito];
var menuTexts = ["bug", "fly", "ladyBug", "spider", "flea", "mosquito"];
var shoppingList = [];
shoppingList.push[userInput];
var i = 0;
while (i < menuPrices.length) {
    console.log(menuTexts[i], menuPrices[i]);
    i++;
}

var wantToBuy = true;
while (wantToBuy) {
    var userInput = prompt("");
}

/* 
var isShopping = true;
while (isShopping) {
    var scannedItem = prompt("Add your item: ");
    if (scannedItem === "stop") {
        isShopping = false;
        continue;
    }
    shoppingList.push(scannedItem);
}
 // dobavili v zna4enie shoppinglista



//var length = shoppingList.length;

while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    i++;
}