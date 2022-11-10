var prompt = require('prompt-sync')();

var ourFamily = [
    {
        name: 'Tyrion',
        mushrooms: ['chanterelle',],
    },
    {
        name: 'LyaLya',
        mushrooms: ['saffron',],
    },
    {
        name: 'Deniss',
        mushrooms: ['amanita',],
    },
    {
        name: 'Dasha',
        mushrooms: [],
    },
];

var allMushrooms = ['boletus', 'saffron', 'chanterelle', 'cep', 'russula', 'champignon', 'amanita',];

var name;
var chooseMushrooms = true;
while (chooseMushrooms) {
    name = prompt('Your name: ');
    if (name === 'stop') {
        chooseMushrooms = false;
        continue;
    }
    var mushroom = prompt('Mushroom name: ');
    
    for (var creature of ourFamily) {
        if (name === creature.name && allMushrooms.includes(mushroom)) {
            creature.mushrooms.push(mushroom);
        }
    }
}

var basket = true;
while (basket) {
    var whoseBasket = prompt('Whose basket you wanna see?: ');
    for (var creature of ourFamily) {
        if (whoseBasket === creature.name) {
            console.log(whoseBasket + ' has such mushrooms in the basket: ' + creature.mushrooms);
        } else if (whoseBasket === 'stop') {
            basket = false;
            continue;
        }
    }
}

//   \' || \" || ili ljuboi drugoi showii single ==>>> ekranirovanie = escape (dlja apostrofa) :))