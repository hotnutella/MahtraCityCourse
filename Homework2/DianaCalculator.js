var prompt = require('prompt-sync')();

console.log('Вводи цифры (1,2,3, ...) и знаки (+,-,*,/) по очереди начиная с новой строчки. Когда захочешь получить ответ, введи знак "=" ! ')

var example = true;
var answer = prompt();
answer = Number(answer);

while (example) {
    var sign = prompt();
    if (sign === "=") {
        example = false;
        break;
    }

    var number = prompt();
    number = Number(number);

    if (sign === '+') {
        answer += number;
    } else if (sign === '-') {
        answer -= number;
    } else if (sign === '*') {
        answer *= number;
    } else if (sign === "/") {
        answer /= number;
    } else {
        console.log('?');
    }
};
console.log('Ответ: ' + answer);
