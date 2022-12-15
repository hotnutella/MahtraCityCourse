var numbers = [31, 30, 8, 22, 3, 24];

/**
 * Find minimum number from the array
 * @param arr 
 */
function minNumber(arr) {
  var copy = [...arr];
  var myNumber = copy.pop();
  if (copy.length === 0) {
    return myNumber;
  }
  return Math.min(minNumber(copy), myNumber);
}

var min = minNumber(numbers);
console.log(min);