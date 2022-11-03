var prompt = require ("prompt-sync")();

var newAge = [];
var fullPrice = 0;

var clients = [
    {
        minimumage: 3,
        maximumage: 6,
        ticketprice: 2,
    },
    {
        minimumage: 7,
        maximumage: 11,
        ticketprice: 8,
    },
    {
        minimumage: 12,
        maximumage: 15,
        ticketprice: 14,
    },
];
var newClient = true;
while (newClient) {
    var question = prompt("What is your age? ");
    if (question === "stop") {
        newClient = false;
        continue;
    }
    newAge.push(question);
}
for (var i = 0; i < newAge.length; i++) {
    var age = newAge[i];
    for (var j = 0; j < clients.length; j++) {
        var age2 = clients[j];
        if (age >= age2.minimumage && age <= age2.maximumage) {
            fullPrice += age2.ticketprice;
        }
    }
}
console.log ("You have to pay: " + fullPrice);