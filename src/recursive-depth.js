const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arrays) {
    // console.log('start');
    let depthArr = 1;

    if (Array.isArray(arrays)) {
      for (let i = 0; i < arrays.length; i++) {
        const currentDepth = this.calculateDepth(arrays[i]) + 1;
        if (currentDepth > depthArr) {
          depthArr = currentDepth;
        }
      }
    } else {
      return 0;
    }
    return depthArr;
  }
}

module.exports = {
  DepthCalculator
};
