const assert = require('assert');
const functions = require('../0-100/problem-0006.js');

describe('Problem 6 functions:', () => {
  describe('sumOfSquares(min, max)', () => {
    const { sumOfSquares } = functions;

    it([
      `should return 385 if min = 1 and max = 10`
    ].join(''), () => {
      assert.equal(sumOfSquares(1, 10), 385);
    });
  });

  describe('squareOfSum(min, max)', () => {
    const { squareOfSum } = functions;

    it([
      `should return 3025 if min = 1 and max = 10`
    ].join(''), () => {
      assert.equal(squareOfSum(1, 10), 3025);
    });
  });

  describe('sumSquareDifference(min, max)', () => {
    const { sumSquareDifference } = functions;

    it([
      `should return 2640 if min = 1 and max = 10`
    ].join(''), () => {
      assert.equal(sumSquareDifference(1, 10), 2640);
    });
  });
});
