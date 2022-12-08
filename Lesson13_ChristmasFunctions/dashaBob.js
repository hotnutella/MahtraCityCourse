
var deers = [
    {
        id: 1,
        deerName: 'Arv',
        nose: 'black',
        age: 30,
    },
    {
        id: 2,
        deerName: 'Dia',
        nose: 'rose',
        age: 23,
    },
    {
        id: 3,
        deerName: 'Dar',
        nose: 'yellow',
        age: 24,
    },
    {
        id: 4,
        deerName: 'Rud',
        nose: 'white',
        age: 184,
    },
    {
        id: 5,
        deerName: 'Rudolph',
        nose: 'red',
        age: 115,
    },
    {
        id: 6,
        deerName: 'Den',
        nose: 'orange',
        age: 31,
    },
    {
        id: 7,
        deerName: 'Bob',
        nose: 'green',
        age: 27,
    },
];


function idSearch () {
    for (var deer of deers) {
        var deerNose = deer.nose;
        if (deerNose === 'red') {
            var deerId = deer.id;
        }
    }
    return deerId;
}
function rudolphSearch (deerId) {
    var theDeer = deers.find(function(deer) {
        return deer.id === deerId;
    })
    return theDeer;
}
var deerId = idSearch ();
var theRudolph = rudolphSearch (deerId);

console.log(theRudolph);

console.log('---------------------------------------')

function getOldDeerNames () {
    var deerNames = deers.filter(function(deer) {
        return deer.age >= 30;
    })
    .map(function(deer) {
        return deer.deerName;
    })
    return deerNames;
}

var oldDeers = getOldDeerNames() + ' are too old!';
console.log(oldDeers);

