const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrValueNames) {
  if (Array.isArray(arrValueNames)) {
    let secretTeamName = [];
    for (let i = 0; i < arrValueNames.length; i++) {
      if (typeof arrValueNames[i] === 'string') {
        secretTeamName.push(arrValueNames[i].trim().charAt(0).toUpperCase());
      }
    }
    return secretTeamName.sort().join('');
  } else return false;
}

module.exports = {
  createDreamTeam,
};
