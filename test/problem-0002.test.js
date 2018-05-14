const assert = require('assert');
const functions = require('../0-100/problem-0002.js');

describe('Problem 2 functions:', () => {
  describe('sumOfEvenFibonacciTerms(limit, i = 0, j = 1, sum = 0)', () => {
    const { sumOfEvenFibonacciTerms } = functions;

    it([
      `should return 2 for a limit of 3 as the terms up to, and including 3,`,
      ` are 1, 2, 3.`
    ].join(''), () => {
      assert.equal(2, sumOfEvenFibonacciTerms(3));
    });

    it([
      `should return 10 for a limit of 8 as the terms up to, and including 8,`,
      ` 1, 2, 3, 5, 8.`
    ].join(''), () => {
      assert.equal(10, sumOfEvenFibonacciTerms(8));
    });
  });
});
