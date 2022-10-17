const { NotImplementedError } = require("../extensions/index.js");

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
function getDNSStats(domains) {
  let resArr = {};
  let domainsArr = domains.map((address) => address.split(".").reverse());
  domainsArr.forEach((el) => {
    let x = "";
    for (let i = 0; i < el.length; i++) {
      x += "." + el[i];
      if (resArr[x] === undefined) {
        resArr[x] = 1;
      } else {
        resArr[x]++;
      }
    }
  });
  return resArr;
}

module.exports = {
  getDNSStats,
};
