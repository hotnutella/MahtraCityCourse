var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
var weekendDays = ['Saturday', 'Sunday'];

for (var weekday of weekdays) {
    if (weekendDays.includes(weekday)) {
        console.log('*' + weekday + '*');
    } else {
        console.log(weekday);
    }
}     
console.log(' ');
//or 
var weekendDays1 = [5, 6];
for (var i = 0; i < weekdays.length; i++) {
    var weekday = weekdays[i];
    if (weekendDays1.includes(i)) {
        console.log('/' + weekday + '/');
    } else {
        console.log(weekday);
    }
}
