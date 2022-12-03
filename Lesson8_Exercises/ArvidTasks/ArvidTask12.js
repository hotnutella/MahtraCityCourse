var massivs = [10, 20, 30, 50, 235, 3000];
var special = ["1", "2", "5"]

for (i = 0; i < massivs.length; i++) {
    var myString = String(massivs[i]);
    var probel = myString.split("")
    var first = probel[0];
    if (special.includes(first)) {
        console.log(myString);
    }
}
