/*
var gruppa = 'DADD';
var dadd = ['Deniss', 'Arvidas', 'Diana', 'Dasha'];
var number = [121, 8587, 876];
var boolean = [true, false, true];

i = 0;
while (i <= 3) {
    console.log(dadd[i]);
    i++;
}
*/


var end = 10;
var zna4enije1 = 1;
var zna4enije2 = 1;
var resultRow = '';
while (zna4enije1 <= end) {
    while (zna4enije2 <= end) {
        resultRow += zna4enije1 * zna4enije2;
        zna4enije2++;
    }
    console.log(resultRow);  
    zna4enije1++;
}



