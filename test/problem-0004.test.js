const assert = require('assert');
const functions = require('../0-100/problem-0004.js');

describe('Problem 4 functions:', () => {
  describe('palindromeCheck(input)', () => {
    const { palindromeCheck } = functions;

    it([
      `should return true if input is a palindrome; for example: 'hannah'`
    ].join(''), () => {
      assert.equal(palindromeCheck('hannah'), true);
    });

    it([
      `should return true if input is a palindromic number; for example: 9009`
    ].join(''), () => {
      assert.equal(palindromeCheck(9009), true);
    });

    it([
      `should return false if input is not a palindrome; for example: 'alice'`
    ].join(''), () => {
      assert.equal(palindromeCheck('alice'), false);
    });
  });

  describe('findLargestPalindromeInRange(start, end)', () => {
    const { findLargestPalindromeInRange } = functions;

    it([
      `should return 9009 for start = 10 and end = 99`
    ].join(''), () => {
      assert.equal(findLargestPalindromeInRange(10, 99), 9009);
    });
  });
});
