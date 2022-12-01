import vehicles from './vehicles.js';

var speedLimit = 50;
var finePerKm = 5;
var finePerKmAfter10 = 10;
var finePerKmAfter20 = 20;

function speedCamera(licencePlate, speed) {
  var speedOverLimit = speed - speedLimit;
  if (speedOverLimit > 0) {
    var fine = finePerKm * speedOverLimit;
    var vehicle = vehicles.filter(function (car) {
      return car.licencePlate === licencePlate;
    })
    .shift();
    vehicle.debt += fine;
  }
}

function checkDebtByName(name) {
  return {};
}

speedCamera('777BAB', 93);
speedCamera('CX28', 60);
console.log(vehicles);