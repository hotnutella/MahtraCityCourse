var prompt = require("prompt-sync")();

var TicTacToe = [
    {
        id: 1,
        value: '',
    },
    {
        id: 2,
        value: '',
    },
    {
        id: 3,
        value: '',
    },
    {
        id: 4,
        value: '',
    },
    {
        id: 5,
        value: '',
    },
    {
        id: 6,
        value: '',
    },
    {
        id: 7,
        value: '',
    },
    {
        id: 8,
        value: '',
    },
    {
        id: 9,
        value: '',
    },
]

var row = ["", "", ""];

for (var i = 0; i < row.length; i++) {
    var row1 = row[i];
    row1 += "| ";
    for (j = 0; j < row.length; j++) {
        row1 += TicTacToe[j].id + " | ";
    }
    console.log(row1);
}
