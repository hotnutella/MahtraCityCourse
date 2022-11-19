var items = [10, 20, 30, 550, 240, 3000, 9030, 5000 ];

var elements = ['1', '2', '5' ]
for (var number of items) {
    var numberString = String(number);
    var numberArray = numberString.split('');
    var first = numberArray[0];
    if (elements.includes(first)) {
        console.log(numberString);
    }
}