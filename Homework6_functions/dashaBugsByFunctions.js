import PromptSync from "prompt-sync";
var prompt = PromptSync();

var wantTobuy = true;
var menu = [
    {
        name: 'bug',
        price: 2,
    },
    {
        name: 'fly',
        price: 1,
    },
    {
        name: 'ladybug',
        price: 70,
    },
    {
        name: 'spider',
        price: 3,
    },
    {
        name: 'mosquito',
        price: 14,
    },
    {
        name: 'flea',
        price: 6,
    },
]
var shoppinglist = [];

function addToCart () {
    var yourChoice = prompt("What do you want?: ");
    if (yourChoice == 'nothing') {
        wantTobuy = false;
    } else {
        shoppinglist.push(yourChoice);
    }
}
function cartCheck () {
    var fullPrice = 0; 
    for (var item of shoppinglist) {
        var itemFromMenu = menu.filter(function (product) {
            return product.name === item;
        })
        .shift();
        fullPrice += itemFromMenu.price;
    }
    console.log("You need to pay " + fullPrice);
}

for (var product of menu) {
    console.log(product);
}
while (wantTobuy) {
    addToCart();
}
cartCheck();

