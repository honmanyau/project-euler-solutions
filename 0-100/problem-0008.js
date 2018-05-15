/*************/
/* Problem 8 */
/*************/

const fs = require('fs');
const input = fs.readFileSync(
  `${__dirname}/resources/problem-0008.resource.js`,
  { encoding: 'utf-8' }
);

function largestProduct(n) {
  const limit = input.length;
  let result = 0;

  for (let i = 0, l = limit + 1 - n; i < l; i++) {
    const substring = input.slice(i, i + n);
    const product = substring.split('').reduce((acc, d) => {
      return acc * d;
    }, 1);

    result = (product > result) ? product : result;
  }

  return result;
}

const init = process.hrtime();
console.log(`Solution: ${largestProduct(13)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { largestProduct };
