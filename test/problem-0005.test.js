const assert = require('assert');
const functions = require('../0-100/problem-0005.js');

describe('Problem 5 functions:', () => {
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
  
  describe('smallestMultiple(limit)', () => {
    const { smallestMultiple } = functions;

    it([
      `should return 2520 if limit = 10`
    ].join(''), () => {
      assert.equal(smallestMultiple(10), 2520);
    });
  });
});
