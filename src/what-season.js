const { NotImplementedError } = require("../extensions/index.js");

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
function getSeason(date) {
  const currentNumberOfMonth = date.getMonth();
  let currentSeason;
  if (currentNumberOfMonth >= 2 && currentNumberOfMonth <= 4) {
    currentSeason = "spring";
  }
  if (currentNumberOfMonth >= 5 && currentNumberOfMonth <= 7) {
    currentSeason = "summer";
  }
  if (currentNumberOfMonth >= 8 && currentNumberOfMonth <= 10) {
    currentSeason = "autumn";
  }
  if (
    currentNumberOfMonth === 11 ||
    currentNumberOfMonth === 0 ||
    currentNumberOfMonth === 1
  ) {
    currentSeason = "winter";
  }
  return currentSeason;
}

module.exports = {
  getSeason,
};
