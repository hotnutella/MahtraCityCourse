var prompt = require('prompt-sync')();

var words = ['car', 'shop', 'street', 'balls', 'stop'];
var usedWords = [];

var ourWords = words.join('|');
console.log('Our words today: ' + ourWords);

var showWords = true;
while (showWords) {
  if (words.length === usedWords.length) {
    console.log('You have used up all words!');
    showWords = false;
    break;
  }


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
  var word = words[randomIndex];

  if (!usedWords.includes(word)) {
    console.log(word);
    usedWords.push(word);
  }
}