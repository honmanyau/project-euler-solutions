/*************/
/* Problem 9 */
/*************/

// Conditions given:
// 1. a < b < c
// 2. a^2 + b^2 = c^2
// 3. a + b + c = 1000

// 4. According only to 1., the limit of c is 997 (sum - 3).
// 5. Without reference to 1., and according only to the limit of c in 4. and
//    3., the limit of b is 996 and the limit of a is 995

function findSpecialTripletWithSum(sum) {
  // Pre-generate squares to avoid unnecessary Math.pow() in nested loops
  const squares = Array.from(Array(sum - 2))
    .map((x, index) => index)
    .map((num) => Math.pow(num, 2));

  for (let c = sum - 3; c >= 1; c--) {
    const limB = c - 1;

    for (let b = limB; b >= 1; b--) {
      const limA = b - 1;

      for (let a = limA; a >= 1; a--) {
        if (a + b + c !== sum) {
          continue;
        }

        if (squares[a] + squares[b] === squares[c]) {
          return { a, b, c };
        }
      }
    }
  }

  return null;
}

function productOfTripletWithSum(sum) {
  const triplet = findSpecialTripletWithSum(sum);

  if (!triplet) {
    return 'No solution.';
  }

  const { a, b, c } = triplet;

  return a * b * c;
}

const init = process.hrtime();
console.log(`Solution: ${productOfTripletWithSum(1000)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { findSpecialTripletWithSum, productOfTripletWithSum };
