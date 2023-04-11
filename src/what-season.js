const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// function getSeason(date) {
//   let month = date.getMonth();

//   // spring, summer, autumn (fall), winter
//   if (month => 0 && month <= 1 && month === 11) {
//     return 'winter';
//   } else if (month >= 2 && month <= 4) {
//     return 'spring';
//   } else if (month >= 5 && month <= 7) {
//     return 'summer';
//   } else if (month >= 8 && month <= 10) {
//     return 'autumn';
//   }
// }

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date && !isNaN(date))) {
    return 'Invalid date!'
  }
  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
