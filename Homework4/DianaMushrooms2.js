var prompt = require('prompt-sync')();

var peoples = [
    {
        name: 'Арвидас',
        mushrooms: [],
    },
    {
        name: 'Диана',
        mushrooms: [],
    },
    {
        name: 'Даша',
        mushrooms: [],
    
    },
    {
        name: 'Денис',
        mushrooms: [],
    },
];

var newPeople = true;

while(newPeople) {
    var peopleAnswer = prompt('Назови свое имя: ');
    if (peopleAnswer === 'стоп') {
        newPeople = false;
        continue;
    };

    var newMushroom = true;

    while (newMushroom) {
        var mushroom = prompt('Какие грибы ты собрал? ');
        mushroom = String(mushroom);
        if (mushroom === 'стоп') {
            newMushroom = false;
            continue;
        };

        for (i = 0; i < peoples.length; i++) {
            if (peopleAnswer === peoples[i].name) {
                 peoples[i].mushrooms.push(mushroom);
             };
         };
    };
};

var mushroomList = true;

while (mushroomList) {
    var showMushroomsOfThisPerson = prompt('Чьи грибы ты хочешь увидеть? ');
    for (i = 0; i < peoples.length; i++) {
        if (showMushroomsOfThisPerson === peoples[i].name) {
            console.log(peoples[i].name + ': ' + peoples[i].mushrooms);
        };
    };
    if (showMushroomsOfThisPerson === 'стоп') {
        mushroomList = false;
        break;
    };
};

console.log('Всего хорошего!')