import PromptSync from "prompt-sync";
import config from "./config.js";
var prompt = PromptSync();

var currentPlayer;
var playerX = [];
var playerO = [];
var move = 1;
var userInput;
var isGameOver = false;

var theSlot = config.rows.map(function (row) {
    return row;
})
.map(function (slot) {
    slot = slot.value
    return slot;
})

function visibleSlots () {
    for (var row of config.rows) {
        var visibleSlot = [];
        for (var slot of row) {
            visibleSlot.push(slot.value);
        }
        var visibleRow = visibleSlot.join('|');
        console.log(visibleRow);   
    }
}
function askID () {
    var inputSlotID = prompt('Please, input number from 1 to 9: ');
    inputSlotID = Number(inputSlotID);
    return move++;
}
function slotCheck (inputSlotID) {
    if (theSlot.id === inputSlotID) {
        currentPlayerAndMoves();  
    } else {
        visibleSlots.push(config.slot.value);
    }
}
function currentPlayerAndMoves (inputSlotID, theSlot) {
    if (Number.isInteger(move) == true) {
        if (move % 2 == 0) {
            currentPlayer = 'X';
            playerX.push(inputSlotID);
        } else {
            currentPlayer = 'O'
            playerO.push(inputSlotID);
        }
        theSlot = currentPlayer;
    } 
}
// function winCheck () {
//     var winner = config.winningCombinations.filter(function(win) {
//         if (win ===) {
//             if () {
//                 console.log('Game Over?');
//                 isGameOver = true;
//             }
//         }
//     })
//     return winner;
// }
while (!isGameOver) {
    visibleSlots();
    userInput = askID();
    slotCheck();

    winCheck();
    console.log('here')
}