/*************/
/* Problem 5 */
/*************/

// From Problem 3:
function generatePrimes(limit, write = false) {
  if (limit < 4) {
    throw new Error('Limit must be greater than 2.');
  }

  const primes = [];
  const range = Array.from(Array(limit + 1)).map((x, i) => i);
  let filtered = range.slice(2); // Create a new array *and* remove 0 and 1

  while (filtered.length) {
    const p = filtered[0];

    primes.push(p);
    filtered = filtered.filter((m) => m % p !== 0);
  }

  if (write) {
    fs.writeFileSync(
      `${__dirname}/resources/problem-0003.resource.js`,
      JSON.stringify(primes)
    );
  }

  return primes;
}

// Hypothesis: the samllest number n that can be evenly divided by the integers
// between m and n is the product of the smallest set of prime factors that
// can make up all the numbers between m and n (inclusive).

// Let m = 1 and n = 3, the solution to n is 2 x 3 = 6.
// Let m = 1 and n = 4, the solution to n is 2 x 3 x 2 = 12.
// Let m = 1 and n = 8, the solution to n is:
// 2 x 3 x 5 x 7 x 2 x 2 = 420.

function smallestMultiple(limit) {
  // Primes are pre-generated instead of generated dynamically since
  // only those before 20 are required
  const primes = generatePrimes(limit);
  const factors = primes.slice();

  for (let i = 4, l = limit + 1; i < l; i++) {
    if (primes.indexOf(i) === -1) {
      const quotient = factors.reduce((acc, factor) => {
        if (acc % factor === 0) {
          acc = acc / factor;
        }

        return acc;
      }, i);

      if (quotient !== 1) {
        factors.push(quotient);
      }
    }
  }

  const multiple = factors.reduce((acc, factor) => acc * factor, 1);

  return multiple;
}

const init = process.hrtime();
console.log(`Solution: ${smallestMultiple(20)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { generatePrimes, smallestMultiple };
