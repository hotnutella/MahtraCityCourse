var vehicles = [
    {
        licencePlate: '666WAR',
        carsOwners: 'Arvidas',
        dept: 0,
    },
    {
        licencePlate: '200DIR',
        carsOwners: 'Diana',
        dept: 0,
    },
    {
        licencePlate: '777DAS',
        carsOwners: 'Deniss',
        dept: 0,
    },
    {
        licencePlate: '998DEN',
        carsOwners: 'Dasha',
        dept: 0,
    },
];
var speedLimit = 70;
var finePerKm = 5;

function speedCamera(licencePlate, speed) {
    var speedOverLimit = speed - speedLimit;
    if (speedOverLimit > 0) {
        var fine = finePerKm * speedOverLimit;
        var vehicle = vehicles.filter(function (car) {
            return car.licencePlate === licencePlate;
        })
        .shift();
        vehicle.dept += fine;
       
    }
}

speedCamera('777DAS', 77);
speedCamera('998DEN', 101);
speedCamera('777DAS', 70);
speedCamera('200DIR', 94);
speedCamera('777DAS', 90);
speedCamera('666WAR', 45);

console.log(vehicles);