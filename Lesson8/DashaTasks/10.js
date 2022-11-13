var numbers = [-125, 85, 5, -90, 10];
var zero = 0;
for (var number of numbers) {
    if (number > 0) {
        zero += number;
    }
}
console.log(zero);