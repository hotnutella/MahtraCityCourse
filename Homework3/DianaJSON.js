var prompt = require('prompt-sync')();

var fullPrice = 0;
var shoppingList = [];

var menu = [
    {
      name: 'bug',
      price: 2,
    },
    {
      name: 'fly',
      price: 4,
    },
    {
      name: 'ladyBug',
      price: 3,      
    },
    {
      name: 'spider',
      price: 6,
    },
    {
      name: 'flea',
      price: 0.5,
    },
    {
      name: 'mosquito',
      price: 2.5,
    },
  ];

  var i = 0;
  while (i < menu.length) {
    console.log(menu[i].name, ' ------- ' , menu[i].price);
    i++;
  };

var wantToBuy = true;
while (wantToBuy) {
    var userInput = prompt('What do you want to buy? ');

    if (userInput === 'stop') {
        wantToBuy = false;
        continue;
    };

    shoppingList.push(userInput);

    if (userInput === 'bug') {
        fullPrice += menu[0].price
    } else if (userInput === 'fly') {
        fullPrice += menu[1].price;
    } else if (userInput === 'ladyBug') {
        fullPrice += menu[2].price;
    } else if (userInput === 'spider') {
        fullPrice += menu[3].price;
    } else if (userInput === 'flea') {
        fullPrice += menu[4].price;
    } else if (userInput === 'mosquito') {
        fullPrice += menu[5].price;
    };

};

console.log( 'You bought: ' + shoppingList + '. You need to pay: ' + fullPrice);