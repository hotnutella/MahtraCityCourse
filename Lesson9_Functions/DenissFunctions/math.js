function plus(a = 0, b = 0) { // function declaration  
  var c = a + b;
  console.log(a, b, c);
}

function multiply(a = 0, b = 0) {
  var c = a * b;
  return c;
}

module.exports = { plus, multiply };