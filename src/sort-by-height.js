const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = (arrHeights) => {
  const arrWithoutNegatives = arrHeights.filter(num => num !== -1);
  const sortedArrWithoutNegatives = arrWithoutNegatives.sort((a, b) => a - b);
  let i = 0;
  return arrHeights.map(num => {
    if (num === -1) {
      return -1;
    } else {
      const sortedNum = sortedArrWithoutNegatives[i];
      i++;
      return sortedNum;
    }
  });
};


module.exports = {
  sortByHeight
};
