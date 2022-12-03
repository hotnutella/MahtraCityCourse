var prompt = require ("prompt-sync")();
var clients = [
    {
        name: "Arvidas",
        money: 500,
    },
    {
        name: "Diana",
        money: 600,
    }, 
    {
        name: "Andrei",
        money: 850,
    },
];
var newClient = true;
while (newClient) {
var newName = prompt ("What is your name?: ")
var newUser = {name: newName, money: 0};
    if (newName === "stop") {
        newClient = false;
        break;
    }
    if (isNaN(newName)) {
        for (var client of clients) {
            if (newUser.name === client.name) {
                console.log("You are our client already, name: " + client.name + "  Your balance is: " + client.money);
                break;
            } else if (newUser.name !== clients[0].name && newUser.name !== clients[1].name  && newUser.name !== clients[2].name ) {
                    var yourBalance = prompt ("Write your current balance here: ");
                    if (!isNaN(yourBalance)) {
                        yourBalance = Number(yourBalance);
                        newUser.money += yourBalance;
                        clients.push(newUser);
                        console.log(clients);
                        break;
                    } else {
                        console.log("Has to be numeric value")
                    }
            }
            }
    } else {
        console.log("Not a character")
    }
}

var chooseClient = true;
while (chooseClient) {
inputQuestion = prompt ("Which client are we looking for ?:");
    if (inputQuestion === "stop") { 
        chooseClient = false;   
        break;
    }
for (var c =  0; c < clients.length; c++) {
    var chosenClient = clients[c].name;
    var chosenMoney = clients[c].money;
    if (inputQuestion === chosenClient) {
        var inputTask1 = prompt ("Do you want to deposit or windraw? And how much?");
        var task = inputTask1.split (" ");
        var task1 = task[0];
        var task2 = task[1];
        if (isNaN(task1) && !isNaN(task2)) {
            if (task1 === "Deposit") {
                task2 = Number(task2)
                chosenMoney += task2;
                console.log(chosenClient + " Your new balance: " + chosenMoney);
            } else if (task1 === "Windraw") {
                task2 = Number(task2)
                chosenMoney -= task2;
                if (chosenMoney >= 0) {
                    console.log(chosenClient + " Your new balance: " + chosenMoney);
                } else {
                    console.log("Can not windraw, you don't have enough.");
                }
            }
        } else {
            console.log("Only 2 functions and balance number!")
            break;
        }
    }
    }
}

