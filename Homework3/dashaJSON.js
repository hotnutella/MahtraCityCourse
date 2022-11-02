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
while (i < menu.price.length) {
    console.log(menu.name[i], menu.price[i]);
    i++;
}
