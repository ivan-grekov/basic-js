const { NotImplementedError } = require("../extensions/index.js");

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
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const resArr = arr.slice();
  for (let i = 0; i < resArr.length; ) {
    if (resArr[i] === "--double-prev" && resArr[i - 1]) {
      resArr.splice(i - 1, 0, resArr[i - 1]);
      i += 2;
      continue;
    }
    if (resArr[i] === "--discard-prev" && resArr[i - 1]) {
      resArr.splice(i - 1, 1);
      continue;
    }
    if (resArr[i] === "--double-next" && resArr[i + 1]) {
      resArr.splice(i + 1, 0, resArr[i + 1]);
      i++;
      continue;
    }
    if (resArr[i] === "--discard-next" && resArr[i + 1]) {
      resArr.splice(i + 1, 1);
      i = i + 1;
      continue;
    } else i++;
  }
  for (let j = 0; j < resArr.length; ) {
    if (
      resArr[j] === "--double-prev" ||
      resArr[j] === "--discard-prev" ||
      resArr[j] === "--double-next" ||
      resArr[j] === "--discard-next"
    ) {
      resArr.splice(j, 1);
      continue;
    } else j++;
  }

  console.log(resArr);
  return resArr;
}

module.exports = {
  transform,
};
