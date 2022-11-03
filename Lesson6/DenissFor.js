var items = ['axe', 'sword', 'pike'];
var i = 0;
while (i < items.length) {  
  console.log(items[i]);
  i++;
}


console.log('-----');

// 1. vid
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  console.log(items[i]);
}

console.log('-----');

// 2. vid
for (var item of items) {
  console.log(item);
}

console.log('-----');


// 3. vid (key-value pair)
for (var [key, value] of Object.entries(items)) {
  console.log(key, value);
}


/**
 * Esli ne znaem, skolko raz vypolnyat cikl, ispolzuem while
 * Esli est konkretnoe kolichestvo povtorenij, ispolzuem for
 */