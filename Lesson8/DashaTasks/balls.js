var prompt = require('prompt-sync')();


/**
 * massiv s balls
 * app ask what  to do with balls
 * quantity balls red, blue, green
 * show ==> pokazqvaet quantitu 4to i 4ego
 */

var balls = [
    {
        color: 'red',
        quantity: 1,
    },
    {
        color: 'blue',
        quantity: 1,
    },
    {
        color: 'green',
        quantity: 1,
    },
];

var appball = true;
while (appball) {
    var input = prompt('What to do with balls?: ');
    input = input.split(' '); 
    var action = input[0];
    var ballsQuantity = input[1];
    ballsQuantity = Number(ballsQuantity);
    color = input [2];
    
    if (action === 'stop') {
        appball = false;
    } else if (action === 'add') {
        balls.quantity += ballsQuantity
    } else if (action === 'delete') {
        balls.quantity -= ballsQuantity;
    } else if (action === 'show') {
        console.log(balls);
    }


}

