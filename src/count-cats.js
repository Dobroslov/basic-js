const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(arr) {
  if (!arr) {
    return false;
  } else {
    let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
      if (element[j] === '^^') {
        count += 1;
      }
    }
  }
  return count;
  }
}

module.exports = {
  countCats,
};
