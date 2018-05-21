const assert = require('assert');
const functions = require('../0-100/problem-0016.js');

describe('Problem 16 functions:', () => {
  describe('powerOf2Arr(n)', () => {
    const { powerOf2Arr } = functions;

    it([
      `should return '2' for n = 1`,
    ].join(''), () => {
      assert.equal(powerOf2Arr(1), '2');
    });

    it([
      `should return '256' for n = 8`,
    ].join(''), () => {
      assert.equal(powerOf2Arr(8).toString(), '256');
    });
  });

  describe('powerDigitSum(n)', () => {
    const { powerDigitSum } = functions;

    it([
      `should return 1 for n = 0`
    ].join(''), () => {
      assert.equal(powerDigitSum(0), 1);
    });

    it([
      `should return 1 for n = 8`
    ].join(''), () => {
      assert.equal(powerDigitSum(15), 26);
    });
  });
});
