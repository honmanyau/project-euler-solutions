/*************/
/* Problem 7 */
/*************/

function generateNthPrimes(n) {
  const primes = [2];
  let m = 2;

  while (primes.length < n) {
    m += 1;

    const mIsPrime = primes.reduce((acc, p) => acc && m % p !==0, true);

    if (mIsPrime) {
      primes.push(m);
    }
  }

  return Number(primes.slice(-1));
}

const init = process.hrtime();
console.log(`Solution: ${generateNthPrimes(10001)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { generateNthPrimes };
