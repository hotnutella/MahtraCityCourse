/**
 * Sums all numbers from 1 to limit (1 + 2 + 3 + ... + limit)
 * @param limit 
 */
function sum(limit) {
  if (limit === 1) {
    return 1;
  }
  var result =  sum(limit - 1) + limit;
  return result;
}

var total = sum(3);
console.log(total);