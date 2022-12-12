import PromptSync from "prompt-sync";
import config from "./config.js";
var prompt = PromptSync();
var isGameOver = false;

function slots () {
    for (var row of config.rows) {
        var visibleSlots = [];
        for (var slot of row) {
            console.log('here')
            slotCheck();
            console.log('here')
            askID();
            console.log('here')
            winCheck();
            console.log('here')
            return slot;
        }
        var newRow = visibleSlots.join('|');
        console.log(newRow);
    }

}
function askID () {
    var inputSlotID = prompt('Please, input number from 1 to 9: ');
    inputSlotID = Number(inputSlotID);
    return inputSlotID;
}
function slotCheck () {
    if (userInput === config.slot.id) {
        config.slot.value = currentPlayer();
    } else {
        visibleSlots.push(config.slot.value);
    }
}

function currentPlayer (inputSlotID) {
    var xORo = prompt('X or O? ')
    if (xORo === 'surrender') {
        isGameOver = true;
    } else {
        playerCheck();
        var playersIds = config.players.player.IDs.push(inputSlotID)
        return playersIds;
    }
    return xORo;
}
function playerCheck (xORo) {
    var xo = config.players.filter(function (player) {
        return xORo === player.name;
    })
    return xo;
}
function winCheck (playersIds) {
    var winner = config.winningCombinations.filter(function(win) {
        if (playersIds.length === win.length) {
            if (playersIds.includes(win)) {
                isGameOver = true;
                console.log('Game Over?');
            }
        }
    })
    return winner;
}
while (isGameOver) {
    slots();
    var userInput = askID();
}