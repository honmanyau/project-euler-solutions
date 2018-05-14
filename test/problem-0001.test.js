const assert = require('assert');
const functions = require('../0-100/problem-0001.js');

describe('Problem 1 functions:', () => {
  describe('sumOfMultiples(n, limit)', () => {
    const { sumOfMultiples } = functions;

    it([
      `should return the sum of all multiples of n that is less than limit`
    ].join(''), () => {
      assert.equal(18, sumOfMultiples(3, 10));
    });

    it([
      `should return the sum of all multiples of n, but excluding the limit`
    ].join(''), () => {
      assert.equal(18, sumOfMultiples(3, 12));
    });

    it([
      `should produce 23 if n1 = 3, n2 = 5, and limit = 10`
    ].join(''), () => {
      assert.equal(23, sumOfMultiples(3, 10) + sumOfMultiples(5, 10));
    });
  });
});
