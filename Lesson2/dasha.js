var a = 12;
var b = 5;
var S = (a * b) / 2;
var treug = "Triangle area = ";
console.log(treug + S);

var r = 8;
var pi = Math.PI;
var Sc = pi * r**2;
var Sctext = "Circle area = ";
var circlerounded = Math.round(Sc);
console.log(Sctext + circlerounded);

/* 
Math.PI
** -->STEPENi
=  --> prisvojenie zna4enija
==  --> sravnenije znachenija
===  --> sravnenije zna4 i tipa
&&  --> and
2 vertikalnije poloski  --> or
console.log(age, typeof age);
*/

//BOOLEANS
var age = 20; 
var isOfAge = false; // true or false
isOfAge = age >= 18;
console.log("Is of age: " + isOfAge);
//if
if (isOfAge) {
    console.log("Welcome to the club");
} else {
    console.log("Go home");
}

var hp = 0;
var dead = hp === 0;
if (dead && isOfAge) {
    console.log("Game over");
}



