const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arrFileNames) {
  const arrOfCorrectedFileNames = [];
  let count = {};
  for (let i = 0; i < arrFileNames.length; i++) {
    let name = arrFileNames[i];
    if (!arrOfCorrectedFileNames.includes(name)) {
      arrOfCorrectedFileNames.push(name);
      count[name] = 1;
    } else {
      let newName = `${name}(${count[name]})`;
      arrOfCorrectedFileNames.push(newName);
      count[name]++;
      count[newName] = 1;
    }
  }
  return arrOfCorrectedFileNames;
}

module.exports = {
  renameFiles
};
