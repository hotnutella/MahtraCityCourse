var prompt = require('prompt-sync')();

var wantToBuy = true;
var fullPrice = 0;

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
        name: 'ladybug',
        price: 4,
    },
    {
        name: 'mosquito',
        price: 14,
    },
    {
        name: 'spider',
        price: 6,
    },
    {
        name: 'flea',
        price: 0.5,
    },
  ];

for (var i = 0; i < menu.length; i++) {
  console.log(menu[i].name, ' ........ ' , menu[i].price);
}

var cart = [];
while (wantToBuy) {
  var userInput = prompt('What do you want?: ');
  if (userInput === 'stop') {
    wantToBuy = false;
    continue;
  }

  cart.push(userInput);
}

for (i = 0; i < cart.length; i++) {
  for (var j = 0; j < menu.length; j++) {
    if (cart[i] === menu[j].name) {
      fullPrice += menu[j].price;
    }
  }
}

console.log('You need to pay ' + fullPrice);
