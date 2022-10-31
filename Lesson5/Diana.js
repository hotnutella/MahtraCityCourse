var prompt = require('prompt-sync')();

var shoppingList = ['orange', 'banana', 'apple'];

var scannedItem = prompt('add you item ')
shoppingList.push(scannedItem);

var i = 0;
while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    i++;
}