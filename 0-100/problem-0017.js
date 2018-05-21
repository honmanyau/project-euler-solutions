/**************/
/* Problem 17 */
/**************/

function parseUpTo99(m, str = String(m)) {
  const oneTo19 = [
    '',
    'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const tens = [
    '',
    1, 'Twenty', 'Thirty', 'Forty', 'Fifty',
    'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  if (m < 20) {
    return oneTo19[m];
  }
  else {
    const d = Number(str.substr(1, 1));
    const h = Number(str.substr(0, 1));

    return tens[h] + oneTo19[d];
  }
}

function numberToWords(m, str = String(m)) {
  const revArr = str.split('').reverse();
  // Create an array from the reversed array that is grouped as follows for
  // the number m = 198198: ['98', '1', '98', '1'];
  const arr = revArr.reduce((acc, char, index) => {
    const rem = index % 3;

    if (rem === 0) {
      acc = acc.concat([revArr.slice(index, index + 2).reverse().join('')]);
    }
    else if (rem === 2) {
      acc = acc.concat(revArr.slice(index, index + 1));
    }

    return acc;
  }, []);
  // Map the reversed and groupped array to the corresponding words
  const words = arr.map((substr, index) => {
    const rem = index % 2;
    const num = Number(substr);
    const plural = num > 1 ? 's' : '';
    let word = parseUpTo99(num);

    if (word) {
      if (rem) {
        word += 'Hundred'
      }
      else {
        const d = Math.floor(index / 2);
        const suffix = ['', 'Thousand', 'Million', 'Billion', 'Trillion']
        const prefix = Number(arr[index + 1]) ? 'And' : '';

        word += suffix[d] + (d > 0 ? plural : '');
        word = prefix + word;
      }
    }

    return word;
  });

  return words.reverse().join('');
}

function numberLetterCounts(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    const words = numberToWords(i);
    sum += words.length;
  }

  return sum;
}

const init = process.hrtime();
console.log(`Solution: ${numberLetterCounts(1, 1000)}.`);
const final = process.hrtime(init);
console.log(`Time taken: ${final[0] * 1000 + final[1] / 1000000} ms.`);

module.exports = { parseUpTo99, numberToWords, numberLetterCounts };
