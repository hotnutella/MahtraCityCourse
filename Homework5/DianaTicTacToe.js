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

var playerX = [];
var playerO = [];

var winComb = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

console.log('Welcome to TicTacToe! Enter number from 1 to 9!');
console.log(' ');

for (var row of rows) {
    var visibleSlots = [];
    for (var slot of row) {
        visibleSlots.push(slot.id);
    }
    var visibleRow = visibleSlots.join('|');
    console.log(visibleRow);  
}

console.log(' ');

var gameOn = true;
var num = 0;

while (gameOn) {
    var userInput = prompt('');
    userInput = Number(userInput);
    num += 1;

    if (isNaN(userInput)) {
        gameOn = false;
        break;
    }

    if (userInput < 10 && userInput > 0) {
        for (var row of rows) {
            var visibleSlots = [];
            for (var slot of row) {
                if (userInput === slot.id) {
                    var sign = '';
                    if (num === 1 || num === 3 || num === 5 || num === 7 || num === 9 ) {
                        sign += 'X';
                        playerX.push(slot.id);
                    } else if (num === 2 || num === 4 || num === 6 || num === 8 ) {
                        sign += 'O';
                        playerO.push(slot.id);
                    }
                    slot.value = sign;
                    visibleSlots.push(slot.value);
                } else {
                    visibleSlots.push(slot.value);
                }
            }
            var visibleRow = visibleSlots.join('|');
            console.log(visibleRow);
        }
        playerX.sort((a, b) => a - b);
        playerO.sort((a, b) => a - b);
        for (var win of winComb) {
            var victoryX = JSON.stringify(win) === JSON.stringify(playerX);
            var victoryO = JSON.stringify(win) === JSON.stringify(playerO);
            if (victoryX === true) {
                console.log('PLAYER X VICTORY!! CONGRATULATIONS!!!!!');   
                gameOn = false;
                break;
            } else if (victoryO === true) {
                console.log('PLAYER O VICTORY!! CONGRATULATIONS!!!!!');   
                gameOn = false;
                break;
            }
        }
    } else if (userInput > 9) {
        console.log('Enter number from 1 to 9!')
    }
}
