const assert = require('assert');
const functions = require('../0-100/problem-0010.js');

describe('Problem 10 functions:', () => {
  describe('generatePrimes(limit)', () => {
    const { generatePrimes } = functions;

    it([
      `should throw an error of 'Limit must be greater than 3.' if a limit`,
      ` of < 4 is supplied.`
    ].join(''), () => {
      assert.throws(() => { generatePrimes(3) }, Error);
    });

    it([
      `should return [2, 3, 5, 7] if a limit of 8 is supplied.`
    ].join(''), () => {
      assert.equal(generatePrimes(8).toString(), '2,3,5,7');
    });

    it([
      `should return [2, 3, 5, 7, 11] if a limit of 11 is supplied`,
      ` (including the limit).`
    ].join(''), () => {
      assert.equal(generatePrimes(11).toString(), '2,3,5,7,11');
    });
  });

  describe('summationOfPrimesBelow(limit)', () => {
    const { summationOfPrimesBelow } = functions;

    it([
      `should return 17 for limit = 11`
    ].join(''), () => {
      assert.equal(summationOfPrimesBelow(10), 17);
    });

    it([
      `should return 28 for limit = 12`
    ].join(''), () => {
      assert.equal(summationOfPrimesBelow(11), 17);
    });
  });
});
