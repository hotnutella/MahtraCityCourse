var prompt = require('prompt-sync')();

var input = prompt('Input your sentence: ');
input = input.split(' ');

for (var i = 0; i < input.length; i++) {
    var columnOfWords = input[i];
    console.log(columnOfWords);
}

console.log('------------------')

for (var words of input) {
    console.log(words)
}