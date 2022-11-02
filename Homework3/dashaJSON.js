var prompt = require('prompt-sync')();

var fullPrice = 0;

var menu = [
    {
        name: 'bug',
        price: 4,
    },
    {
        name: 'fly',
        price: 2,
    },
    {
        name: 'ladyBug',
        price: 10,
    },
    {
        name: 'spider',
        price: 1,
    },
    {
        name: 'flea',
        price: 5,
    },
    {
        name: 'mosquito',
        price: 7,
    },
];
var shoppingList = [];

var i = 0;
while (i < menu.length) {
    menu[i].price
    console.log(menu[i].name, menu[i].price);
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
console.log(shoppingList)

i = 0;
while (i < shoppingList.length) {
    var j = 0;
    while(j < menu.length) {
        if (shoppingList[i] == menu[j].name) {
            fullPrice += menu[j].price;
        }
        j++;
    }
    i++;
}

console.log('You need to pay ' + fullPrice); 