const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumColumn = 0;
  for (let col = 0; col < matrix[0].length; col++) {
    let isZero = false;
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === 0) {
        isZero = true;
      } else if (!isZero) {
        sumColumn += matrix[row][col];
      }
    }
  }
  return sumColumn;
}

module.exports = {
  getMatrixElementsSum,
};
