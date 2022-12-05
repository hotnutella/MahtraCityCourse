var balls = [
  'red',
  'green',
  'blue',
  'green',
  'green',
  'red',
  'green',
  'green',
  'blue',
  'blue',
  'blue',
  'red',
  'blue',
  'blue',
  'red',
  'red',
  'red',
  'red',
];

function howMany(color) {
  var colorBalls = balls.filter(function(ball) {
    return ball === color;
  });
  return colorBalls.length;
  /*
  var count = 0;
  for (var ball of balls) {
    if (ball === color) {
      count++;
    }
  }
  return count;
  */
}

var quantity = howMany('green');
console.log(quantity);