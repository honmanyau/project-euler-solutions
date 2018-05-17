const assert = require('assert');
const functions = require('../0-100/problem-0012.js');

describe('Problem 12 functions:', () => {
  describe('findAllFactorsOf(num)', () => {
    const { findAllFactorsOf } = functions;

    it([
      `should return [1, 2, 4, 7, 14, 28] for num = 28.`
    ].join(''), () => {
      assert.equal(findAllFactorsOf(28).toString(), '1,2,4,7,14,28');
    });
  });

  describe('generateNthTriangularNumber(n)', () => {
    const { generateNthTriangularNumber } = functions;

    it([
      `should return 28 for n = 7.`
    ].join(''), () => {
      assert.equal(generateNthTriangularNumber(7).toString(), 28);
    });
  });

  describe('findFirstTriangleNumberWithNumberOfFactors(n)', () => {
    const { findFirstTriangleNumberWithNumberOfFactors } = functions;

    it([
      `should return 6 for n = 4`
    ].join(''), () => {
      assert.equal(findFirstTriangleNumberWithNumberOfFactors(4), 28);
    });
  });
});
