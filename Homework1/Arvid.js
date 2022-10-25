var prompt = require("prompt-sync")();
var price1 = 0;
var price2 = 10.90;
var forma = "";
var privetstvie = "Welcome to our party!If You buy more than 5 tickets you'll get a discount";
console.log(privetstvie);
var quantity1 = prompt("How many tickets under age 11? ");
var quantity2 = prompt("How many tickets over the age of 12? ");
var A = price1 * Number(quantity1);
var B = price2 * Number(quantity2);
var totalquantity = Number(quantity1) + Number(quantity2);
var priceresult = A + B;
var priceresult2 = 0;
if (totalquantity > 1) {
    forma = "are";
}else if  (totalquantity == 1){
    forma = "is";
}
if (totalquantity >= 5) {
    priceresult2 = priceresult * 0.7;
    console.log("Here " + forma + " your tickets. It will cost: " + priceresult2);

} else if (totalquantity == 0) {
    console.log("Have a nice day");
}
else {
console.log("Here " + forma + " your tickets. It will cost: " + priceresult);
};