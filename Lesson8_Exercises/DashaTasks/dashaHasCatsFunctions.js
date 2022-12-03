var prompt = require('prompt-sync')();

var dashasCats = 2;
var respawningCats = true;

function getActionFromInput () {
    var input = prompt('What to do with cats?: ');
    input = input.split(' ');
    var actions = getAction();
    var result = {
        action: actions[input[0]],
        quantity: Number(input[1]),
    }
    return result;
}
function getAction() {
    var actions = {
        add: addCats,
        delete: deleteCats,
        show: showCats,
        nothing: stopProgram,
    }
    return actions;
}
function addCats (quantity) {
    dashasCats += quantity;
}
function deleteCats (quantity) {
    dashasCats -= quantity;
}
function showCats () {
    console.log('Dasha has ' + dashasCats + ' cats');
}
function stopProgram () {
    respawningCats = false;
}

while (respawningCats) {
    var actionObject = getActionFromInput();
    actionObject.action(actionObject.quantity);
}