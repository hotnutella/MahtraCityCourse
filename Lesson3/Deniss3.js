var dadd = ['Deniss', 'Arvid', 'Diana', 'Dasha'];
var numbers = [234, 45, 23, 76, 3];
var boxers = false;
var nashi_booleani = [true, true, true, false, true, false, boxers];

var i = 0;
while (i <= 3) {
  console.log(dadd[i]);
  i++;
}


var znachenie1 = 1;
var znachenie2 = 1;
var resultRow = '';
var end = 10;
while (znachenie1 <= end) {
  while (znachenie2 <= end) {
    resultRow += znachenie1 * znachenie2;
    znachenie2++;
  }
  console.log(resultRow);
  znachenie1++;
}