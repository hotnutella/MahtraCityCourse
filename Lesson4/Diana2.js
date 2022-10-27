var prompt = require('prompt-sync')();

var money = 100;
var vodka = 10;
var tequila = 8;
var beer = 4;
var whisky = 14;

var client = true;
var answer = '';
answer = Number(answer);
var noMoney = 'You have no money! Go find a job!';

 while (client) {
    

    var answer = prompt('You have ' + money + ', what do you want? ');
    if (answer == 'vodka') {
        if (money < vodka){
          console.log(noMoney);
          client = false;
        } else {
          money -= vodka;  
        } 
    } else if (answer == 'tequila') {
        if (money < tequila){
            console.log(noMoney);
            client = false;
          } else {
            money -= tequila;  
          } 
    } else if (answer == 'beer') {
        if (money < beer){
            console.log(noMoney);
            client = false;
          } else {
            money -= beer;  
          } 
    } else if (answer == 'whisky') {
        if (money < whisky){
            console.log(noMoney);
            client = false;
          } else {
            money -= whisky;  
          } 
    } else if (answer == 'stop') {
       client = false;
       console.log('Ok, goodbye, you still have ' + money + ' money!');
}
 }
