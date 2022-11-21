var numbers = [10, 20, 30, 50, 235, 3000];

for (var number of numbers) {
    var numberString = String(number);
    var numberArray = numberString.split(''); //array = массив
    var firstNumber = numberArray[0];
    if (firstNumber === '1' || firstNumber === '2' || firstNumber === '5') {
        console.log(number);
    }
}