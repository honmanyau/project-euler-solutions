/**************/
/* Problem 16 */
/**************/

function powerOf2Arr(n, arr = [1]) {
  const arrLen = arr.length;

  if (n > 0) {
    for (let i = 0; i < arrLen; i++) {
      const num = arr[i];
      const doubled = num * 2;
      const overflow = Math.floor(doubled / 1E14);

      if (overflow) {
        const trailing = doubled - 1E14 * overflow;
        const nextNum = arr[i + 1];

        if (!nextNum) {
          arr.push(overflow);
        }
        else {
          arr[i + 1] = nextNum + 0.5;
        }

        arr[i] = trailing;
      }
      else {
        arr[i] = doubled;
      }
    }

    return powerOf2Arr(n - 1, arr);
  }

  // Zero-padding—when a sub number starts with 5 and is 14 digits long,
  // one digit is "lost" as the operations are all Number based.
  const str = arr.reverse().map((num, index) => {
    let str = String(num);

    if (index > 0) {
      const len = str.length;

      str = len < 14 ? '0'.repeat(14 - len) + str : str;
    }

    return str
  }).join('');

  return str;
}

function powerDigitSum(n) {
  const str = powerOf2Arr(n);
  const sum = str.split('').reduce((acc, char) => acc + Number(char), 0);

  return sum;
}

const init = process.hrtime();
console.log(`Solution: ${powerDigitSum(1000)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { powerOf2Arr, powerDigitSum };
