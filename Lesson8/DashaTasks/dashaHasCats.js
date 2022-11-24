var prompt = require('prompt-sync')();

var dashasCats = 2;

var respawningCats = true;
while (respawningCats) {
    var input = prompt('What to do with cats?: ')
    input = input.split(' ');
    var quantity = Number(input[1]);
    if (input[0] === 'stop') {
        respawningCats = false;
    } else if (input[0] === 'add') {
        dashasCats += quantity;
    } else if (input[0] === 'delete') {
        dashasCats -= quantity;
    } else if (input[0] === 'show') {
        console.log('Dasha has ' + dashasCats + ' cats.');
    } else {
        console.log('Error, try again!')
        continue;
    }
}