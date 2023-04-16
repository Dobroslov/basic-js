const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    separator = '+',
    addition = '',
    repeatTimes = 1,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  }
) {
  str = String(str);
  addition = String(addition);
  let additionSeparatorLength = additionSeparator.length;
  let separatorLength = separator.length;
  let additionStr =
    str +
    (addition + additionSeparator)
      .repeat(additionRepeatTimes)
      .slice(0, -additionSeparatorLength);

  let resulStr = (additionStr + separator)
    .repeat(repeatTimes)
    .slice(0, -separatorLength);

  return resulStr;
}

module.exports = {
  repeater
};
