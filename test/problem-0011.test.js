const assert = require('assert');
const functions = require('../0-100/problem-0011.js');

describe('Problem 11 functions:', () => {
  describe('largestProductInGrid(n, input)', () => {
    const { largestProductInGrid } = functions;

    it([
      `should return 81 for n = 2 input = \n9 9 0\n8 6 2\n1 0 7`
    ].join(''), () => {
      assert.equal(largestProductInGrid(2, '9 9 0\n8 6 2\n1 0 7'), 81);
    });

    it([
      `should return 72 for n = 2 input = \n9 7 0\n8 6 2\n1 0 7`
    ].join(''), () => {
      assert.equal(largestProductInGrid(2, '9 7 0\n8 6 2\n1 0 7'), 72);
    });

    it([
      `should return 63 for n = 2 input = \n9 2 3\n4 7 2\n1 0 7`
    ].join(''), () => {
      assert.equal(largestProductInGrid(2, '9 2 3\n4 7 2\n1 0 7'), 63);
    });

    it([
      `should return 56 for n = 2 input = \n6 8 3\n7 1 2\n1 0 7`
    ].join(''), () => {
      assert.equal(largestProductInGrid(2, '6 8 3\n7 1 2\n1 0 7'), 56);
    });
  });
});
