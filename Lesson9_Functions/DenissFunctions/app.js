var prompt = require('prompt-sync')();
var plus = require('./math').plus;
var printTable = require('./multiplicationTable').printTable;

for (var i = 0; i < 3; i++) {
  plus(6, i); // function call
}

console.log('-----------------');

var tableSize = prompt('Table size: ');
printTable(Number(tableSize));