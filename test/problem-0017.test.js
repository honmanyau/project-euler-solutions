const assert = require('assert');
const functions = require('../0-100/problem-0017.js');

describe('Problem 17 functions:', () => {
  describe('parseUpTo99(m, str = String(m))', () => {
    const { parseUpTo99 } = functions;

    it([
      `should return '' for n = 0`,
    ].join(''), () => {
      assert.equal(parseUpTo99(0), '');
    });

    it([
      `should return 'One' for n = 1`,
    ].join(''), () => {
      assert.equal(parseUpTo99(1), 'One');
    });

    it([
      `should return 'Ten' for n = 10`,
    ].join(''), () => {
      assert.equal(parseUpTo99(10), 'Ten');
    });

    it([
      `should return 'Nineteen' for n = 19`,
    ].join(''), () => {
      assert.equal(parseUpTo99(19), 'Nineteen');
    });

    it([
      `should return 'Twenty' for n = 20`,
    ].join(''), () => {
      assert.equal(parseUpTo99(20), 'Twenty');
    });
  });

  describe('numberToWords(m, str = String(m))', () => {
    const { numberToWords } = functions;

    it([
      `should return '' for n = 0`,
    ].join(''), () => {
      assert.equal(numberToWords(0), '');
    });

    it([
      `should return 'OneHundredAndFifteen' for n = 115`,
    ].join(''), () => {
      assert.equal(numberToWords(115), 'OneHundredAndFifteen');
    });

    it([
      `should return 'TwoHundred' for n = 200`,
    ].join(''), () => {
      assert.equal(numberToWords(200), 'TwoHundred');
    });

    it([
      `should return 'ThreeHundredAndFortyTwo' for n = 342`,
    ].join(''), () => {
      assert.equal(numberToWords(342), 'ThreeHundredAndFortyTwo');
    });

    it([
      `should return 'OneThousand' for n = 1000`,
    ].join(''), () => {
      assert.equal(numberToWords(1000), 'OneThousand');
    });
  });


  describe('numberLetterCounts(start, end)', () => {
    const { numberLetterCounts } = functions;

    it([
      `should return 3 for start = 0, end = 1`
    ].join(''), () => {
      assert.equal(numberLetterCounts(0, 1), 3);
    });

    it([
      `should return 19 for start = 1, end = 5`
    ].join(''), () => {
      assert.equal(numberLetterCounts(1, 5), 19);
    });

    it([
      `should return 20 for start = 115, end = 115`
    ].join(''), () => {
      assert.equal(numberLetterCounts(115, 115), 20);
    });

    it([
      `should return 10 for start = 200, end = 200`
    ].join(''), () => {
      assert.equal(numberLetterCounts(200, 200), 10);
    });

    it([
      `should return 23 for start = 342, end = 342`
    ].join(''), () => {
      assert.equal(numberLetterCounts(342, 342), 23);
    });
  });
});
