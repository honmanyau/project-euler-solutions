/**************/
/* Problem 14 */
/**************/

const fs = require('fs');

function generateSequence(n) {
  // Since a counter example has not be found yet, it's probable safe to
  // assume that any numbers up to 1000000 will generate a sequence that
  // finishes at 1
  const sequence = [n];
  let lastNum = n;

  while(lastNum !== 1) {
    if (lastNum % 2 === 0) {
      lastNum /= 2;
    }
    else {
      lastNum = lastNum * 3 + 1;
    }

    sequence.push(lastNum);
  }

  return sequence;
}

function findLongestSequenceBelow(n) {
  let m = 1;
  let l = 1;

  for (let i = 1; i < n; i++) {
    const sequenceLength = generateSequence(i).length;

    if (sequenceLength > l) {
      m = i;
      l = sequenceLength;
    }
  }

  return { [m]: l };
};

const init = process.hrtime();
console.log(`Solution: ${JSON.stringify(findLongestSequenceBelow(1000000))}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { generateSequence, findLongestSequenceBelow };
