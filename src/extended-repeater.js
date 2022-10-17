const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (options.hasOwnProperty("addition")) {
    let additionalArr = [];
    let addRep = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    for (let i = 0; i < addRep; i++)
      additionalArr.push(String(options.addition));
    str =
      str +
      additionalArr.join(
        options.additionSeparator ? options.additionSeparator : "|"
      );
  }
  let resArr = [];
  let repTim = options.repeatTimes ? options.repeatTimes : 1;
  for (let i = 0; i < repTim; i++) resArr.push(str);
  return resArr.join(options.separator ? options.separator : "+");
}

module.exports = {
  repeater,
};
