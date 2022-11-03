var prompt = require('prompt-sync')();

var ticketsSale = true;
var fullPrice = 0;

var allPrices = [
    {
        min: 0,
        max: 5,
        price: 0,
    },
    {
        min: 6,
        max: 12,
        price: 4,
    },
    {
        min: 13,
        max: 16,
        price: 10,
    },
];

var cart = [];
 
while (ticketsSale) {
    var userInput = prompt('How old are you?: ');
    if (userInput === 'stop') {
        ticketsSale = false;
        continue;
    }
    cart.push(userInput);
}

console.log(cart);

for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < allPrices.length; j++) {
        if (cart[i] >= allPrices[j].min && cart[i] <= allPrices[j].max ) {
            fullPrice += allPrices[j].price;
        }
    }
}

console.log(fullPrice)