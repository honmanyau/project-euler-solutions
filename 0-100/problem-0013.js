/**************/
/* Problem 13 */
/**************/

const fs = require('fs');
const input = fs.readFileSync(
  `${__dirname}/resources/problem-0013.resource.js`,
  { encoding: 'utf-8' }
);

function sumOfFirstNDigits(n, data = input) {
  const strs = data.split('\n');
  // Avoid handling numbers > 2 ** 53 - 1;
  const multiplier = strs.length;
  const dn = String(multiplier).length;
  const nDigits = strs.map((str) => str.slice(0, n));
  const dnDigits = strs.map((str) => str.slice(n, n + dn));
  const sumOfNDigits = nDigits.reduce((acc, str) => acc + Number(str), 0);
  const sumOfDnDigits = dnDigits.reduce((acc, str) => acc + Number(str), 0);
  const result = sumOfNDigits + Number(String(sumOfDnDigits).slice(0, -dn));

  if (result > 2 ** 53 - 1) {
    throw new Error('Result has reached precision limit of 2 ** 53 - 1.')
  }

  return Number(String(result).slice(0, n));
}

const init = process.hrtime();
console.log(`Solution: ${sumOfFirstNDigits(10)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { sumOfFirstNDigits };
