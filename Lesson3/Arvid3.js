var dadd = ["Denis", "Arvid", "Diana", "Dasha"];
var numbers = [3232, 32323, 3, 33, 44];
var booleanq = [true, true, false, true, false];
var i = 0 ;
while (i <= 3) {
    console.log(dadd[i]);
    i++;
}


var zna4enie1 = 1;
var zna4enie2 = 1;
var end = 10;
var resultrow = "";
while (zna4enie1 <= end) {
    while (zna4enie2 <= end){
        resultrow += zna4enie1 * zna4enie2
        zna4enie2++;
    }
    console.log(resultrow);
    zna4enie1++;
}