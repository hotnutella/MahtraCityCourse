import PromptSync from "prompt-sync";
import config from "./config.js";
var prompt = PromptSync();

//var currentPlayer = player1;
//var isGameOver = false

for (var row of config.rows) {
    var visibleSlots = [];
    for (var slot of row) {
        visibleSlots.push(slot.value);
    }
    var visibleRow = visibleSlots.join('|');
    console.log(visibleRow);
}

//while (isGameOver) {

//}