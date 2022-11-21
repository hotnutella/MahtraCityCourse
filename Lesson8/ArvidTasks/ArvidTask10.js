var array1 = [2, 4, 6, -3, -6, -10, 0];
var sum = 0;

for (i = 0; i < array1.length; i++) {
    if (array1[i] >= 0) {
        sum += array1[i];
    }
}
console.log(sum);