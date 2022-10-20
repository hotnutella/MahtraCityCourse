var pivo = 10;
var vodka = 5.645; // 15.645
var privetstvie = "tut my napechataem peremennye";
var skolko = "Tut 5 butylok";
var treugolnik = 'triangle';

var summa = pivo + Number(vodka);
var decimals = 3;
var rounder = 10 ** decimals;
var roundedResult = Math.round(summa * rounder) / rounder // 1564.5 -> 15645 -> 15.645
//console.log(roundedResult);

var radius = 60;
var pi = Math.PI;
var S = pi * radius ** 2;
var circleText = "Circle area: ";

var roundedS = Math.round(S * rounder) / rounder;

//console.log(circleText + roundedS);

//NaN = Not a Number

// + - * / **
// Ploshad treugolnika: 59
// Ploshad kruga: 545
// Math.PI

// BOOLEANS

var age = 18;
var isOfAge = false; // true | false
isOfAge = age >= 18;
var nichego;

/*
console.log(treugolnik, typeof treugolnik);
console.log(vodka, typeof vodka);
console.log(isOfAge, typeof isOfAge);
console.log(nichego, typeof nichego);
*/

//console.log("Is of age: " + isOfAge);

if (isOfAge) {
  console.log('Welcome to the club');
} else {
  console.log('Go home');
}

var hp = 0;
var dead = hp === 0;

/**
 * 1. =     -> prisvoenie znachenija
 * 2. ==    -> sravnenie znachenija
 * 3. ===   -> sravnenie znachenija i tipa
 * 
 * && -> and
 * || -> or
 */

if (dead && isOfAge) {
  console.log('Game over');
}