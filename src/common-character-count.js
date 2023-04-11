const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arrLettters1 = str1.split('');
  const arrLettters2 = str2.split('');
  count = 0;
  for (let i = 0; i < arrLettters1.length; i++) {
    const index = arrLettters2.indexOf(arrLettters1[i]);
    if (index !== -1) {
      count++;
      arrLettters2.splice(index, 1);
    }
  }
  return count;
}
// console.log(getCommonCharacterCount('aabcc', 'adcaa'));
// // , 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));
// // , 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac'));
// // , 3);
// console.log(getCommonCharacterCount('', 'abc'));
// // , 0);
// console.log(getCommonCharacterCount('a', 'b'));
// // , 0);

module.exports = {
  getCommonCharacterCount
};
