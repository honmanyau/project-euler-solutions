/**************/
/* Problem 3: */
/**************/

const fs = require('fs');
const primesUpTo775146 = JSON.parse(fs.readFileSync(
  `${__dirname}/resources/problem-0003.resource.js`,
  { encoding: 'utf-8' }
));

// Reference: https://en.wikipedia.org/wiki/Primality_test
// For a given integer, n, if it divisible by any number, m, where m is an
// integer in the range 2 ≤ m ≤ √n, then it is not a prime number.

// This observation substantially reduces the maximum amount of prime numbers
// that need to be generated for carrying out primality tests on the any factors
// of n for current problem substantially—from an x/log(x) approximation
// of ~22153972243 to a very workable amount of ~57161, where x equals
// 600851475143 and √600851475143 = 77514 (floor), respectively. This list is
// pre-generated to speed up further calculations.

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

// Uncomment to generate the prime numbers required for 600851475143
// generatePrimes(Math.ceil(Math.sqrt(600851475143)), true);

function findLargestPrimeFactor(limit) {
  // As above, pairs of composites found after m > √n will be mirros of
  // those found for m < √n, hence one only needs to find factors up to √n
  let factors = [];

  for (let m = 2, l = Math.sqrt(limit); m < l; m++) {
    if (limit % m === 0) {
      const quotient = limit / m;

      factors.push(m, quotient);
    }
    else {
      continue;
    }
  }

  factors.sort((a, b) => b - a);

  for (let i = 0, l = factors.length; i < l; i++) {
    const factor = factors[i];
    let factorIsPrime = true;

    for (let j = 0, o = primesUpTo775146.length; j < o; j++) {
      const prime = primesUpTo775146[j];

      if (prime >= factor) {
        break;
      }

      factorIsPrime = factorIsPrime && factor % prime !== 0;
    }

    if (factorIsPrime) {
      return factor;
    }
  }

  return limit;
}

const init = process.hrtime();
console.log(`Solution: ${findLargestPrimeFactor(600851475143)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { generatePrimes, findLargestPrimeFactor };
