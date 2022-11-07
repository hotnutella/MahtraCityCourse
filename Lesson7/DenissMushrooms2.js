var prompt = require('prompt-sync')();

var peoples = [
    {
        name: 'Arvidas',
        mushrooms: [],
        totalCartPrice: 0,
        totalCartWeight: 0
    },
    {
        name: 'Diana',
        mushrooms: [],
        totalCartPrice: 0,
        totalCartWeight: 0
    },
    {
        name: 'Dasha',
        mushrooms: [],
        totalCartPrice: 0,
        totalCartWeight: 0
    },
    {
        name: 'Deniss',
        mushrooms: [],
        totalCartPrice: 0,
        totalCartWeight: 0
    },
];

var mushroomCatalogue = [
  {
    id: 0,
    name: 'boletus',
    price: 6,
    weight: 65
  },
  {
    id: 1,
    name: 'saffron',
    price: 5,
    weight: 16
  },
  {
    id: 2,
    name: 'chanterelle',
    price: 2,
    weight: 190
  },
  {
    id: 3,
    name: 'cep',
    price: 4,
    weight: 60
  },
  {
    id: 4,
    name: 'russula',
    price: 8,
    weight: 100
  },
  {
    id: 5,
    name: 'champignon',
    price: 1,
    weight: 150
  },
  {
    id: 6,
    name: 'amanita',
    price: 10,
    weight: 120
  },
];

var askPeople = true;
while (askPeople) {
  var input = prompt('What people are you? What mushrooms you got and how many?: ');
  if (!input || input === 'stop') {
    askPeople = false;
    break;
  }
  input = input.split(' ');
  var onePeople = input[0];
  var mushroomType = input[1];
  var mushroomQuantity = Number(input[2]);

  for (var m of mushroomCatalogue) {
    if (m.name === mushroomType) {
      var mushroomObject = { mushroomId: m.id, quantity: mushroomQuantity };
      for (var p of peoples) {
        if (p.name === onePeople) {
          p.mushrooms.push(mushroomObject);
        }
      }
    }
  }
}

askPeople = true;
while (askPeople) {
  var input = prompt('Mushrooms of which people shall we see?: ');
  if (!input || input === 'stop') {
    askPeople = false;
    continue;
  }

  for (var p of peoples) {
    if (p.name === input) {
      for (var m of p.mushrooms) {
        console.log('RESULT', mushroomCatalogue[m.mushroomId].name);
      }
    }
  }
}