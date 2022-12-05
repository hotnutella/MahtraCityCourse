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
showMenu();
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
askClientOfHisChoice();
function clientCartPrice() {
for (var item of cart) {
    var menu = getMenu();
        for (var menuItem of menu) {
        if (item === menuItem.name) {
            fullPrice += menuItem.price;
        }
  }
} 
return fullPrice;
}
clientCartPrice();
console.log('You need to pay ' + fullPrice);