/*************/
/* Problem 4 */
/*************/

// A regular palindrome check will suffice since the longest string is only
// 6 characters (the product of two 3-digit numbers does not exceed 998001).
function palindromeCheck(input) {
  const string = String(input);

  return string === string.split('').reverse().join('');
}

// There are only 900 x 900 / 2 = 405000 possible combinations, going through
// them all doesn't seem unreasonable

function findLargestPalindromeInRange(m, n) {
  const min = Math.min(m, n);
  const max = Math.max(m, n);
  const acc = [];

  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      // Skip combinations that have already been examined
      if (i < j) {
        continue;
      }
      else {
        const product = i * j;

        if (palindromeCheck(product)) {
          acc.push(product);
        }
      }
    }
  }

  return acc.sort((a, b) => b - a)[0];
}

const init = process.hrtime();
console.log(`Solution: ${findLargestPalindromeInRange(100, 999)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { palindromeCheck, findLargestPalindromeInRange };
