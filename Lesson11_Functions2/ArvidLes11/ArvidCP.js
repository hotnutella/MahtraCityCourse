
import { checkTicketPriceByAge, askForAge } from "./CP2.js";



askForAge();
var price = checkTicketPriceByAge();
console.log ("You have to pay: " + price);