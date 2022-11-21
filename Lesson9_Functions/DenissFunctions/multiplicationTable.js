var multiply = require('./math').multiply;

function printRaw(rawNumber, size) {
  var raw = '';
  for (var j = 1; j <= size; j++) {
    raw += '  ' + multiply(rawNumber, j);
  }
  console.log(raw);
}

function printTable(size) {
  for (var i = 1; i <= size; i++) {
    printRaw(i, size);
  }
}

module.exports = { printRaw, printTable };