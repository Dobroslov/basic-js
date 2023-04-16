const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const controlSequences = {
    '--discard-next': (result, i) => {
      if (i < arr.length - 1) {
        i++;
      }
      return result;
    },
    '--discard-prev': (result, i) => {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
      return result;
    },
    '--discard-next': (result, i) => {
      i++;
      if (arr[i] && controlSequences[arr[i]]) {
        i++;
      }
      return result;
    },
    '--double-prev': (result, i) => {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
      }
      return result;
    },
  };

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (controlSequences[arr[i]]) {
      result = controlSequences[arr[i]](result, i);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
