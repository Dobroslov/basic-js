const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(text) {
  let encodedText = '';
  let countLetters = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      countLetters++;
    } else {
      encodedText += countLetters > 1 ? countLetters + text[i] : text[i];
      countLetters = 1;
    }
  }
  return encodedText;
}

module.exports = {
  encodeLine
};
