var prompt = require("prompt-sync")();

// children party
var childrenPrice = 0;
var ticketPrice = 10.50;

var childrenQuantity = prompt("How many tickets for 0-11?: ");
var olderchildrenQuantity = prompt("How many tickets for 12+?: ");

var answer = "";
var ticketPlural = "ticket"
var pluralSuffix = "s";
var toBePlural = "is";
var cost = childrenPrice * childrenQuantity + ticketPrice * olderchildrenQuantity;
cost = cost.toFixed(2);
var peopleQuantity = childrenQuantity + olderchildrenQuantity;

if (peopleQuantity >= 5) {
    cost = cost - (cost * 0.30);
}
if (peopleQuantity != 1) {
    toBePlural = "are";
    ticketPlural += pluralSuffix;
}

answer = "Here " + toBePlural + " your " + ticketPlural + "." + " It will be " + cost + " eur";

console.log(answer);