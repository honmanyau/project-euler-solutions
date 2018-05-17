const assert = require('assert');
const functions = require('../0-100/problem-0014.js');

describe('Problem 14 functions:', () => {
  describe('generateSequence(n)', () => {
    const { generateSequence } = functions;

    it([
      `should return [13, 40, 20, 10, 5, 16, 8, 4, 2, 1] for n = 13`,
    ].join(''), () => {
      assert.equal(generateSequence(13), '13,40,20,10,5,16,8,4,2,1');
    });
  });

  describe('findLongestSequenceBelow(n)', () => {
    const { findLongestSequenceBelow } = functions;

    it([
      `should return { 9: 20 } for n = 13`,
    ].join(''), () => {
      assert.equal(JSON.stringify(findLongestSequenceBelow(13)), JSON.stringify({
        9: 20
      }));
    });
  });
});
