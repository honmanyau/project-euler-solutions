const assert = require('assert');
const functions = require('../0-100/problem-0009.js');

describe('Problem 9 functions:', () => {
  describe('findSpecialTriplet(sum)', () => {
    const { findSpecialTripletWithSum } = functions;

    it([
      `should return '{ a: 3, b: 4, c: 5 }' for sum = 12.`
    ].join(''), () => {
      assert.equal(
        JSON.stringify(findSpecialTripletWithSum(12)),
        JSON.stringify({ a: 3, b: 4, c: 5 })
      );
    });
  });

  describe('productOfTripletWithSum(sum)', () => {
    const { productOfTripletWithSum } = functions;
    it([
      `should return 60 for sum = 12.`
    ].join(''), () => {
      assert.equal(productOfTripletWithSum(12), 60);
    });
  });
});
