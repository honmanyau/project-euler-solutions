/*************/
/* Problem 1 */
/*************/

function sumOfMultiples(n, limit) {
  let sum = 0;
  let multiple = 0;

  for (let i = 1; multiple < limit; i++) {
    multiple = n * i;
    sum += multiple;
  }

  // Avoids looping an extra operation inside the for loop to check whether
  // or not the last multiple is over, or at, the limit
  sum -= multiple;

  return sum;
}

const sum3 = sumOfMultiples(3, 1000);
const sum5 = sumOfMultiples(5, 1000);
const sum15 = sumOfMultiples(15, 1000); // Overlap to be substracted

console.log(`Solution: ${sum3 + sum5 - sum15}.`);

module.exports = { sumOfMultiples };
