var prompt = require('prompt-sync')();

var fullPrice = 0;

var bug = 2;
var fly = 4;
var ladyBug = 4;
var spider = 6;
var flea = 0.5;
var mosquito = 14;

var menuPrices = [bug, fly, ladyBug, spider, flea, mosquito];
var menuTexts = ['bug', 'fly', 'ladyBug', 'spider', 'flea', 'mosquito'];
var shoppingList = [];

var i = 0;
while (i < menuPrices.length) {
  console.log(menuTexts[i], ' ........ ' , menuPrices[i]);
  i++;
}

var wantToBuy = true;
while (wantToBuy) {
  var userInput = prompt('What do you want?: ');
  console.log(userInput);
  if (userInput === 'stop') {
    wantToBuy = false;
    continue;
  }

  shoppingList.push(userInput);

  /*
  switch(userInput) {
    case 'bug':
      shoppingList.push('bug');
      break;
    case 'fly':
      shoppingList.push('fly');
      break;
  }
  */
}

i = 0;
while (i < shoppingList.length) {
  var item = shoppingList[i];
  // includes - massiv soderzhit znachenie
  if (menuTexts.includes(item)) {
    // indexOf - na kakoj pozicii v massive nahoditsa znachenie
    // esli znachinie ne naideno, togda indexOf vernet -1
    // index - polozenie v massive
    var index = menuTexts.indexOf(item);
    if (index >= 0) {
      fullPrice += menuPrices[index];
    }
  }
  i++;
}

console.log('You need to pay ' + fullPrice);

/*

var isShopping = true;
while (isShopping) {
  var scannedItem = prompt('Add your item: ');
  if (scannedItem === 'stop') {
    isShopping = false;
    continue;
  }
  shoppingList.push(scannedItem);
}


i = 0;
while (i < shoppingList.length) {
  console.log(shoppingList[i]);
  i++;
}
*/