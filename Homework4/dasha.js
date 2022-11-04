var prompt = require('prompt-sync')();

var ourFamily = [
    {
        name: 'Tyrion',
        mushrooms: [],
    },
    {
        name: 'LyaLya',
        mushrooms: [],
    },
    {
        name: 'Deniss',
        mushrooms: [],
    },
    {
        name: 'Dasha',
        mushrooms: [],
    },
];

var allMushrooms = ['boletus', 'saffron', 'chanterelle', 'cep', 'russula', 'champignon', 'amanita',];

var mushroomToTheCreature = [];

var chooseMushrooms = true;
while (chooseMushrooms) {
    var name = prompt('Your name: ');
    var mushroom = prompt('Mushroom name: ');
    if (name === 'stop') {
        chooseMushrooms = false;
        continue;
    };
    mushroomToTheCreature.push(mushroom);
};

console.log(mushroomToTheCreature);

or (var i = 0; i < mushroomToTheCreature.length; i++) {
    var basket = ourFamily[i].mushrooms;

    //for (var j = 0; j < allMushrooms.length; j++) {

        for (var r = 0; r < ourFamily.length; r++) {
            var whoIsIt = ourFamily[r].name;
            if () {
                basket += mushroom;
            };
            
        };

   // };
    
};

console.log(whoIsIt + ' has such mushrooms in a basket: ' + basket);