
var balls = [
    'red',
    'green',
    'blue',
    'green',
    'blue',
    'green',
];

function howMany (color) {
    return balls.filter(function (ball) {
        return ball === color;
    })
    .length

}

var quantity = howMany('blue');
console.log(quantity);
