var prompt = require('prompt-sync')();

var dashasCats = 2;

var respawningCats = true;
while (respawningCats) {
    var input = prompt('What to do with cats?: ');
    input = input.split(' ');
    var action = input[0];
    var quantity = Number(input[1]);
    
    
    if (action === 'nothing') {
        respawningCats = false;
    } else if (action === 'add') {
        dashasCats += quantity;
    } else if (action === 'delete') {
        dashasCats -= quantity;  
    } else if (action === 'show') {
        if (dashasCats <= 0) {
            console.log('Dasha doesn\'t have any cats.');
        } else if (dashasCats == 1) {
            console.log('Dasha has ' + dashasCats + ' cat.');
        } else {
            console.log('Dasha has ' + dashasCats + ' cats.');
        }
    } else {
        console.log('Error, try again!');
        continue;
    }
}