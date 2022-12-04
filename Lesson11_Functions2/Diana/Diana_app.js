var cars = [
        {
            name: '123ABC',
            peopleName: 'Arvid',
            trahv: 0,
        }, 
        {
            name: '539ERF',
            peopleName: 'Diana',
            trahv: 0,
        }, 
        {
            name: '402LED',
            peopleName: 'Dasha',
            trahv: 0,
        }, 
        {
            name: '666DEV',
            peopleName: 'Denis',
            trahv: 0,
        }, 
    ]

var speedLimit = 50;

function speedCamera (speed, name) {
    if (speed > speedLimit) {
        var personTrahv = cars.filter(function (person) {
        return person.name === name;
    })
    .shift();
    personTrahv.trahv += 150;
    }
}

speedCamera (139, '666DEV');
console.log(cars);

  