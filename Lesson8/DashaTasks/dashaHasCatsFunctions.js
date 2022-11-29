var prompt = require('prompt-sync')();

var dashasCats = 2;
function askAndSplitInput () {
    var input = prompt('What to do with cats?: ');
    input = input.split(' ');
    var action = input[0];
    var quantity = Number(input[1]);
    function getAction (action) {
        var actions = {
            'nothing': stopProgram, 
            'add': addCats, 
            'delete': deleteCats, 
            'show': showCats,
        }
    }
    function showCats (getAction) {
        console.log('Dasha has ' + dashasCats + ' cats.');
    }
    function stopProgram (getAction){
        respawningCats = false;
    }
    function deleteCats (quantity) {
        dashasCats -= quantity;
    }
    function addCats (quantity) {
        dashasCats += quantity;
    }

}

var respawningCats = true;
while (respawningCats) {
    askAndSplitInput;
    console.log(dashasCats);
    if (getAction) {
        console.log(dashasCats);
        continue;
    } else {
        console.log(dashasCats);
        console.log('Error, try again!')
        continue;
    }
}