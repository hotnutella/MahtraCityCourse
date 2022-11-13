var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

for (var day of week) {
    if (day === 'Saturday' || day === 'Sunday') {
        console.log('*' + day + '*');
    } else {
        console.log(day);
    }
}     
