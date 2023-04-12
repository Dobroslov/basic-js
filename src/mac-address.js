const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
const isMAC48Address = (str) => {
  const regex = /([0-9A-F]{2}-){5}[0-9A-F]{2}/;
  // [0-9A-F]{2} группа из двух символов, в которой должны быть цифры и буквы от A до F
  // ([0-9A-F]{2}-){5} группа из первых 5 значений со знаком "-"
  // [0-9A-F]{2} последняя группа из двух символов, так как "-" у неё нет, поэтому и условие отдельное
  return regex.test(str);
};
module.exports = {
  isMAC48Address,
};
