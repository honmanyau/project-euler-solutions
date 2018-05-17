/**************/
/* Problem 11 */
/**************/

const fs = require('fs');
const input = fs.readFileSync(
  `${__dirname}/resources/problem-0011.resource.js`,
  { encoding: 'utf-8' }
);

function largestProductInGrid(n, nums = input) {
  const grid = nums.split('\n').map((row) => row.split(' '));
  const l = grid.length;
  const rightLimit = l - n;
  const leftLimit = n - 1;
  const bottomLimit = l - n;
  const topLimit = n - 1;
  let result = 0;

  for (let y = 0; y < l; y++) {
    for (let x = 0; x < l; x++) {
      // Right/Left
      if (x <= rightLimit) {
        let product = 1;

        for (let dx = x, dxl = x + n; dx < dxl; dx++) {
          product *= Number(grid[y][dx]);
        }

        result = (product > result) ? product : result;
      }

      // Down/Up
      if (y <= bottomLimit) {
        let product = 1;

        for (let dy = y, dyl = y + n; dy < dyl; dy++) {
          product *= Number(grid[dy][x]);
        }

        result = (product > result) ? product : result;
      }

      // Diagonal, left to right
      if (x <= rightLimit && y <= bottomLimit) {
        let product = 1;

        for (
          let dy = y, dx = x, dyl = y + n, dxl = x + n;
          dy < dyl && dx < dxl;
          dy++, dx++
        ) {
          product *= Number(grid[dy][dx]);
        }

        result = (product > result) ? product : result;
      }

      // Diagonal, right to left
      if (x >= leftLimit && y <= bottomLimit) {
        let product = 1;

        for (
          let dy = y, dx = x, dyl = y + n, dxl = x - n;
          dy < dyl && dx > dxl;
          dy++, dx--
        ) {
          product *= Number(grid[dy][dx]);
        }

        result = (product > result) ? product : result;
      }
    }
  }

  return result;
}

const init = process.hrtime();
console.log(`Solution: ${largestProductInGrid(4)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { largestProductInGrid };
