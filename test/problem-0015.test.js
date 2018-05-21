const assert = require('assert');
const functions = require('../0-100/problem-0015.js');

describe('Problem 15 functions:', () => {
  describe('generatePaths(gridSize = 20, x = 0, y = 0)', () => {
    const { generatePaths } = functions;

    it([
      `a 2 x 2 grid should have 6 valid paths`,
    ].join(''), () => {
      assert.equal(generatePaths(2), 6);
    });
  });

  describe('generatePathsSym(gridSize = 20, x = 0, y = 0)', () => {
    const { generatePathsSym } = functions;

    it([
      `a 2 x 2 grid should have 6 valid paths`,
    ].join(''), () => {
      assert.equal(generatePathsSym(2), 6);
    });
  });

  describe('generatePathsSymSum(gridSize = 20, x = 0, y = 0)', () => {
    const { generatePathsSymSum } = functions;

    it([
      `a 2 x 2 grid should have 6 valid paths`,
    ].join(''), () => {
      assert.equal(generatePathsSymSum(2), 6);
    });
  });

  describe('getPartialPath(size, lim = 1, x = 0, y = 0)', () => {
    const { getPartialPath } = functions;

    it([
      `a 4 x 4 grid should return 1 path for lim = 4`,
    ].join(''), () => {
      assert.equal(getPartialPath(4, 4), 1);
    });

    it([
      `a 4 x 4 grid should return 1 path for lim = 4`,
    ].join(''), () => {
      assert.equal(getPartialPath(4, 2), 10);
    });
  });

  describe('factorial(n)', () => {
    const { factorial } = functions;

    it([
      `an input of n = 1 should return 1`,
    ].join(''), () => {
      assert.equal(factorial(1), 1);
    });

    it([
      `an input of n = 3 should return 6`,
    ].join(''), () => {
      assert.equal(factorial(3), 6);
    });

    it([
      `an input of n = 6 should return 720`,
    ].join(''), () => {
      assert.equal(factorial(6), 720);
    });
  });

  describe('latticePaths(n)', () => {
    const { latticePaths } = functions;

    it([
      `an input of n = 2 should return 6`,
    ].join(''), () => {
      assert.equal(latticePaths(2), 6);
    });

    it([
      `an input of n = 3 should return 20`,
    ].join(''), () => {
      assert.equal(latticePaths(3), 20);
    });

    it([
      `an input of n = 3 should return 70`,
    ].join(''), () => {
      assert.equal(latticePaths(4), 70);
    });
  });

});
