/**
 * Check if the word is a palindrome
 * @param word 
 * @returns boolean
 */
function isPalindrome(word) {
  var reverseWord = word.split('').reverse().join('');
  return word === reverseWord;
}

/**
 * Check if the word is a palindrome
 * @param word 
 * @returns boolean
 */
function isPalindromeRecursive(word) {
  if (word === '' || !word) {
    return true;
  }
  if (word.length === 1) {
    return true;
  }

  var arr = word.split('');
  var first = arr.shift();
  var last = arr.pop();
  var equal = first === last; // boolean
  var remainingWord = arr.join('');

  return isPalindromeRecursive(remainingWord) && equal;
}

/**
 * Check if the word is a palindrome
 * @param word 
 * @returns boolean
 */
function isPalindromeRecursiveStringParsing(word) {
  if (word === '' || !word) {
    return true;
  }
  if (word.length === 1) {
    return true;
  }

  var length = word.length;
  var first = word[0];
  var last = word[length - 1];
  var remainingWord = word.substring(1, length - 1);
  
  // can also be done with splice/slice

  var equal = first === last;

  return isPalindromeRecursiveStringParsing(remainingWord) && equal;
}

console.log(isPalindrome('alula'));
console.log(isPalindromeRecursive('alula'));
console.log(isPalindromeRecursiveStringParsing('alula'));