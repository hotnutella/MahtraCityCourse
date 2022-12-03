var n = 1000;
var num = 0;
division = true;
while (division) {
    n = n / 2; 
    if (n < 50) {
        division = false;
    } 
    num++;

}
    console.log(n + ' and num = ' + num);
// to we samoe
/* while (n >= 50) {
    n = n / 2;
    num++;
} */