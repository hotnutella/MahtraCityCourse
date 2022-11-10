var prompt = require('prompt-sync')();

var words = ['car', 'shop', 'street', 'balls'];

var showWords = true;
while (showWords) {
    var input = prompt('');
    if (input === 'stop') {
        showWords = false;
        continue;
    }
    var command = input.split(' ');
    var task = command[0];
    if (task === 'add') {
        var newWord = command[1];
        words.push(newWord);
    } else if (task === 'remove') {
        
    }
    var randomIndex = Math.floor(Math.random() * words.length);
    console.log(words[randomIndex]);
}