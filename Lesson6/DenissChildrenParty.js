var prompt = require('prompt-sync')();

/**
 * 1. Urovni cen v vide JSON (minimum 3)
 * 2. Skolko tebe let? -> sohranit v massiv
 * 3. For cikl - projtis po massivu klientov
 * 4. Najti po vozrastu cenu i dobavit k obshej stoimosti
 */

var priceLevels = [
  {
    min: 0,
    max: 5,
    price: 1,
  },
  {
    min: 6,
    max: 10,
    price: 2,
  },
  {
    min: 11,
    max: 15,
    price: 5,
  },
  {
    min: 16,
    max: 17,
    price: 10,
  },
];

var newClient = true;
var clients = [];
while (newClient) {
  var age = prompt('How old are you?: ');
  if (age === 'stop') {
    newClient = false;
  }
  clients.push(age);
}

var fullPrice = 0;
for (var client of clients) {
  for (var priceLevel of priceLevels) {
    if (client >= priceLevel.min && client <= priceLevel.max) {
      fullPrice += priceLevel.price;
    }
  }
}

console.log('You need to pay: ' + fullPrice);