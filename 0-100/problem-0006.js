/*************/
/* Problem 6 */
/*************/

function sumOfSquares(min, max) {
  let sum = 0;

  for (let i = min, l = max + 1; i < l; i++) {
    sum += Math.pow(i, 2);
  }

  return sum;
}

function squareOfSum(min, max) {
  let sum = 0;

  for (let i = min, l = max + 1; i < l; i++) {
    sum += i
  }

  return Math.pow(sum, 2);
}

function sumSquareDifference(min, max) {
  return squareOfSum(min, max) - sumOfSquares(min, max);
}

const init = process.hrtime();
console.log(`Solution: ${sumSquareDifference(1, 100)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { sumOfSquares, squareOfSum, sumSquareDifference };
