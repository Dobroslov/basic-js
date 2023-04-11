const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const arrDigits = Array.from(num.toString(), Number);
  const resultArr = arrDigits.map((_, i, arr) => {
    const tempArr = [...arr];
    tempArr.splice(i, 1);
    const tempNum = tempArr.join('');
    return tempNum;
  });  
  return Math.max(...resultArr);
}

module.exports = {
  deleteDigit
};
