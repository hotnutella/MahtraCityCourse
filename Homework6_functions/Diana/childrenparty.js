import PromptSync from 'prompt-sync';
var prompt = PromptSync();

console.log(greeting);

function greeting (){
   var Hello = prompt('Добро пожаловать на вечeринку! Входной билет для детей до 11 лет - бесплатный, старше 11 лет - 10.90 eur. Скидка при покупке 5+ билетов = 30%! Хотите ли вы купить билеты? Да/Нет ');
   if (Hello === 'Да') {
    answerYes(Hello);
   } else if (Hello === 'Нет') {
    answerNo(Hello);
   } else {
    wrongAnswer(Hello);
   }
   return Hello;
} 

function answerYes (greeting){
    freeTikets ()
}

function answerNo (greeting){
    console.log('Надеюсь, что вы посетите нас позже. Всего хорошего!');
}

function wrongAnswer (){
    console.log('Ответ не распознан!');
}

function freeTikets (){
    var freeTikets = prompt('Сколько в вашей группе детей до 11 лет? : ');
    freeTikets = Number(freeTikets);
    return freeTikets;
}

function fullPrice (){
    var Tikets = prompt('Сколько в вашей группе детей старше 11 лет? : ');
    Tikets = Number(Tikets);
    return Tikets;
}

function summa (){
    var fullPrice = 10.90;
    var free = 0;
    var summa = (fullPrice * Tikets + free * freeTikets);

    if (freeTikets+Tikets >= 5){
        var allTikets = summa * 0.7;
    } else {
        var allTikets = summa;
    }
    return allTikets;
}

function sale (summa){
    console.log('Поздравляю, ваша сумма со скидкой: ' + allTikets + ' Приходите к нам еще! ');
}

function end (summa){
    console.log('С вас: ' + summa + ' До новых встреч! ');
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
}