var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
var day = 4;

for (var i = 0; i < weekdays.length; i++) {
    var weekday = weekdays[i];
    if (i == day) {
        console.log('*' + weekday + '*');
    }
    else {
        console.log(weekday);
    }
}