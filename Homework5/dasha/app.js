import PromptSync from "prompt-sync";
import config from "./config.js";
var prompt = PromptSync();
//var currentPlayer = player1;
var isGameOver = false;

function slots () {
    for (var row of config.rows) {
        var visibleSlots = [];
        for (var slot of row) {
            visibleSlots.push(slot.value);
        }
        var visibleRow = visibleSlots.join('|');
        console.log(visibleRow);
    }
}
function inputPlayer () {
    var inputPlayer = prompt('X or O? ')
    if (inputPlayer === 'X') {
        visibleSlots.push()
    } else if (inputPlayer === 'O') {

    } else if (inputPlayer === 'surrender') {
        surrender();
    }
}
function surrender () {
    isGameOver = true;
}
function currentPlayer () {
    var xoPlayers = config.players.map(function(player) {
        var selectedplayer = xoPlayers.filter(function(playersPerson) {
            return playersPerson.player === player;
        })
        .shift();
        visibleSlots.push()
        var IDs = selectedplayer.IDs;
        return IDs;
        
    })

    // for (var person of config.players) {
    //     var personFromPlayers = config.players.filter(function (person) {
    //         return person.player === person.IDs;
    //     })
    //     .shift();
    //     console.log(personFromPlayers)

    // }
    
}

function currentSlot () {
    for (var row of config.rows) {
        var slotFromRows = config.rows.filter(function (slot) {
            return slot.id === slot.value;
        })
        .shift();
        console.log(slotFromRows)
        config.rows.slot.value.push(config.players.person.IDs);
        //console.log(visibleRow +)
        currentPlayer()
    }
}

function askID () {
    var input = prompt('Please, input number from 1 to 9: ');
    input = currentSlot();
}
while (isGameOver) {
    askID();
}