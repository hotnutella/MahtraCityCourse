var prompt = require ("prompt-sync")();
var clients = [
    {
        id: 1,
        name: "Arvidas",
        money: 500,
    },
    {
        id: 2,
        name: "Diana",
        money: 600,
    }, 
    {
        id: 3,
        name: "Andrei",
        money: 850,
    },
];
var newUserId;
console.log(newUserId);
var newClient = true;
while (newClient) {
    var newName = prompt ("What is your name?: ")
    var newUser = {id: newUserId, name: newName, money: 0};
    if (newName === "stop") {
        newClient = false;
        break;
    }
    if (isNaN(newName)) {
        var q = clients.filter (function (client) {
            return newUser.name === client.name;
        })
        .map(function(client) {
            return client.money;
        })
        console.log("Already a client, your balance: " + q);


        
        /*for (var client of clients) {s
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
            }*/
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
for (var client of clients) {
    if (inputQuestion === client.name) {
        var inputTask1 = prompt ("Do you want to deposit or windraw or transfer And how much?");
        var task = inputTask1.split (" ");
        var task1 = task[0];
        var task2 = task[1];
        if (isNaN(task1) && !isNaN(task2)) {
            if (task1 === "Deposit") {
                task2 = Number(task2)
                client.money += task2;
                console.log(client.name + " Your new balance: " + client.money);
            } else if (task1 === "Windraw") {
                task2 = Number(task2)
                client.money -= task2;
                if (client.money >= 0) {
                    console.log(client.name + " Your new balance: " + client.money);
                } else {
                    console.log("Can not windraw, you don't have enough.");
                }
            } else if (task1 === "Transfer") {
                var secondUser = prompt ("Who to transfer money for: ?");
                task2 = Number(task2);
                client.money -= task2;
                for (client of clients) {
                    if (secondUser === client.name) {
                        console.log("here");
                        client.money +=task2;
                        console.log(client.name + " Your new balance: " + client.money);
                    }
                }
            console.log (clients);
                
            }
        } else {
            console.log("Only 2 functions and balance number!")
            break;
        }
    }
    }
}

