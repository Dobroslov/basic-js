const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  if (num <= 9) {
    return num;
  }

  return getSumOfDigits(
    String(num)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0)
  );
}
// remove line with error and write your code here

module.exports = {
  getSumOfDigits,
};
