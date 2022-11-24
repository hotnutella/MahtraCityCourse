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


for (i = 0; i < rows.length; i++) { 
    var row = rows[i];
    var visibleSlots = [];
    for (j = 0; j < row.length; j++) {
        var slot = row[j];
        visibleSlots.push(slot.id);   
    }
    var visibleRow = visibleSlots.join('|')
    console.log(visibleRow);
}

