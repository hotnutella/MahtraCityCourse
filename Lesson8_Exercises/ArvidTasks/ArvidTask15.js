var week = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];
var day = week[4];
for (var weekday of week) {
    var d = "/" + day + "/";
    if (weekday === day) {
        console.log(d)
    } else {
        console.log(weekday)
    }
}
