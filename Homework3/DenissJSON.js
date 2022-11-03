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
    
var i = 0;
while (i < menu.length) {
  console.log(menu[i].name, ' ........ ' , menu[i].price);
  i++;
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

i = 0;
while (i < cart.length) {
  // pribavlenie k stoimosti
  var item = cart[i];

  var j = 0;
  while (j < menu.length) {
    var menuItem = menu[j];
    if (item === menuItem.name) {
      fullPrice += menuItem.price;
    }
    j++;
  }
  i++;
} 

console.log('You need to pay ' + fullPrice);
