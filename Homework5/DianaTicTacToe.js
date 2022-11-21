var prompt = require('prompt-sync')();

var rows = [
    row1 = [ 
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
    row2 = [
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
    row3 = [
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

var i = 0;
for (i; i < 3; i++) { 
    a = rows[i];
    console.log(a[0].value + '|' + a[1].value + '|' + a[2].value);
}

