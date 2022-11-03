var prompt = require('prompt-sync')();

var fullPrice = 0;
var prices = [
    {
        minimumAge: 0,
        maximumAge: 3,
        price: 0,
    },
    {
        minimumAge: 4,
        maximumAge: 6,
        price: 3,
    },
    {
        minimumAge: 7,
        maximumAge: 10,
        price: 5,
    },
    {
        minimumAge: 11,
        maximumAge: 15,
        price: 8,
    },
];

var shoppingList = [];
var newClient = true;

while (newClient){
    var question = prompt('Введите свой возраст: ');
    shoppingList.push(question);

    if (question === 'stop') {
        newClient = false;
        continue;
    };
};

for (var i = 0; i < shoppingList.length; i++) {
    for (var j = 0; j < prices.length; j++) {
        if (shoppingList[i] >= prices[j].minimumAge && shoppingList[i] <= prices[j].maximumAge) {
            fullPrice += prices[j].price;
        };
    };
};

console.log('С вас: ' + fullPrice + ' евро. Всего доброго!');