import promptSync from "prompt-sync";

var prompt = promptSync();
var wantToBuy = true;
var fullPrice = 0;
var cart = [];

function getMenu () {
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
  return menu;
}
function showMenu () {
    var menu = getMenu();
    for (var i = 0; i < menu.length; i++) {
        console.log(menu[i].name, ' ........ ' , menu[i].price);
    }
}
function stopProgramm(userInput) {
    if (userInput === 'stop') {
        wantToBuy = false;
    }
}
function isNotNumber (userInput) {
    if (!isNaN(userInput)) {
        console.log("Choose out of menu :")
        showMenu();
    }
}
function askClientOfHisChoice () {
    while (wantToBuy) {
        var userInput = prompt("What do you want?: ");
        isNotNumber(userInput);
        stopProgramm(userInput);
        cart.push(userInput);
    }
}
function clientCartPrice() {
    var menu = getMenu();

    // cart: ['fly', 'ladybug', 'spider']
    // cart: ['flybob', 'ladybugbob', 'spiderbob']
    // itemPrices: [4, 4, 6]
    var items = cart.map(function(item) {
        return item + 'bob';
    });

    for (var item of cart) {
        itemPrices.push(item);
    }


    var itemPrices = cart.map(function(item) {
        var selectedMenuItem = menu.filter(function(menuItem) {
            return menuItem.name === item;
        })
        .shift();

        var price = selectedMenuItem.price;
        return price;
    });
    var fullPrice = itemPrices.reduce(function(sum, currentItemPrice) {
        return sum + currentItemPrice;
    }, 0);
    
    return fullPrice;
}


showMenu();
askClientOfHisChoice();
clientCartPrice();

console.log('You need to pay ' + fullPrice);