import PromptSync from "prompt-sync";

var newAge = [];
var newClient = true;
var fullPrice = 0;

function getClients () {
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
    return clients;
}
function askForAge () {
    var prompt = PromptSync();
    while (newClient) {
        var question = prompt("What is your age? ");
        if (question === "stop") {
            newClient = false;
            continue;
        }
        newAge.push(question);
    }
}

function checkTicketPriceByAge () {
    for (var i = 0; i < newAge.length; i++) {
        var age = newAge[i];
        var CClients = getClients();
        for (var j = 0; j < CClients.length; j++) {
            var age2 = CClients[j];
            if (age >= age2.minimumage && age <= age2.maximumage) {
                fullPrice += age2.ticketprice;
            }
        }
    }
    return fullPrice;
}

export { askForAge, checkTicketPriceByAge
}
