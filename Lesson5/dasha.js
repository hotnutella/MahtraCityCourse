var prompt = require("prompt-sync")();

var fullPrice = 0;

var bug = 2;//zuk
var fly = 1;//muha
var ladyBug = 4;//korowka bozja
var spider = 0.5;//pauk
var mosquito = 14;//komar
var flea = 6;//bloha

var menuPrices = [bug, fly, ladyBug, spider, flea, mosquito];
var menuTexts = ["bug", "fly", "ladyBug", "spider", "flea", "mosquito"];
var shoppingList = [];

var i = 0;
while (i < menuPrices.length) {
    console.log(menuTexts[i], menuPrices[i]);
    i++;
}

var wantToBuy = true;
while (wantToBuy) {
    var userInput = prompt("What do you want?: ");
    console.log(userInput);
    if (userInput === "stop") {
        wantToBuy = false;
        continue;
    }
    shoppingList.push[userInput];
}

i = 0;
while (i < shoppingList.length) {
  var item = shoppingList[i];
  if (menuTexts.includes(item)) {
    var index = menuTexts.indexOf(item);
    if (index >= 0) {
      fullPrice += menuPrices[index];
    }
  }
  i++;
}
console.log("You need to pay " + fullPrice);


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
*/