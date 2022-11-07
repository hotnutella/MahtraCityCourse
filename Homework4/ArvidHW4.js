var prompt = require ("prompt-sync")();
//var sellPrice = 0;
/*var prices = [
    {
        name: "Podosinovik",
        price: 3,
    },
    {
        name: "podberezovik",
        price: 3.5,
    },
    {
        name: "belqi",
        price: 6,
    }
];*/
//var chosen = [];
var people = [
    {
        name: "Deniss",
        mushrooms: [],
    },
    {
        name: "Diana",
        mushrooms: [],
    },
    {
        name: "Dasha",
        mushrooms: [],
    },
    {
        name: "Arvid",
        mushrooms: [],
    },
]
var newName = true;
while (newName) {
    var name = prompt("Which name do you choose? ")
    if (name === "stop") {
       newName = false;
       continue;
    }
    
    

var newMushroom = true;
while (newMushroom) {
    var mushroom = prompt("Which mushroom do you choose? ")
    mushroom = String(mushroom);
    if (mushroom === "stop") {
        newMushroom = false;
        continue;
    } 
    /*for (k = 0; k < prices.length; k++) {
        var checkPrice = prices[k].name;
        if (mushroom === checkPrice) {
            sellPrice += prices[k].price;
        }
    }*/
        for (j = 0; j < people.length; j++) {
            var currentName = people[j].name;
            if (name === currentName) {
                people[j].mushrooms.push(mushroom);
            }
        }
    }
}
var listOfMushrooms = true;
while (listOfMushrooms) {
    var listName = prompt("Which persons mushrooms do you want to see? ")
    if (listName === "stop") {
        listOfMushrooms = false;
        continue;
    }
    for (i = 0; i < people.length; i++) {
        var checkName = people[i].name;
        if (checkName === listName) {
            console.log(people[i].name + ": " + people[i].mushrooms);
        }
    }
}
