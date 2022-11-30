var prompt = require('prompt-sync')();

var dashasCats = 2;
var action = input[0];
var quantity = Number(input[1]);


function input () {
    var input = prompt('What to do with cats?: ');
    input = input.split(' ');
    return action && quantity;
    
}

var actions = [
    {'add': addCats,},
    {'delete': deleteCats,},
    {'show': showCats,},
    {'nothing': stopProgram,}
]
function getActions() {
    if (actions.includes(action)) {
        return console.log('here vot tut')
    }
}
/*
function getActions() {
    var actions = {
        'add': addCats,
        'delete': deleteCats,
        'show': showCats,
        'nothing': stopProgram,
    }

    console.log('Here 2');
    return actions;
}

function testkeys() {
    var actions = getActions();
        console.log('done!2');
    return Object.keys(actions); 
}
function testsave() {
    var actions = getActions();
    if (actions.includes(action)) {
        console.log('done!');
    }
}
*/



function addCats (dashasCats, quantity) {
    dashasCats += quantity;
    console.log('Here 3');
    return dashasCats;
}
function deleteCats (dashasCats, quantity) {
    dashasCats -= quantity;
    console.log('Here 4');
    return dashasCats;
}
function showCats () {
    console.log('Here 5');
    return console.log('Dasha has ' + dashasCats + ' cats');
}
function stopProgram (action) {
    action === 'nothing';
    console.log('Here 6');
    return respawningCats = false;
}


var respawningCats = true;
while (respawningCats) {
    input();
    if (getActions()) {
        continue;
    } else {
        console.log('Error, try again!');
        break;
    }
}