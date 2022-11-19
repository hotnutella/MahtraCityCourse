var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье', ];

for (var day of week) {
    
    if (day === 'суббота' || day === 'воскресенье') {
        console.log( '*' + day + '*' );
    } else {
        console.log(day);
    }
};