var deers = [
    {
        id: 1,
        name: "Dima",
        nose: "black",
        age: 45,
    },
    {
        id: 2,
        name: "Trash",
        nose: "yellow",
        age: 132,
    },
    {
        id: 3,
        name: "Rudolf",
        nose: "red",
        age: 245,
    },
    {
        id: 4,
        name: "Bob",
        nose: "green",
        age: 15,
    },
    {
        id: 5,
        name: "Aleksei",
        nose: "blue",
        age: 380,
    },
];
var first = {};
function findYoungestDeer() {
    var youngestDeer = deers.reduce(function (youngest, currentDeer) {
        if (youngest.age == null) {
            return currentDeer;
        }
        if (youngest.age > currentDeer.age) {
            return currentDeer;
        }
        return youngest;
    }, first);
    return youngestDeer;
}


function findOldDeers() {
    var oldDeers = deers.filter(function (oldDeer) {
        return oldDeer.age > 100;
    });
    return oldDeers;
}

function findRudolfId() {
    var chosenDeerId = 0;
    for (var deer of deers) {
        if (deer.nose === "red") {
            chosenDeerId = deer.id;
        }
    }
    return chosenDeerId;
}

var result = findRudolfId();
var result2 = deers.find(function (deer) {
    return deer.id === result;
});

var oldAge = findOldDeers().map(function (old) {
    return old.name;
})

var theYoungestDeer = findYoungestDeer();


console.log(theYoungestDeer);
console.log("These Deers are too old for the job: " + oldAge);
console.log(result);
console.log(result2);

