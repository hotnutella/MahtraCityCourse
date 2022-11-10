var kateta = 12;
var kateb = 14;
var r = 15;
var plowad =(kateta * kateb)/ 2;
var plowad2 =Math.PI * r**2;
var decima = 2;
var rounded = 10 ** decima;
var plowad22 = Math.round(plowad2 * rounded) / rounded;
//console.log("Plowad treugolnika: " + plowad);
//console.log("Plowad kruga: " + plowad22);

var age = 19;
var isofage = false;
isofage = age>= 18;
//console.log(typeof plowad);

var hp = 0;
var dead = hp == 0;

if(isofage){
console.log("welcome")
}else{
    console.log("go home")
};
// && and
// || or

if(dead && isofage){
console.log("game over")
};