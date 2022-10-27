var prompt = require('prompt-sync')();

var money = 20;

var beerPrice = 3;
var vodkaPrice = 2;
var whiskyPrice = 5;
var tequilaPrice = 7;

var iWantToBuyDrinks = true;
var noMoneyString = 'You have no money! Go find a job!';

while (iWantToBuyDrinks) {
  var order = prompt('You have ' + money + ' money. What do you want?');

  if (order == 'i had enough') {
    iWantToBuyDrinks = false;
    console.log('Okay! You still have ' + money + ' money!');
    continue;
  }

  // handle drinks
  if (order == 'beer') {
    if (money < beerPrice) {
      console.log(noMoneyString);
      iWantToBuyDrinks = false;
    } else {
      money -= beerPrice;
    }    
  } else if (order == 'vodka') {
    if (money < vodkaPrice) {
      console.log(noMoneyString);
      iWantToBuyDrinks = false;
    } else {
      money -= vodkaPrice;
    }
  } else if (order == 'whisky') {
    if (money < whiskyPrice) {
      console.log(noMoneyString);
      iWantToBuyDrinks = false;
    } else {
      money -= whiskyPrice;
    }    
  } else if (order == 'tequila') {
    if (money < tequilaPrice) {
      console.log(noMoneyString);
      iWantToBuyDrinks = false;
    } else {
      money -= tequilaPrice;
    }
  }
}



/**
 * 1. You have n money. What do you want?
 * 1.1. beer | vodka | whisky | tequila
 * 2. You have (n - price) money. What do you want?
 * 2.1. beer | vodka | whisky | tequila
 * 3. if money < price, you have no money, go find a job
 * 4. i had enough - kthxbye, you still have n money
 */