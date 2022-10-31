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

// JSON - JavaScript Object Notation
var menu = [
  {
    name: 'bug',
    price: 2,
  },
  {
    name: 'fly',
    price: 4,
  },
];

var flyFromMenu = menu[1];

console.log(flyFromMenu.name);




/*
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

console.log('You need to pay ' + fullPrice);
*/