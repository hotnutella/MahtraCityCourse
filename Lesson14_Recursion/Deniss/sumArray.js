var numbers = [4, 6, 6, 1]; // 17

/**
 * Sums the contents of the array
 * @param arr 
 */
function sumArray(arr) {
  var copy = [...arr]; // copy array
  var myNumber = copy.pop();
  if (copy.length === 0) {
    return myNumber;
  }
  return sumArray(copy) + myNumber;
}

var total = sumArray(numbers);
console.log(total);