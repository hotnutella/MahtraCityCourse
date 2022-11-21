var prompt = require('prompt-sync')();

// Game board initialization
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

// Players
var player1 = 'X';
var player2 = 'O';

var currentPlayer = player1;

// Winning combinations
var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
];


// Game
var isGameOver = false;
while (!isGameOver) {
    
    // player wins
    isGameOver = true;
}



for (var row of rows) {
    var visibleSlots = [];
    for (var slot of row) {
        visibleSlots.push(slot.value);
    }
    var visibleRow = visibleSlots.join('|');
    console.log(visibleRow);   
}

