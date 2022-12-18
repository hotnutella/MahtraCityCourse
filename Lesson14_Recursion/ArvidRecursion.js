

function febanachiNumbers (number) {
    if (number === 1 ) {
        return 1;
    }
    return febanachiNumbers(number - 1) + number;
}

var result = febanachiNumbers(4);
console.log(result);