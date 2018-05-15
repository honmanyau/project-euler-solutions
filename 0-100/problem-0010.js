/**************/
/* Problem 10 */
/**************/

const fs = require('fs');
const primesBelow2000000 = JSON.parse(fs.readFileSync(
  `${__dirname}/resources/problem-0010.resource.js`,
  { encoding: 'utf-8' }
));

// Adapted from Problem 3 (Sieve of Eratosthenes):
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
      `${__dirname}/resources/problem-0010.resource.js`,
      JSON.stringify(primes)
    );
  }

  return primes;
}

// generatePrimes(2000000, true);

function summationOfPrimesBelow(limit = null) {
  const primes = limit ? generatePrimes(limit - 1) : primesBelow2000000;
  console.log(primes.length);

  return primes.reduce((acc, prime) => acc + prime, 0);
}

const init = process.hrtime();
console.log(`Solution: ${summationOfPrimesBelow()}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { generatePrimes, summationOfPrimesBelow };
