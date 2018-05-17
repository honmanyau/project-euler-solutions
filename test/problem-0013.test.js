const assert = require('assert');
const functions = require('../0-100/problem-0013.js');

describe('Problem 13 functions:', () => {
  describe('sumOfFirstNDigits(n, nums = input)', () => {
    const { sumOfFirstNDigits } = functions;

    it([
      `should return 40 for n = 2 and input =\n`,
      `1000\n1000\n1000\n1000`
    ].join(''), () => {
      assert.equal(sumOfFirstNDigits(2, '1000\n1000\n1000\n1000'), 40);
    });

    it([
      `should return 39 for n = 2 and input =\n`,
      `9999\n9999\n9999\n9999`
    ].join(''), () => {
      assert.equal(sumOfFirstNDigits(2, '9999\n9999\n9999\n9999'), 39);
    });

    it([
      `should return 399 for n = 3 and input =\n`,
      `9999\n9999\n9999\n9999`
    ].join(''), () => {
      assert.equal(sumOfFirstNDigits(3, '9999\n9999\n9999\n9999'), 399);
    });

    it([
      `should return 399 for n = 4 and input =\n`,
      `9999\n9999\n9999\n9999`
    ].join(''), () => {
      assert.equal(sumOfFirstNDigits(4, '9999\n9999\n9999\n9999'), 3999);
    });
  });
});
