var oleni = [
    {
        id: 0,
        name: 'Bob',
        nose: 'green',
        age: 20
    },
    {
        id: 1,
        name: 'Rudolf',
        nose: 'red',
        age: 44
    },
    {
        id: 2,
        name: 'Roland',
        nose: 'yellow',
        age: 31
    },
    {
        id: 3,
        name: 'Rodulf',
        nose: 'blue',
        age: 5
    },
    {
        id: 4,
        name: 'Rofruf',
        nose: 'purple',
        age: 17
    }
];

function oleniZa20 () {
    var older20 = oleni.filter(function(olen) {
        return olen.age >= 20;   
    });
    return older20;
}

function addToList (older20) {
    var massiv = [];
    for (var olen of older20) {
        massiv.push (olen.name);
    }
    return massiv;
}

var jjfgj = oleniZa20();

console.log('Этих оленей пора отправить на пенсию: ' + addToList(jjfgj));



/*function search1 (nose) {
    for (var olen of oleni) {
        if (olen.nose === nose) {
        return olen.id;
        }   
    }
};*/

/*var search2 = oleni.find(function(olen) {
    if (olen.id === search1('red')) {
        return olen.name;
    }
});*/



//console.log(search2);
