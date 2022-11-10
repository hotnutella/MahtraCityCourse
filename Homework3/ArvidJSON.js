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


while (wantToBuy) {
  var userInput = prompt('What do you want?: ');
  if (userInput === 'stop') {
    wantToBuy = false;
    continue;
  }

  if (userInput === "bug") {
        fullPrice += menu[0].price
    } else if (userInput === "fly") {
        fullPrice += menu[1].price
    } else if (userInput === "ladybug") {
        fullPrice += menu[2].price
    } else if (userInput === "mosquito") {
        fullPrice += menu[3].price
    } else if (userInput === "spider") {
        fullPrice += menu[4].price
    } else if (userInput === "flea") {
        fullPrice += menu[5].price
    }
  }
 

console.log('You need to pay ' + fullPrice);
