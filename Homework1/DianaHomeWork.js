var prompt = require('prompt-sync') ();

var fullPrice = 10.90;
var free = 0;

var Hello = prompt('Добро пожаловать на вечeринку! Входной билет для детей до 11 лет - бесплатный, старше 11 лет - 10.90 eur. Скидка при покупке 5+ билетов = 30%! Хотите ли вы купить билеты? Да/Нет ');

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
}



