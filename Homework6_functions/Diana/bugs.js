import PromptSync from 'prompt-sync';
var prompt = PromptSync();

var fullPrice = 0;
var shoppingList = [];

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
      name: 'ladyBug',
      price: 3,      
    },
    {
      name: 'spider',
      price: 6,
    },
    {
      name: 'flea',
      price: 0.5,
    },
    {
      name: 'mosquito',
      price: 2.5,
    },
  ];


function showMenu() {
    var i = 0;
    while (i < menu.length) {
        console.log(menu[i].name, ' ------- ' , menu[i].price);
        i++;
    };
}
var wantToBuy = true;

function askUserInput() {
    while (wantToBuy) {
        var userInput = prompt('What do you want to buy? '); 
         if (userInput === 'stop') {
            stopProgram(userInput);
            continue;
        } else {
            addPrice(userInput); 
            shoppingList.push(userInput);
        }
    }
    return shoppingList;
}

function addPrice(userInput) {
    for (var bug of menu) {
        if (userInput === bug.name) {
            fullPrice += bug.price;
            return fullPrice;
        }
    }
}

function stopProgram(userInput) {
    wantToBuy = false;
    return wantToBuy;
}

function showShoppingList() {
    console.log( 'You bought: ' + shoppingList + '. You need to pay: ' + fullPrice);
}

showMenu();
askUserInput();
showShoppingList();