/**************/
/* Problem 12 */
/**************/

function findAllFactorsOf(num) {
  let factors = [];
  // Only need to calculate up to √n as pairs of composites are mirrored
  // after that
  for (let i = 1, l = Math.sqrt(num); i <= l; i++) {
    const isFactor = num % i === 0;

    if (isFactor) {
      const quotient = num / i;

      if (i !== quotient) {
        factors.push(quotient);
      }

      factors.push(i)
    }
  }

  return factors.sort((a, b) => a - b);
}

// Deprecated
// function generateTriangleNumbers(n) {
//   const indicies = Array.from(Array(n + 1)).map((x, index) => index);
//   const triangularNumbers = indicies.slice(0);
//
//   for (let i = 1, l = indicies.length; i < l; i++) {
//     triangularNumbers[i] = triangularNumbers[i] + triangularNumbers[i - 1];
//   }
//
//   triangularNumbers.shift();
//
//   return triangularNumbers;
// }

function generateNthTriangularNumber(n) {
  return n * (n + 1) / 2;
}

function findFirstTriangleNumberWithNumberOfFactors(n) {
  let triangularNumber;
  let factors = [];

  for (let i = 1; factors.length <= n; i++) {
    triangularNumber = generateNthTriangularNumber(i);
    factors = findAllFactorsOf(triangularNumber);
  }

  return triangularNumber;
}

const init = process.hrtime();
console.log(`Solution: ${findFirstTriangleNumberWithNumberOfFactors(500)}`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = {
  findAllFactorsOf,
  generateNthTriangularNumber,
  findFirstTriangleNumberWithNumberOfFactors
};
