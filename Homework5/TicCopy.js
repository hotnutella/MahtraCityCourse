var prompt = require("prompt-sync")();

var player1Numbers = [];
var player2Numbers = [];
var O = "O";
var X = "X";

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
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

var GameOn = true;
var i = 0;
while (GameOn) {
    for (var row of rows) {
        visibleRow = [];
        for (var slot of row) {
            if (userInput === slot.id) {
                if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
                    
                        slot.value = X;
                        player1Numbers.push(slot.id);
                        visibleRow.push(slot.value);
                    
                } else if (i === 2 || i === 4 || i === 6 || i === 8){
                 
                        slot.value = O;
                        player2Numbers.push(slot.id);
                        visibleRow.push(slot.value);
                    
                }
            } else {
            visibleRow.push(slot.value);}
        }
    var newRow = visibleRow.join(" | ");
    console.log(newRow);
    //console.log(player1Numbers);
    //console.log(player2Numbers);
    //console.log(visibleRow);
    }
  
    var userInput = prompt ("Enter slot number: ");
    i++;
    userInput = Number(userInput);
    if (userInput === 12) {
        GameOn = false;
    }
    
    for (win of winComb) {
        if (player1Numbers.length === win.length){
            if (player1Numbers.includes(win))
            {console.log("Game Over")
            GameOn = false;}
            for (num of win) {
                
            }
            
        } else {break;} 
    }
}

