/*************/
/* Problem 2 */
/*************/

function sumOfEvenFibonacciTerms(limit, i = 0, j = 1, sum = 0) {
  const nextTerm = i + j;

  // Check if the current term is even, if so, add it to sum
  if (j % 2 === 0) {
    sum += j;
  }

  // Terminate recursion and return sum if the current term is > limit
  if (nextTerm > limit) {
    return sum;
  }

  return sumOfEvenFibonacciTerms(limit, j, nextTerm, sum);
}

console.log(`Solution: ${sumOfEvenFibonacciTerms(4000000)}.`)

module.exports = { sumOfEvenFibonacciTerms };
