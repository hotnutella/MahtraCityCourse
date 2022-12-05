import PromptSync from 'prompt-sync';
var prompt = PromptSync();

function answerYes (greeting) {
    var over11 = fullPrice();
    var under11 = freeTikets();

    summa(over11, under11);
}

function answerNo (greeting) {
    console.log('Надеюсь, что вы посетите нас позже. Всего хорошего!');
}

function wrongAnswer () {
    console.log('Ответ не распознан!');
}

function freeTikets () {
    var freeTikets = prompt('Сколько в вашей группе детей до 11 лет? : ');
    freeTikets = Number(freeTikets);
    return freeTikets;
}

function fullPrice () {
    var Tikets = prompt('Сколько в вашей группе детей старше 11 лет? : ');
    Tikets = Number(Tikets);
    return Tikets;
}

function summa (fullTickets = 0, freeTikets = 0) {
    var fullPrice = 10.90;
    var free = 0;
    var summa = (fullPrice * fullTickets + free * freeTikets);

    if (freeTikets + fullTickets >= 5){
        var allTikets = summa * 0.7;
        sale(allTikets);
    } else {
        var allTikets = summa;
        end(allTikets);
    }
}

function sale (summa) {
    console.log('Поздравляю, ваша сумма со скидкой: ' + summa + ' Приходите к нам еще! ');
}

function end (summa) {
    console.log('С вас: ' + summa + ' До новых встреч! ');
}

// -------------------------------------------

var q = prompt('Добро пожаловать на вечeринку! Входной билет для детей до 11 лет - бесплатный, старше 11 лет - 10.90 eur. Скидка при покупке 5+ билетов = 30%! Хотите ли вы купить билеты? Да/Нет ');

if (q === 'Yes') {
    answerYes(q);
} else if (q === 'No') {
    answerNo(q);
} else {
    wrongAnswer(q);
}

/*

var fullPrice = 10.90;
var free = 0;


if( Hello === 'Да'){
    var freeTikets = prompt('Сколько в вашей группе детей до 11 лет? : ');
    var Tikets = prompt('Сколько в вашей группе детей старше 11 лет? : ');
    freeTikets = Number(freeTikets);
    Tikets = Number(Tikets);
    var summa = (fullPrice * Tikets + free * freeTikets);
    var sale = summa * 0.7;
    if (freeTikets+Tikets >= 5){
        console.log('Поздравляю, ваша сумма со скидкой: ' + sale + ' Приходите к нам еще! ');
    } else {
        console.log('С вас: ' + summa + ' До новых встреч! ');
    }
} else if (Hello === 'Нет'){
    console.log('Надеюсь, что вы посетите нас позже. Всего хорошего!');
} else {
    console.log('Ответ не распознан!');
}'*/