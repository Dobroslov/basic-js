const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arrDns) {
  const objDns = {};
  for (let i = 0; i < arrDns.length; i++) {
    let domainParts = arrDns[i].split('.').reverse();
    let stringDomain = '';
    for (let j = 0; j < domainParts.length; j++) {
      stringDomain += `.${domainParts[j]}`;

      if (objDns[stringDomain]) {
        objDns[stringDomain]++;
      } else {
        objDns[stringDomain] = 1;
      }
    }
  }
  return objDns;
}

module.exports = {
  getDNSStats,
};
