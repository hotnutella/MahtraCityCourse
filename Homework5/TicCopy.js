var prompt = require("prompt-sync")();

var player1Numbers = [];
var player2Numbers = [];
var player1 = "";
var player2 = "";

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
for (var row of rows) {
    visibleRow = [];
    for (var column of row) {
        visibleRow.push(column.value);
    }
    var newRow = visibleRow.join(" | ");
    console.log(newRow);
}

