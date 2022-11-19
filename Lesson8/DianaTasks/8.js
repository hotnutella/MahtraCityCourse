var n = 1000;

var num = 0;

var numberOver50 = true;
while (numberOver50) {
    n = n/2;
    num = num + 1;
    if (n < 50) {
        numberOver50 = false;
        break;
    }
}

console.log('число: ' + n);
console.log('колличество итераций: ' + num);