const assert = require('assert');
const functions = require('../0-100/problem-0007.js');

describe('Problem 7 functions:', () => {
  describe('generateNthPrimes(n)', () => {
    const { generateNthPrimes } = functions;

    it([
      `should return 7 if n = 4.`
    ].join(''), () => {
      assert.equal(generateNthPrimes(4), 7);
    });
  });
});
