import fs from 'fs';

var rawString = fs.readFileSync('./bobDeers.json'); // всё содержимое файла в одном стринге
var data = JSON.parse(rawString); // из содержимого файла делаем JSON объект (парсим стринг)

var deers = data.deers;
var youngestDeer;

for (var deer of deers) {
  if (youngestDeer == null) {
    youngestDeer = deer;
  } else if (youngestDeer.age > deer.age) {
    youngestDeer = deer;
  }
}

console.log(data);
console.log(data.deers[0].name);

// These deers need to retire: vasja, petja, vova 