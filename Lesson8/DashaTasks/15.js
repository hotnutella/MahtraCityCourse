var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

var day = 'Thursday';
for (var weekday of week) {
    if (weekday == day) {
        console.log('*' + weekday + '*');
    }
    else {
        console.log(weekday);
    }
}