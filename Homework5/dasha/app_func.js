import PromptSync from "prompt-sync";
import config from "./config.js";
const prompt = PromptSync();

const playerX = [];
const playerO = [];
let move = 1;
let isGameOver = false;

function visibleSlots () {
    for (const row of config.rows) {
        const visibleSlot = [];
        for (const slot of row) {
            visibleSlot.push(slot.value);
        }
        const visibleRow = visibleSlot.join('|');
        console.log(visibleRow);   
    }
}
function askID () {
    let inputSlotID = prompt('Please, input number from 1 to 9: ');
    inputSlotID = Number(inputSlotID);
    move++
    return inputSlotID;
}
function slotCheck (inputSlotID) {
    let slot = getSlotByID(inputSlotID);
    currentPlayerAndMoves(slot);  
}
function getSlotByID (slotID) {
    for (const row of config.rows) {
        for (const slot of row) {
            if (slotID === slot.id) {
                return slot;
            }
        }
    }
}
function currentPlayerAndMoves (slot) {
    let currentPlayer;
    if (move % 2 == 0) {
        currentPlayer = 'X';
        playerX.push(slot.id);
    } else {
        currentPlayer = 'O'
        playerO.push(slot.id);
    }
    slot.value = currentPlayer;
}
function winCheck () {
    // for (const win of config.winningCombinations) {
    //     playerX.sort((a, b) => a - b);
    //     playerO.sort((a, b) => a - b);
    //     // const winnerBla = "1,7,8,9".includes("7,8,9");
    //     const winnerX = JSON.stringify(playerX).includes(JSON.stringify(win));
    //     const winnerO = JSON.stringify(playerO).includes(JSON.stringify(win));
    //     console.log('win', win);
    //     console.log('player x', playerX);
    //     console.log('player o', playerO);
    //     if (winnerX) {
    //         winner = 'X';
    //     } else if (winnerO) {
    //         winner = 'O';
    //     }
    //     if (winner) {
    //         const victory = 'VICTORY!!! The winner is ' + winner + '!';
    //         console.log(victory);
    //         gameOver();
    //         break;
    //     }
    // }
    let winner;
    if (isWin(playerX)) {
        winner = 'X';
    } else if (isWin(playerO)) {
        winner = 'O'
    }
    if (winner) {
        const victory = 'VICTORY!!! The winner is ' + winner + '!';
        console.log(victory);
        gameOver();
    }
    if (move === 10) {
        gameOver();
    }
}
function isWin (player) {
    let isWin = false;
    for (const win of config.winningCombinations) {
        let slotCount = 0;
        for (const slotId of player) {
            if (win.includes(slotId)) {
                slotCount++;
            }
        }
        if (slotCount ===  win.length) {
            isWin = true;
        }
    }
    return isWin;
}
function gameOver () {
    move = 1;
    console.log('Game over!')
    isGameOver = true;
}
while (!isGameOver) {
    visibleSlots();
    const userInput = askID();
    slotCheck(userInput);
    winCheck();
    
}
