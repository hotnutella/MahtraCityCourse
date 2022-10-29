var prompt = require('prompt-sync')();

console.log('Вводи цифры (1,2,3, ...) и знаки (+,-,*,/) по очереди начиная с новой строчки. Когда захочешь получить ответ, введи знак "=" ! ')
var example = true;

var answer = 0;

while (example) {
    var number = prompt();
    number = Number(number);
    var sign = prompt();
    if(sign === '+') {
        answer += number;
    } else if (sign === '-') {
        answer -= number;
    } else if (sign === '*') {
        answer *= number;
    } else if (sign === "/") {
        answer /= number;
    } else if (sign === "=") {
        example = false;
    } else {
        console.log('?')
    }
}

console.log('Ответ: ' + answer);
