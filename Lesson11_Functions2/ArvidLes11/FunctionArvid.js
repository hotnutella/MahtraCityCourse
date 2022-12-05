var difcars = [
    {
        carNumber: "567FCG",
        carOwner: "Andrei",
        fine: 0, 
    },
    {
        carNumber: "124JKL",
        carOwner: "Koljan",
        fine: 0, 
    },
    {
        carNumber: "789POP",
        carOwner: "Deniss",
        fine: 0, 
    },
    {
        carNumber: "756GOP",
        carOwner: "Frank",
        fine: 0, 
    },
];
var speedLimit = 50;
var finePerKm = 5;
var finePerKmAfter10 = 10;
var finePerKmAfter20 = 20;


function getFined (speed, plateNumber) {
    var speedOverTheLimit = speed - speedLimit;
    if (speedOverTheLimit > 0) {
        var fines = speedOverTheLimit * finePerKm;

        difcars.filter(function(car) {
           return car.carNumber === plateNumber;
        })
        .map(function (debt) {
            debt.fine += fines;
            return debt.fine;
        });
    }
}




getFined(56, "756GOP");
getFined(98, "124JKL");
getFined(125, "789POP");
getFined(49, "567FCG");
console.log(difcars);
