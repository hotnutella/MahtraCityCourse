var fruits = [
  'orange', 'pineapple', 'pear'
];

console.log(fruits);
// push - pop

// Add to the end
fruits.push('grapes');

console.log(fruits);

// Take from the end
var grapes = fruits.pop();
console.log(grapes);
console.log(fruits);

// Add to the beginning
fruits.unshift('banana');
console.log(fruits);

// Take from the beginning
var banana = fruits.shift();
console.log(banana);
console.log(fruits);

// Keeps the "fruits" array
var pineappleCopy = fruits.slice(1, 2);
console.log(pineappleCopy);
console.log(fruits);

// Deletes element from "fruits"
var pineappleCut = fruits.splice(1, 1);
console.log(pineappleCut);
console.log(fruits);

// Add to the middle (index 1)
fruits.splice(1, 0, 'Mango');
console.log(fruits);