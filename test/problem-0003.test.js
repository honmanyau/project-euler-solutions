const assert = require('assert');
const functions = require('../0-100/problem-0003.js');

describe('Problem 3 functions:', () => {
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

  describe('findLargestPrimeFactor(limit)', () => {
    const { findLargestPrimeFactor } = functions;

    it([
      `should return limit itself if limit is a prime number;`,
      ` limit = 11 should return 11.`
    ].join(''), () => {
      assert.equal(findLargestPrimeFactor(11), 11);
    });

    it([
      `should return the largest prime factor of a non-prime number;`,
      ` limit = 13195 should return 29.`
    ].join(''), () => {
      assert.equal(findLargestPrimeFactor(13195), 29);
    });
  });
});
