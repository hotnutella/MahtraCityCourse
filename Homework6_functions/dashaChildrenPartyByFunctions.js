import PromptSync from "prompt-sync";
var prompt = PromptSync();

var newClient = true;
var youngerThan13 = 0;
var olderThan12 = 0;

function stopProgram () {
    newClient = false;
}
function ageCheck (input) {
    if (input > 12) {
        olderThan12++;
    } else {
        youngerThan13++;
    }
}
function inputCheck (input) {
    if (input == 'stop') {
        stopProgram();
    } else {
        ageCheck(input)
    }
}
function calculatePrice () {
    var priceUnder13 = 0;
    var priceOver12 = 10;
    var totalPrice = youngerThan13 * priceUnder13 + olderThan12 * priceOver12;
    var result = 'It will be ' + totalPrice + ', please!';
    return result;
}

var result;
while (newClient) {
    var age = prompt('How old are you?: ');
    inputCheck(age);
    result = calculatePrice();
}
console.log(result)