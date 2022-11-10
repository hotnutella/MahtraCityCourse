var numbers = [100, 200, 4567];
var validFirstCharacters = ['2'];

for (var number of numbers) {
  var myString = String(number);
  var firstCharacter = myString[0];
  if (validFirstCharacters.includes(firstCharacter)) {
    console.log(myString);
  }    
}