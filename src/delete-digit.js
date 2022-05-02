const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arrDig = [];
  let res = 0;
  while (num) {
    arrDig.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let iNum = 0; iNum < arrDig.length; iNum++) {
    let n = 0;
    for (let i = arrDig.length - 1; i >= 0; i--) {
      if (i !== iNum) {
        n = n * 10 + arrDig[i];
      }
    }
    res = Math.max(n, res);
  }
  return res;
}

module.exports = {
  deleteDigit,
};
