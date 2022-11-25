var prompt = require('prompt-sync')();

var rows = [
    [ 
        {
            id: 1,
            value: ' ',
        },
        {
            id: 2,
            value: ' ',
        },
        {
            id: 3,
            value: ' ',
        },
    ],
    [
        {
            id: 4,
            value: ' ',
        },
        {
            id: 5,
            value: ' ',
        },
        {
            id: 6,
            value: ' ',
        },
    ],
    [
        {
            id: 7,
            value: ' ',
        },
        {
            id: 8,
            value: ' ',
        },
        {
            id: 9,
            value: ' ',
        },
    ],
];

var player1Numbers = '';
var player2Numbers = '';

var X = 'X';
var O = 'O';

var winComb = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

console.log('Enter number from 1 to 9!')

var gameOn = true;
while (gameOn) {

if (0 < userInput < 10) {
    for ()
} else {
    console.log('Enter number from 1 to 9!')
}
   

//pokaz tablici
for (i = 0; i < rows.length; i++) { 
    var row = rows[i];
    var visibleSlots = [];
    for (j = 0; j < row.length; j++) {
        var slot = row[j];
        visibleSlots.push(slot.value);   
    }
    var visibleRow = visibleSlots.join('|')
    console.log(visibleRow);
}

var userInput = prompt('');
   
    if (userInput === 'stop') {
        gameOn = false;
        break;
    }
} 




