var prompt = require("prompt-sync")();

var fullPrice = 0;
var shoppingList = [];
var i = 0;
var bug = 2;
var fly = 4;
var ladyBug = 4;
var spider = 6;
var mosquito = 14;
var flea = 0.5;

var menu = [bug, fly, ladyBug, spider, mosquito, flea]
var menuText = ["bug", "fly", "ladybug", "spider", "mosquito", "flea"];

while (i < menu.length) {
    console.log(menu[i]," ...... " ,menuText[i])
    i++;
}

var wantToBuy = true;

while (wantToBuy) {
    var userInput = prompt("What the hell you want? ")
    if (userInput === "Stop") {
        wantToBuy = false;
        continue;
    }
shoppingList.push(userInput);
   /* switch (userInput) {
        case "bug":
            shoppingList.push("bug");
            break;
    }*/
}
    i = 0;
    while(i < shoppingList.length) {
        var item = shoppingList[i];
        if (menuText.includes(item)) {
           var index = menuText.indexOf(item);
            if (index >= 0) {
                fullPrice += menu[item];
            }
        }

        i++;
    }
    console.log("You need to pay: " + fullPrice)
/*
var isShopping = true;
//var shoppingList = ["banana", "orange", "apple", "pear"];
var shoppingList = [];
//shoppingList.push("applhe");
while(isShopping) {
var scannedItem = prompt("Add your item: ")
shoppingList.push(scannedItem);
if (scannedItem === " stop")
isShopping = false;
continue;
}
var length = shoppingList.length;
i = 0;
while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    i++;
}*/