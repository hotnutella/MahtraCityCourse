var week = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];
for (day of week) {
    if (day === "Sunday" || day === "Saturday") {
        var d = "*" + day + "*"
        console.log(d)
    } else {
        console.log(day)
    }
}
