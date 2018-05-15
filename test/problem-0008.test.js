const assert = require('assert');
const functions = require('../0-100/problem-0008.js');

describe('Problem 8 functions:', () => {
  describe('largestProduct(n)', () => {
    const { largestProduct } = functions;

    it([
      `should return 5832 for n = 4`
    ].join(''), () => {
      assert.equal(largestProduct(4), 5832);
    });
  });
});
